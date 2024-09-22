'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const portfolioItems = [
    { id: 1, title: 'Dynamic Resume Builder', category: 'logos', image: '/resume.png?height=300&width=400', link: 'https://dynamic-resumebuilder.netlify.app/' },
    { id: 2, title: 'Old Portfolio', category: 'websites', image: '/tailwindcss-website.png?height=300&width=400', link: 'https://hassanrj-css.netlify.app/' },
    { id: 3, title: 'Cyber Todo App', category: 'logos', image: '/hassanrj-todo.png?height=300&width=400', link: 'https://hassanrj-todo.netlify.app/' },
    { id: 4, title: 'Voice Controlled Jarvis', category: 'websites', image: '/jarvis.png?height=300&width=400', link: 'https://hassanrj-jarvis.netlify.app/' },
    { id: 5, title: 'HTML Previewer', category: 'logos', image: '/html-previewer.png?height=300&width=400', link: 'https://htmlpreviewer-html.vercel.app/' },
    { id: 6, title: 'Word Press Portfolio Website', category: 'websites', image: '/wordpress.png?height=300&width=400', link: 'https://dev-hassanrj.pantheonsite.io/' },
    { id: 7, title: 'Artificial AI', category: 'logos', image: '/AI.png?height=300&width=400', link: 'https://ai-hassanrj.vercel.app/' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [filteredItems, setFilteredItems] = useState(portfolioItems)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
    const timer = setTimeout(() => {
      setFilteredItems(portfolioItems.filter(item => filter === 'all' || item.category === filter))
      setAnimate(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [filter])

  return (
    <div className="bg-gray-900 text-white pb-20">
      <div id='portfolio' className="relative h-80 mb-8">
        <Image src="/portfolio-header.png?height=400&width=1200" alt="Portfolio header" layout="fill" objectFit="cover" className="brightness-50" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 ${filter === 'all' ? 'text-purple-500 border-b-2 border-purple-500' : ''}`}
          >
            ALL
          </button>
          <button 
            onClick={() => setFilter('logos')}
            className={`px-4 py-2 ${filter === 'logos' ? 'text-purple-500 border-b-2 border-purple-500' : ''}`}
          >
            Coded
          </button>
          <button 
            onClick={() => setFilter('websites')}
            className={`px-4 py-2 ${filter === 'websites' ? 'text-purple-500 border-b-2 border-purple-500' : ''}`}
          >
            WEBSITES
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link key={item.id} href={item.link} passHref target="_blank" rel="noopener noreferrer">
              <div className={`relative group cursor-pointer overflow-hidden transition-opacity duration-300 ${animate ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover brightness-75 transition-all duration-300 group-hover:brightness-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-center px-4">{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}