'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiUsers, FiMessageSquare, FiThumbsUp, FiSend, FiGithub, FiDiscord, FiTrendingUp } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'

const DiscussionCard = ({ author, avatar, title, replies, upvotes, solved, timestamp }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="glass rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
  >
    <div className="flex items-start gap-4 mb-4">
      <img src={avatar} alt={author} className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="font-medium text-sm text-gray-400">{author}</p>
            <p className="text-xs text-gray-500">{timestamp}</p>
          </div>
          {solved && (
            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
              ✓ Solved
            </span>
          )}
        </div>
        <h3 className="font-bold mb-3 hover:text-cyan-400 transition">{title}</h3>
        <div className="flex gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
            <FiMessageSquare size={14} />
            {replies} replies
          </div>
          <div className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
            <FiThumbsUp size={14} />
            {upvotes} upvotes
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

const CommunityCard = ({ icon: Icon, title, members, description }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    className="glass rounded-xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all text-center"
  >
    <Icon className="text-4xl text-cyan-400 mx-auto mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4 text-sm">{description}</p>
    <div className="flex items-center justify-center gap-2 mb-6 text-sm">
      <FiUsers size={16} />
      <span className="text-cyan-400 font-bold">{members}+ members</span>
    </div>
    <button className="btn-primary w-full">
      Join Community
    </button>
  </motion.div>
)

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('all')

  const discussions = [
    { author: 'Arjun Singh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun', title: 'How to solve circular motion problems efficiently?', replies: 24, upvotes: 156, solved: true, timestamp: '2 hours ago' },
    { author: 'Priya Sharma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya', title: 'Best strategy for organic chemistry in NEET', replies: 18, upvotes: 89, solved: true, timestamp: '4 hours ago' },
    { author: 'Rahul Kumar', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul', title: 'Struggling with integration problems', replies: 32, upvotes: 124, solved: false, timestamp: '6 hours ago' },
    { author: 'Neha Patel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha', title: 'Tips for time management in JEE exam', replies: 45, upvotes: 267, solved: true, timestamp: '8 hours ago' },
    { author: 'Aditya Verma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya', title: 'How many hours should I study daily?', replies: 28, upvotes: 178, solved: true, timestamp: '10 hours ago' },
    { author: 'Anjali Desai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali', title: 'Inorganic chemistry nomenclature shortcuts', replies: 15, upvotes: 92, solved: false, timestamp: '12 hours ago' },
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
                Join Our <span className="gradient-text">Community</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                Connect with 10k+ students, discuss doubts, share resources, and grow together
              </p>
            </motion.div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Join Us On</h2>
              <p className="text-gray-400">Choose your preferred platform to connect</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CommunityCard
                icon={FiDiscord}
                title="Discord Server"
                members="8500"
                description="Real-time discussion, doubt solving, and study groups"
              />
              <CommunityCard
                icon={FiUsers}
                title="In-Platform Forum"
                members="10000"
                description="Organized discussions, topic-specific channels"
              />
              <CommunityCard
                icon={FiGithub}
                title="GitHub Discussions"
                members="2500"
                description="Code sharing, resource repositories, collaboration"
              />
            </div>
          </div>
        </section>

        {/* Recent Discussions */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FiMessageSquare className="text-cyan-400" size={24} />
                  <h2 className="text-3xl font-bold">Recent Discussions</h2>
                </div>
                <button className="btn-secondary flex items-center gap-2">
                  <FiSend size={16} />
                  Ask Question
                </button>
              </div>
              <p className="text-gray-400">Community doubts and discussions</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-4 mb-8 flex-wrap">
              {['all', 'physics', 'chemistry', 'mathematics', 'biology', 'unanswered'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeTab === tab
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Discussions List */}
            <div className="space-y-6">
              {discussions.map((discussion, idx) => (
                <DiscussionCard key={idx} {...discussion} />
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="glass rounded-2xl p-12 border border-cyan-400/30">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Community Growth</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                  <div className="text-4xl font-bold gradient-text mb-2">10k+</div>
                  <div className="text-gray-400">Active Members</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                  <div className="text-4xl font-bold gradient-text mb-2">5k+</div>
                  <div className="text-gray-400">Discussions</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                  <div className="text-4xl font-bold gradient-text mb-2">20k+</div>
                  <div className="text-gray-400">Messages Daily</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                  <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-gray-400">Solved Rate</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyan-950/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Community Guidelines</h2>
              <p className="text-gray-400">Keep our community positive and productive</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { emoji: '✅', title: 'Be Respectful', desc: 'Treat all members with kindness and respect' },
                { emoji: '📚', title: 'Share Knowledge', desc: 'Help others and share useful resources' },
                { emoji: '🎯', title: 'Stay On Topic', desc: 'Keep discussions relevant to exam prep' },
                { emoji: '⏰', title: 'Be Timely', desc: 'Respond to doubts promptly' },
                { emoji: '🚫', title: 'No Spam', desc: 'Avoid promotional content and spam' },
                { emoji: '🤝', title: 'Collaborate', desc: 'Form study groups and work together' },
              ].map((guideline, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="glass rounded-lg p-6 border border-white/10"
                >
                  <div className="text-3xl mb-3">{guideline.emoji}</div>
                  <h3 className="font-bold mb-2">{guideline.title}</h3>
                  <p className="text-gray-400 text-sm">{guideline.desc}</p>
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
