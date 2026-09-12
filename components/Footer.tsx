'use client'

import Link from 'next/link'
import { FiDiscord, FiGithub, FiTwitter, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 glass mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center font-bold">
                ⚡
              </div>
              <span className="font-bold text-lg gradient-text">PrepVerse</span>
            </div>
            <p className="text-gray-400 text-sm">Master your exams with our comprehensive platform</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/tools" className="hover:text-cyan-400 transition">Study Tools</Link></li>
              <li><Link href="/jee" className="hover:text-cyan-400 transition">JEE Resources</Link></li>
              <li><Link href="/neet" className="hover:text-cyan-400 transition">NEET Resources</Link></li>
              <li><Link href="/tracker" className="hover:text-cyan-400 transition">Study Tracker</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/pyqs" className="hover:text-cyan-400 transition">PYQs</Link></li>
              <li><Link href="/mcqs" className="hover:text-cyan-400 transition">MCQ Practice</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Study Notes</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Video Tutorials</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#discord" className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Discord">
                <FiDiscord className="text-xl" />
              </a>
              <a href="#github" className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="GitHub">
                <FiGithub className="text-xl" />
              </a>
              <a href="#twitter" className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Twitter">
                <FiTwitter className="text-xl" />
              </a>
              <a href="#email" className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Email">
                <FiMail className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} PrepVerse India. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-cyan-400 transition">Privacy Policy</a>
              <a href="#terms" className="hover:text-cyan-400 transition">Terms of Service</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
