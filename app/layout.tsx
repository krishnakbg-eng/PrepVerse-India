import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PrepVerse India - Master Your Exams',
  description: 'Modern platform for JEE, NEET preparation with study tools, PYQs, MCQs, and community support',
  keywords: 'JEE, NEET, exam preparation, study tools, competitive exams, India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-950 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
