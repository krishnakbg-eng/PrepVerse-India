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
      Start Preparing <FiZap size={16} />
    </button>
  </motion.div>
)

const SubjectCard = ({ subject, topics, hours, percentage }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="glass rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all"
  >
    <div className="flex items-start justify-between mb-4">
      <h4 className="font-bold text-lg">{subject}</h4>
      <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs font-medium">{percentage}%</span>
    </div>
    <ul className="space-y-2 mb-4">
      {topics.map((topic: string, idx: number) => (
        <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
          <FiCheckCircle size={14} className="text-pink-400" />
          {topic}
        </li>
      ))}
    </ul>
    <div className="text-xs text-gray-400">{hours} hours of content</div>
  </motion.div>
)

export default function NEETPage() {
  const resources = [
    {
      icon: FiBook,
      title: 'Complete Study Material',
      description: 'Comprehensive NCERT-based notes for all NEET topics',
      count: '600+ Pages of Content',
      color: 'bg-gradient-to-br from-pink-500/20 to-red-500/20',
    },
    {
      icon: FiTarget,
      title: 'Previous Year Questions',
      description: 'Solutions to last 25 years of NEET papers with explanations',
      count: '3000+ Questions',
      color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    },
    {
      icon: FiBarChart3,
      title: 'Chapter-wise Tests',
      description: 'Practice with subject-wise and chapter-wise test series',
      count: '150+ Practice Tests',
      color: 'bg-gradient-to-br from-green-500/20 to-cyan-500/20',
    },
    {
      icon: FiUsers,
      title: 'Expert Mentorship',
      description: 'Guidance from NEET toppers and medical professionals',
      count: 'Personalized Guidance',
      color: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: FiCheckCircle,
      title: 'Memory Aids',
      description: 'Mnemonics and memory techniques for quick retention',
      count: '1000+ Memory Tricks',
      color: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: FiZap,
      title: 'Video Lectures',
      description: 'Engaging video content covering entire NEET syllabus',
      count: '600+ Video Hours',
      color: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
    },
  ]

  const subjects = [
    {
      subject: 'Biology',
      topics: ['Botany', 'Zoology', 'Ecology', 'Cell Biology', 'Human Physiology'],
      hours: '140',
      percentage: '50',
    },
    {
      subject: 'Chemistry',
      topics: ['Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry'],
      hours: '100',
      percentage: '25',
    },
    {
      subject: 'Physics',
      topics: ['Mechanics', 'Thermodynamics', 'Electricity', 'Optics', 'Modern Physics'],
      hours: '90',
      percentage: '25',
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
                  🏥 Your Medical Dream Starts Here
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Ace Your <span className="gradient-text-pink">NEET Exam</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                Complete NEET preparation with focus on Biology, comprehensive notes, extensive practice, and expert mentorship
              </p>
              <Link href="#resources">
                <button className="btn-primary">Explore NEET Resources</button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Subject Coverage */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Subject Coverage</h2>
              <p className="text-gray-400">Complete NEET syllabus with weighted focus on Biology</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subjects.map((subject, idx) => (
                <SubjectCard key={idx} {...subject} />
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="py-20 px-4 bg-gradient-to-b from-transparent to-pink-950/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Comprehensive Resources</h2>
              <p className="text-gray-400">Everything needed for NEET success</p>
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
            <div className="glass rounded-2xl p-12 border border-pink-400/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold gradient-text-pink mb-2">6000+</div>
                  <div className="text-gray-400">Total Questions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text-pink mb-2">330h</div>
                  <div className="text-gray-400">Study Content</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text-pink mb-2">97%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text-pink mb-2">500+</div>
                  <div className="text-gray-400">Success Stories</div>
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
