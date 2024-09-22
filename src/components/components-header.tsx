'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'

export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { name: 'About me', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact me', to: 'contact', isButton: true },
  ]

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden relative">
      <Head>
        <link rel="preload" href="/pic.jpg" as="image" />
      </Head>

      {/* Mobile Header */}
      <div className="md:hidden w-full h-screen bg-black text-white relative overflow-hidden">
        <div className="p-6 flex flex-col justify-between h-full relative z-10">
          <div className="flex justify-between items-center">
            <div></div>
            <button onClick={toggleMenu} className="text-white z-20">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="text-center">
              <p className="text-xl mb-2">Hi, I am</p>
              <h1 className="text-4xl font-bold mb-2">HassanRJ</h1>
              <p className="text-lg text-gray-300">Front-end Developer / UI Designer</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4 relative z-20">
            <Link href="https://discord.gg/xCu3xt3emv" target='_blank' className="p-2 bg-gray-800 rounded-full shadow-md">
              <FaDiscord className="w-5 h-5 text-white" />
            </Link>
            <Link href="https://github.com/Hassan3108huzaifa" target='_blank' className="p-2 bg-gray-800 rounded-full shadow-md">
              <Github className="w-5 h-5 text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/hassan-rj-148220295/" target='_blank' className="p-2 bg-gray-800 rounded-full shadow-md">
              <Linkedin className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/pic.jpg"
            alt="Hassan RJ"
            fill={true}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="brightness-50"
            priority
          />
        </motion.div>
        <div 
          className="absolute bottom-0 left-0 w-full h-2/5 bg-white bg-opacity-80 transform -skew-y-6 origin-bottom-left"
          style={{ transform: 'skewY(-6deg) translateY(25%)' }}
        ></div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-30"
            >
              <button 
                onClick={toggleMenu} 
                className="absolute top-6 right-6 text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <div className="text-center">
                {menuItems.map((item) => (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className={`block py-4 text-white text-2xl ${item.isButton ? 'text-black mt-4 bg-white  px-6 py-2 rounded-full' : ''}`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex h-screen overflow-hidden relative">
        {/* Left side */}
        <div className="w-1/2 bg-gray-100 p-12 flex flex-col justify-between z-10">
          <div></div>
          <div>
            <p className="text-xl text-black mb-4">Hi, I am</p>
            <h1 className="text-5xl font-bold mb-2 text-black">HassanRJ</h1>
            <p className="text-xl text-gray-600">Front-end Developer / UI Designer</p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://discord.gg/xCu3xt3emv" target='_blank' className="p-2 bg-black rounded-full shadow-md">
                <FaDiscord className="w-5 h-5 text-white" />
              </Link>
              <Link href="https://github.com/Hassan3108huzaifa" target='_blank' className="p-2 bg-black rounded-full shadow-md">
                <Github className="w-5 h-5 text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/hassan-rj-148220295/" target='_blank' className="p-2 bg-black rounded-full shadow-md">
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
          <div></div>
        </div>

        {/* Right side */}
        <div className="w-[100vw] bg-black p-12 flex flex-col justify-between relative">
          <nav className="flex justify-end space-x-8 text-white items-center mr-10 z-10">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className={`hover:text-gray-300 cursor-pointer ${item.isButton ? 'bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200' : ''}`}
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 overflow-hidden"
          >
            <Image
              src="/pic.jpg"
              alt="Hassan RJ"
              fill={true}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="brightness-50"
              priority
            />
          </motion.div>
        </div>

        {/* Improved diagonal overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-gray-100 z-0"
          style={{
            clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)',
            transform: 'translateX(-5%)'
          }}
        ></div>
      </div>
    </div>
  )
}
