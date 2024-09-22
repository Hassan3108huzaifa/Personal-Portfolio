import type { Metadata } from "next";
import "./globals.css";
import './SmoothScroll.css';

export const metadata: Metadata = {
  title: "HassanRJ Portfolio", // Just a simple string, no template
  description: "Discover HassanRJ's journey as a Front-end Developer and UI Designer specializing in Next.js and TypeScript.",
  openGraph: {
    title: "HassanRJ Personal Portfolio",
    description: "Explore the creative journey of HassanRJ, a passionate Front-end Developer and UI Designer specializing in Next.js and TypeScript.",
    url: "https://hassanrj-portfolio.vercel.app", // Your website URL
    images: [
      {
        url: "/pic.jpg", // Make sure this image is in your public folder
        width: 600,
        height: 600,
        alt: "HassanRJ Portfolio Banner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Directly use the title if it's a string
  const getTitle = () => {
    return typeof metadata.title === "string" ? metadata.title : "HassanRJ Portfolio";
  };

  return (
    <html lang="en">
      <head>
        <title>{getTitle()}</title>
        <meta name="description" content={metadata.description || ''} />
        {/* Other meta tags */}
      </head>
      <body>{children}</body>
    </html>
  );
}
