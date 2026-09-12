'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiBook, FiBarChart3, FiClock, FiCheckCircle, FiTarget, FiZap } from 'react-icons/fi'
import Link from 'next/link'

const ToolCard = ({ icon: Icon, title, description, link, color }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <Link href={link}>
      <div className="glass rounded-xl p-8 cursor-pointer border border-white/10 hover:border-cyan-400/50 h-full transition-all duration-300">
        <div className={`inline-block p-4 rounded-lg mb-6 ${color}`}>
          <Icon className="text-2xl" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <div className="text-cyan-400 font-medium flex items-center gap-2 hover:gap-3 transition-all">
          Explore <FiZap size={16} />
        </div>
      </div>
    </Link>
  </motion.div>
)

const ResourceItem = ({ title, count, color }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="glass rounded-lg p-6 flex items-start gap-4 border border-white/10"
  >
    <div className={`p-3 rounded-lg ${color} flex-shrink-0`}>
      <FiCheckCircle className="text-xl" />
    </div>
    <div className="flex-1">
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{count}</p>
    </div>
  </motion.div>
)

export default function ToolsPage() {
  const tools = [
    {
      icon: FiBook,
      title: 'Notes & Concepts',
      description: 'Well-organized study notes covering all topics for JEE and NEET',
      link: '/tools/notes',
      color: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: FiCheckCircle,
      title: 'Practice Tests',
      description: 'Full-length mock tests and chapter-wise quizzes',
      link: '/tools/tests',
      color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    },
    {
      icon: FiBarChart3,
      title: 'Performance Analytics',
      description: 'Detailed analysis of your strengths and weaknesses',
      link: '/tools/analytics',
      color: 'bg-gradient-to-br from-green-500/20 to-cyan-500/20',
    },
    {
      icon: FiClock,
      title: 'Study Schedule',
      description: 'AI-powered personalized study schedules',
      link: '/tools/schedule',
      color: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: FiTarget,
      title: 'Doubt Solver',
      description: 'Get instant solutions to your doubts from experts',
      link: '/tools/doubts',
      color: 'bg-gradient-to-br from-pink-500/20 to-purple-500/20',
    },
    {
      icon: FiZap,
      title: 'Quick Revision',
      description: 'Last-minute revision summaries and flashcards',
      link: '/tools/revision',
      color: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Powerful <span className="gradient-text">Study Tools</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive tools designed to boost your exam preparation and track progress
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, idx) => (
                <ToolCard key={idx} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyan-950/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose PrepVerse?</h2>
              <p className="text-gray-400 text-lg">Advanced features to enhance your learning</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResourceItem title="AI-Powered Learning" count="Personalized content recommendations" color="bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              <ResourceItem title="Real-time Analytics" count="Track every aspect of your progress" color="bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
              <ResourceItem title="Expert Support" count="24/7 doubt solving from experienced mentors" color="bg-gradient-to-br from-green-500/20 to-cyan-500/20" />
              <ResourceItem title="Community Learning" count="Learn from thousands of students" color="bg-gradient-to-br from-yellow-500/20 to-orange-500/20" />
              <ResourceItem title="Mobile Friendly" count="Study anytime, anywhere on any device" color="bg-gradient-to-br from-pink-500/20 to-purple-500/20" />
              <ResourceItem title="Offline Access" count="Download resources and study offline" color="bg-gradient-to-br from-orange-500/20 to-red-500/20" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
