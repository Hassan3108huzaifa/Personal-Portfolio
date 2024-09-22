import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/ContactFormEmail';

const resend = new Resend('re_bYEVgCya_25yJJsX5jPmhFwKFdJZ48ann'); // Direct API key use

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    console.log('Received form data:', { name, email, phone, message });

    const data = await resend.emails.send({
      from: 'HassanRJ Next Portfolio <onboarding@resend.dev>',
      to: 'huzaifa3108hassan@gmail.com', // Yahan apni recipient email dalen
      subject: 'New Contact Form Submission',
      react: ContactFormEmail({ name, email, phone, message }),
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
