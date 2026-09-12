'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiCalendar, FiTarget, FiBook, FiActivity, FiBarChart3 } from 'react-icons/fi'
import { useState } from 'react'

const StatCard = ({ icon: Icon, label, value, trend, color }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className={`glass rounded-lg p-6 border border-white/10 ${color}`}
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <div className="text-3xl font-bold">{value}</div>
      </div>
      <Icon className="text-2xl opacity-50" />
    </div>
    {trend && <p className="text-green-400 text-sm">📈 {trend}</p>}
  </motion.div>
)

const ProgressCard = ({ subject, percentage, target, hoursSpent }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="glass rounded-lg p-6 border border-white/10"
  >
    <div className="flex justify-between items-center mb-3">
      <h4 className="font-bold">{subject}</h4>
      <span className="text-sm text-gray-400">{percentage}%</span>
    </div>
    <div className="w-full bg-white/10 rounded-full h-2 mb-3">
      <div
        className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
    <div className="text-xs text-gray-400">
      Target: {target}% | {hoursSpent} hours studied
    </div>
  </motion.div>
)

export default function TrackerPage() {
  const stats = [
    { icon: FiActivity, label: 'Total Hours Studied', value: '145h', trend: '+12h this week' },
    { icon: FiBook, label: 'Topics Completed', value: '38/52', trend: '+4 topics' },
    { icon: FiTarget, label: 'Current Accuracy', value: '76%', trend: '+3% improvement' },
    { icon: FiTrendingUp, label: 'Overall Progress', value: '73%', trend: 'On track!' },
  ]

  const subjectProgress = [
    { subject: 'Physics', percentage: 65, target: 80, hoursSpent: 45 },
    { subject: 'Chemistry', percentage: 72, target: 85, hoursSpent: 52 },
    { subject: 'Mathematics', percentage: 85, target: 90, hoursSpent: 48 },
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
                Study <span className="gradient-text">Tracker</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                Monitor your progress with detailed analytics, performance insights, and personalized recommendations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <StatCard key={idx} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* Subject-wise Progress */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <FiTrendingUp className="text-cyan-400" size={24} />
                <h2 className="text-3xl font-bold">Subject Progress</h2>
              </div>
              <p className="text-gray-400">Your performance across different subjects</p>
            </div>
            <div className="space-y-6">
              {subjectProgress.map((item, idx) => (
                <ProgressCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Activity */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <FiCalendar className="text-cyan-400" size={24} />
                <h2 className="text-3xl font-bold">This Week's Activity</h2>
              </div>
            </div>
            <div className="glass rounded-lg p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
                  const hours = [3, 4, 3.5, 5, 2, 4.5, 3][idx]
                  return (
                    <div key={day} className="text-center">
                      <div className="text-sm font-medium mb-3 text-gray-400">{day}</div>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${hours * 10}px` }}
                        className="bg-gradient-to-t from-cyan-400 to-purple-500 rounded-lg mx-auto mb-2 w-8"
                      />
                      <div className="text-sm font-medium">{hours}h</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyan-950/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Tracker Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: FiBarChart3, title: 'Performance Analytics', desc: 'Deep insights into your exam readiness' },
                { icon: FiTrendingUp, title: 'Progress Timeline', desc: 'Visualize your improvement over time' },
                { icon: FiTarget, title: 'Goal Tracking', desc: 'Set and achieve personalized study goals' },
                { icon: FiActivity, title: 'Study Habits', desc: 'Understand your study patterns' },
                { icon: FiBook, title: 'Topic Mastery', desc: 'Track completion of all topics' },
                { icon: FiCalendar, title: 'Time Management', desc: 'Optimize your study schedule' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="glass rounded-lg p-6 border border-white/10 text-center"
                >
                  <feature.icon className="text-3xl text-cyan-400 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
