'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiFilter, FiPlay, FiAward, FiActivity, FiBarChart3, FiClock } from 'react-icons/fi'
import { useState } from 'react'

const MCQCard = ({ title, questions, difficulty, category, avgScore, timeLimit }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className="glass rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all"
  >
    <div className="mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg flex-1">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${
          difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
          difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-red-500/20 text-red-400'
        }`}>
          {difficulty}
        </span>
      </div>
      <p className="text-gray-400 text-sm">{category}</p>
    </div>
    <div className="space-y-2 mb-4 text-sm text-gray-400">
      <div className="flex items-center gap-2">
        <FiActivity size={14} />
        {questions} Questions
      </div>
      <div className="flex items-center gap-2">
        <FiClock size={14} />
        {timeLimit} Minutes
      </div>
      <div className="flex items-center gap-2">
        <FiAward size={14} />
        Avg Score: {avgScore}%
      </div>
    </div>
    <button className="w-full btn-primary text-sm flex items-center justify-center gap-2">
      <FiPlay size={14} />
      Start Quiz
    </button>
  </motion.div>
)

export default function MCQsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const mcqs = [
    // Physics
    { title: 'Mechanics Fundamentals', questions: 50, difficulty: 'Beginner', category: 'Physics', avgScore: 72, timeLimit: 60 },
    { title: 'Thermodynamics', questions: 45, difficulty: 'Intermediate', category: 'Physics', avgScore: 65, timeLimit: 50 },
    { title: 'Electromagnetism', questions: 60, difficulty: 'Advanced', category: 'Physics', avgScore: 58, timeLimit: 70 },
    { title: 'Optics & Waves', questions: 40, difficulty: 'Intermediate', category: 'Physics', avgScore: 68, timeLimit: 45 },
    // Chemistry
    { title: 'Organic Chemistry Basics', questions: 55, difficulty: 'Beginner', category: 'Chemistry', avgScore: 75, timeLimit: 60 },
    { title: 'Inorganic Chemistry', questions: 50, difficulty: 'Intermediate', category: 'Chemistry', avgScore: 62, timeLimit: 55 },
    { title: 'Physical Chemistry', questions: 60, difficulty: 'Advanced', category: 'Chemistry', avgScore: 56, timeLimit: 65 },
    // Mathematics
    { title: 'Algebra Essentials', questions: 50, difficulty: 'Beginner', category: 'Mathematics', avgScore: 78, timeLimit: 55 },
    { title: 'Calculus Problems', questions: 65, difficulty: 'Advanced', category: 'Mathematics', avgScore: 54, timeLimit: 75 },
    { title: 'Coordinate Geometry', questions: 45, difficulty: 'Intermediate', category: 'Mathematics', avgScore: 66, timeLimit: 50 },
    // Biology (NEET)
    { title: 'Cell Biology', questions: 60, difficulty: 'Intermediate', category: 'Biology', avgScore: 70, timeLimit: 60 },
    { title: 'Human Physiology', questions: 70, difficulty: 'Intermediate', category: 'Biology', avgScore: 68, timeLimit: 65 },
  ]

  const categories = ['all', 'Physics', 'Chemistry', 'Mathematics', 'Biology']
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced']

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
                MCQ <span className="gradient-text">Practice</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                Unlimited multiple-choice questions for JEE and NEET with instant feedback and performance analysis
              </p>
              <div className="text-sm text-cyan-400">
                🎯 1000+ Questions | 📊 Real-time Analytics | ⚡ Instant Feedback
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
                <h3 className="font-bold">Filter Quizzes</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-3">Subject/Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full glass rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'All Subjects' : cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3">Difficulty Level</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full glass rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10"
                  >
                    {difficulties.map((diff) => (
                      <option key={diff} value={diff}>
                        {diff === 'all' ? 'All Levels' : diff}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MCQ Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Available Quizzes</h2>
              <p className="text-gray-400">Practice with thousands of carefully curated questions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mcqs.map((mcq, idx) => (
                <MCQCard key={idx} {...mcq} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyan-950/10">
          <div className="max-w-6xl mx-auto">
            <div className="glass rounded-2xl p-12 border border-cyan-400/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                  <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
                  <div className="text-gray-400">MCQ Questions</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-400">Quiz Sets</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                  <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-gray-400">Accuracy Rate</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                  <div className="text-4xl font-bold gradient-text mb-2">500k+</div>
                  <div className="text-gray-400">Attempts</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
