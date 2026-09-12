'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiBook, FiTarget, FiBarChart3, FiUsers, FiCheckCircle, FiZap } from 'react-icons/fi'
import Link from 'next/link'

const ResourceCard = ({ icon: Icon, title, description, count, color }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    className="glass rounded-xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all"
  >
    <div className={`inline-block p-4 rounded-lg mb-6 ${color}`}>
      <Icon className="text-2xl" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <div className="text-cyan-400 font-medium text-sm mb-4">{count}</div>
    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors">
      Start Learning <FiZap size={16} />
    </button>
  </motion.div>
)

const SubjectCard = ({ subject, topics, hours }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="glass rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all"
  >
    <div className="flex items-start justify-between mb-4">
      <h4 className="font-bold text-lg">{subject}</h4>
      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">{hours}h</span>
    </div>
    <ul className="space-y-2">
      {topics.map((topic: string, idx: number) => (
        <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
          <FiCheckCircle size={14} className="text-cyan-400" />
          {topic}
        </li>
      ))}
    </ul>
  </motion.div>
)

export default function JEEPage() {
  const resources = [
    {
      icon: FiBook,
      title: 'Complete Study Material',
      description: 'Comprehensive notes covering all JEE Main and Advanced topics',
      count: '500+ Pages of Content',
      color: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: FiTarget,
      title: 'Previous Year Questions',
      description: 'Solutions to last 20 years of JEE Main and Advanced papers',
      count: '2000+ Questions with Solutions',
      color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    },
    {
      icon: FiBarChart3,
      title: 'Mock Tests',
      description: 'Full-length and chapter-wise mock tests with detailed analysis',
      count: '100+ Mock Tests',
      color: 'bg-gradient-to-br from-green-500/20 to-cyan-500/20',
    },
    {
      icon: FiUsers,
      title: 'Doubt Support',
      description: 'Connect with JEE mentors for instant doubt solving',
      count: '24/7 Expert Support',
      color: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: FiCheckCircle,
      title: 'Formula Sheet',
      description: 'Complete formula sheets for Physics, Chemistry, and Mathematics',
      count: 'Downloadable PDFs',
      color: 'bg-gradient-to-br from-pink-500/20 to-purple-500/20',
    },
    {
      icon: FiZap,
      title: 'Video Lectures',
      description: 'In-depth video explanations by experienced JEE educators',
      count: '500+ Video Hours',
      color: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
    },
  ]

  const subjects = [
    {
      subject: 'Physics',
      topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics'],
      hours: '120',
    },
    {
      subject: 'Chemistry',
      topics: ['Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry'],
      hours: '100',
    },
    {
      subject: 'Mathematics',
      topics: ['Algebra', 'Trigonometry', 'Calculus', 'Coordinate Geometry', 'Statistics'],
      hours: '110',
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-block mb-6">
                <div className="glass px-4 py-2 rounded-full text-sm">
                  ⚡ Ace Your JEE Exam
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Complete JEE <span className="gradient-text">Preparation</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                Master all three subjects with our comprehensive study materials, thousands of practice questions, and expert guidance
              </p>
              <Link href="#resources">
                <button className="btn-primary">Explore JEE Resources</button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Subject Coverage */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Subject Coverage</h2>
              <p className="text-gray-400">In-depth resources for all three JEE subjects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subjects.map((subject, idx) => (
                <SubjectCard key={idx} {...subject} />
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Comprehensive Resources</h2>
              <p className="text-gray-400">Everything you need for JEE success</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, idx) => (
                <ResourceCard key={idx} {...resource} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="glass rounded-2xl p-12 border border-cyan-400/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">5000+</div>
                  <div className="text-gray-400">Total Questions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">330h</div>
                  <div className="text-gray-400">Study Content</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-gray-400">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
