'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
  onClose?: () => void
}

const Toast = ({ message, type = 'info', duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  const bgColors = {
    success: 'bg-green-500/20 border-green-400',
    error: 'bg-red-500/20 border-red-400',
    info: 'bg-cyan-500/20 border-cyan-400',
    warning: 'bg-yellow-500/20 border-yellow-400',
  }

  const textColors = {
    success: 'text-green-400',
    error: 'text-red-400',
    info: 'text-cyan-400',
    warning: 'text-yellow-400',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`${bgColors[type]} border ${textColors[type]} px-6 py-3 rounded-lg shadow-lg`}
    >
      {message}
    </motion.div>
  )
}

export default Toast
