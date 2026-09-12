'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiFilter, FiDownload, FiBook, FiTrendingUp, FiCheckCircle, FiClock } from 'react-icons/fi'
import { useState } from 'react'

const PYQCard = ({ year, exam, questions, difficulty, solved }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className="glass rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-bold">{exam}</h3>
        <p className="text-gray-400 text-sm">{year}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
        difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
        difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
        'bg-red-500/20 text-red-400'
      }`}>
        {difficulty}
      </span>
    </div>
    <div className="space-y-3 mb-4">
      <div className="flex items-center gap-2 text-gray-400">
        <FiBook size={16} />
        <span className="text-sm">{questions} Questions</span>
      </div>
      <div className="flex items-center gap-2 text-gray-400">
        <FiCheckCircle size={16} />
        <span className="text-sm">{solved}% Solved</span>
      </div>
    </div>
    <button className="w-full btn-secondary text-sm flex items-center justify-center gap-2">
      <FiDownload size={16} />
      Download
    </button>
  </motion.div>
)

export default function PYQsPage() {
  const [selectedExam, setSelectedExam] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')

  const pyqs = [
    { year: '2024', exam: 'JEE Main (Jan)', questions: 90, difficulty: 'Medium', solved: 45 },
    { year: '2024', exam: 'JEE Main (Apr)', questions: 90, difficulty: 'Hard', solved: 38 },
    { year: '2023', exam: 'JEE Advanced', questions: 54, difficulty: 'Hard', solved: 62 },
    { year: '2023', exam: 'JEE Main (Jan)', questions: 90, difficulty: 'Medium', solved: 55 },
    { year: '2023', exam: 'JEE Main (Apr)', questions: 90, difficulty: 'Easy', solved: 72 },
    { year: '2022', exam: 'JEE Advanced', questions: 54, difficulty: 'Hard', solved: 68 },
    { year: '2024', exam: 'NEET', questions: 180, difficulty: 'Medium', solved: 52 },
    { year: '2023', exam: 'NEET', questions: 180, difficulty: 'Medium', solved: 65 },
    { year: '2022', exam: 'NEET', questions: 180, difficulty: 'Easy', solved: 78 },
    { year: '2021', exam: 'NEET', questions: 180, difficulty: 'Medium', solved: 70 },
    { year: '2024', exam: 'BITSAT', questions: 150, difficulty: 'Medium', solved: 48 },
    { year: '2023', exam: 'VITEEE', questions: 125, difficulty: 'Easy', solved: 80 },
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Previous Year <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                Access complete solutions to PYQs from JEE, NEET, BITSAT, and other competitive exams
              </p>
              <div className="text-sm text-cyan-400">
                📊 {pyqs.length}+ Previous Year Papers | 🎯 2000+ Solved Questions
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="glass rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <FiFilter size={20} className="text-cyan-400" />
                <h3 className="font-bold">Filter Papers</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-3">Exam Type</label>
                  <select
                    value={selectedExam}
                    onChange={(e) => setSelectedExam(e.target.value)}
                    className="w-full glass rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10"
                  >
                    <option value="all">All Exams</option>
                    <option value="jee">JEE (Main + Advanced)</option>
                    <option value="neet">NEET</option>
                    <option value="bitsat">BITSAT</option>
                    <option value="other">Other Exams</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3">Year Range</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full glass rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10"
                  >
                    <option value="all">All Years</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="older">2021 & Older</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PYQ Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Available Papers</h2>
              <p className="text-gray-400">Complete solutions with detailed explanations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pyqs.map((pyq, idx) => (
                <PYQCard key={idx} {...pyq} />
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyan-950/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Use Our PYQs?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass rounded-lg p-6 text-center border border-white/10">
                <FiBook className="text-3xl text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Detailed Solutions</h3>
                <p className="text-gray-400 text-sm">Step-by-step explanations for every question</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass rounded-lg p-6 text-center border border-white/10">
                <FiTrendingUp className="text-3xl text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Performance Tracking</h3>
                <p className="text-gray-400 text-sm">Monitor improvement over multiple attempts</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass rounded-lg p-6 text-center border border-white/10">
                <FiClock className="text-3xl text-pink-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Time Management</h3>
                <p className="text-gray-400 text-sm">Practice with realistic exam time constraints</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass rounded-lg p-6 text-center border border-white/10">
                <FiCheckCircle className="text-3xl text-green-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Instant Feedback</h3>
                <p className="text-gray-400 text-sm">Get immediate results and analysis</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
