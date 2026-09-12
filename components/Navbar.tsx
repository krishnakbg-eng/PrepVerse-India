'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiGithub, FiDiscord } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'JEE', href: '/jee' },
    { label: 'NEET', href: '/neet' },
    { label: 'PYQs', href: '/pyqs' },
    { label: 'Study Tracker', href: '/tracker' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-lg">
              ⚡
            </div>
            <span className="text-xl font-bold gradient-text">PrepVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#discord"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Discord Community"
            >
              <FiDiscord className="text-xl" />
            </a>
            <a
              href="#github"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl" />
            </a>
            <button className="btn-primary text-sm">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/10 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button className="btn-primary w-full mt-4">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
