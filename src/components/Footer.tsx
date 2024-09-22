'use client'
import Link from 'next/link'
import { Facebook, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="mb-6 text-sm hover:text-gray-300 transition-colors duration-300"
          >
            BACK TO TOP
          </button>
          <div className="flex space-x-6 mb-6">
            <Link href="https://www.facebook.com/profile.php?id=100067756576220" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-gray-300 transition-colors duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/hassan-rj-148220295/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-gray-300 transition-colors duration-300" />
            </Link>
            <Link href="https://www.instagram.com/mr.hassanbhai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-gray-300 transition-colors duration-300" />
            </Link>
            <Link href="mailto:huzaifa3108hassan@example.com" aria-label="Email">
              <Mail className="w-5 h-5 hover:text-gray-300 transition-colors duration-300" />
            </Link>
          </div>
          <p className="text-xs text-gray-400">
            ©{currentYear} Hassan RJ. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}