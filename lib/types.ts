// Type definitions for PrepVerse

export interface Student {
  id: string
  name: string
  email: string
  avatar?: string
  exam: 'JEE' | 'NEET' | 'Both'
  joinedDate: Date
  totalHoursStudied: number
  currentStreak: number
  targetExamDate?: Date
}

export interface StudyMaterial {
  id: string
  title: string
  description: string
  category: 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology'
  exam: 'JEE' | 'NEET'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  content: string
  resources?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Quiz {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  totalQuestions: number
  timeLimit: number // in minutes
  passingScore: number
  questions: Question[]
  createdAt: Date
}

export interface Question {
  id: string
  text: string
  options: Option[]
  correctAnswer: string
  explanation: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

export interface Option {
  id: string
  text: string
  isCorrect: boolean
}

export interface PYQ {
  id: string
  exam: 'JEE Main' | 'JEE Advanced' | 'NEET' | 'BITSAT' | 'VITEEE'
  year: number
  paper?: number
  totalQuestions: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  pdfUrl: string
  solutionUrl: string
  createdAt: Date
}

export interface StudySession {
  id: string
  studentId: string
  subject: string
  topic: string
  startTime: Date
  endTime: Date
  duration: number // in minutes
  focusScore: number // 0-100
  notesCreated: boolean
  quizzesTaken: Quiz[]
}

export interface Progress {
  id: string
  studentId: string
  subject: string
  topicsCompleted: number
  totalTopics: number
  averageScore: number
  lastUpdated: Date
}

export interface Discussion {
  id: string
  authorId: string
  authorName: string
  title: string
  content: string
  category: string
  replies: Reply[]
  upvotes: number
  solved: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Reply {
  id: string
  authorId: string
  authorName: string
  content: string
  upvotes: number
  isCorrect: boolean
  createdAt: Date
}

export interface CommunityEvent {
  id: string
  title: string
  description: string
  startTime: Date
  endTime: Date
  eventType: 'Live Session' | 'Q&A' | 'Mock Test' | 'Study Group'
  capacity: number
  attendees: number
  link?: string
}

export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  read: boolean
  createdAt: Date
}
