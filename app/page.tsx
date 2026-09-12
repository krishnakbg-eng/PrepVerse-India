'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { FiArrowRight, FiBook, FiTarget, FiBarChart3, FiUsers, FiZap, FiCheckCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon: Icon, title, description, gradient }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-white/10 hover:border-cyan-400/50"
  >
    <div className={`inline-block p-3 rounded-lg mb-4 ${gradient}`}>
      <Icon className="text-xl" />
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
)

const StatCard = ({ number, label }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="text-center"
  >
    <div className="text-4xl font-bold gradient-text mb-2">{number}</div>
    <div className="text-gray-400">{label}</div>
  </motion.div>
)

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: any[] = []
    const particleCount = 50

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = canvas!.width
        if (this.x > canvas!.width) this.x = 0
        if (this.y < 0) this.y = canvas!.height
        if (this.y > canvas!.height) this.y = 0
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgba(0, 217, 255, 0.5)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx!.fillStyle = 'rgba(3, 7, 18, 0.1)'
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx!)
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p2.x - p1.x
          const dy = p2.y - p1.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx!.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - distance / 100)})`
            ctx!.beginPath()
            ctx!.moveTo(p1.x, p1.y)
            ctx!.lineTo(p2.x, p2.y)
            ctx!.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none opacity-30"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Welcome to PrepVerse India
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master Your <span className="gradient-text-pink">Competitive Exams</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              All-in-one platform for JEE and NEET preparation with AI-powered study tools, comprehensive resources, and a thriving community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/tools">
                <button className="btn-primary flex items-center gap-2 group">
                  Explore Tools
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="btn-secondary">
                Join Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="10k+" label="Active Students" />
            <StatCard number="50k+" label="PYQ Solutions" />
            <StatCard number="1000+" label="MCQ Questions" />
            <StatCard number="98%" label="Success Rate" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive <span className="gradient-text">Study Platform</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to prepare for competitive exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={FiBook}
              title="JEE Resources"
              description="Complete study materials, concepts, and practice problems for JEE Main and Advanced"
              gradient="bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
            />
            <FeatureCard
              icon={FiTarget}
              title="NEET Prep"
              description="Structured learning path with biology, chemistry, and physics resources"
              gradient="bg-gradient-to-br from-purple-500/20 to-pink-500/20"
            />
            <FeatureCard
              icon={FiZap}
              title="PYQ Solutions"
              description="Thousands of previous year questions with detailed solutions"
              gradient="bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
            />
            <FeatureCard
              icon={FiBarChart3}
              title="Study Tracker"
              description="Track your progress with advanced analytics and performance insights"
              gradient="bg-gradient-to-br from-green-500/20 to-cyan-500/20"
            />
            <FeatureCard
              icon={FiUsers}
              title="Community"
              description="Connect with 10k+ students and discuss doubts in real-time"
              gradient="bg-gradient-to-br from-pink-500/20 to-purple-500/20"
            />
            <FeatureCard
              icon={FiCheckCircle}
              title="MCQ Practice"
              description="Unlimited MCQ questions with instant feedback and performance analysis"
              gradient="bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-2xl p-12 border border-cyan-400/30">
            <h2 className="text-4xl font-bold mb-6">Ready to Excel?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of students who have improved their scores with PrepVerse
            </p>
            <button className="btn-primary flex items-center gap-2 mx-auto group">
              Get Started Now
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
