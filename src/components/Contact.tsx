'use client'
import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (result.success) {
                setIsSubmitted(true)
            } else {
                setError(result.error || 'Failed to send email')
            }
        } catch (error) {
            setError('An error occurred while sending the email')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
                <div className="max-w-md w-full space-y-8 mb-20">
                    <div className="text-center">
                        <h2 className="text-green-600 text-3xl font-bold mb-4">Success!</h2>
                        <p className="text-green-600">Your message has been sent successfully.</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 mb-20">
                <div className="text-center">
                    <h2
                        id='contact'
                        className="text-black inline-block px-4 py-2 text-xl mb-8 mt-20 font-bold"
                        style={{
                            width: '187px',
                            border: '3px solid black',
                            fontFamily: 'Montserrat, sans-serif',
                            letterSpacing: '0.2em',
                        }}
                    >
                        CONTACT
                    </h2>
                </div>

                <p className="text-center text-sm mt-4 mb-8">
                    I create premium, responsive websites using modern design and AI. Whether you need a new site or improvements to your current one, I’m ready to help. Reach out for freelance projects or full-time opportunities. Let’s turn your vision into reality!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="ENTER YOUR NAME*"
                            className="w-full px-3 py-2 border-b-2 border-black bg-transparent focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ENTER YOUR EMAIL*"
                            className="w-full px-3 py-2 border-b-2 border-black bg-transparent focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="PHONE NUMBER"
                            className="w-full px-3 py-2 border-b-2 border-black bg-transparent focus:outline-none"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="YOUR MESSAGE*"
                            rows={4}
                            className="w-full px-3 py-2 border-b-2 border-black bg-transparent focus:outline-none resize-none"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-block border-2 border-black px-8 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50"
                        >
                            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                        </button>
                    </div>
                </form>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </div>
        </div>
    )
}
