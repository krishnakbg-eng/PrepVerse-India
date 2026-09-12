'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

const Card = ({ children, className = '', hover = true, onClick }: CardProps) => {
  const hoverClass = hover ? 'hover:scale-105 hover:border-cyan-400/50' : ''

  return (
    <motion.div
      whileHover={hover ? { scale: 1.05 } : {}}
      className={`glass rounded-lg p-6 border border-white/10 transition-all ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default Card
