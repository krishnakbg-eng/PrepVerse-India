# 🚀 PrepVerse India - Next Steps & Implementation Guide

## Overview
This guide outlines the actionable steps to transform PrepVerse India from a frontend showcase into a fully functional production platform.

---

## Phase 1: Backend Development (Weeks 1-4)

### Step 1.1: Choose Your Backend Stack

**Option A: Node.js + Express (Recommended)**
```bash
# Setup
mkdir prepverse-backend
cd prepverse-backend
npm init -y
npm install express cors dotenv mongoose bcryptjs jsonwebtoken axios
npm install -D typescript ts-node @types/express @types/node
```

**Option B: Python + FastAPI**
```bash
pip install fastapi uvicorn sqlalchemy pydantic python-dotenv
```

**Option C: Go + Gin**
```bash
go mod init prepverse-api
go get -u github.com/gin-gonic/gin
go get -u gorm.io/gorm
```

**Recommendation**: Use **Node.js + Express** for JavaScript consistency with frontend.

### Step 1.2: Database Setup

**Option A: MongoDB (Recommended for flexibility)**
```javascript
// mongodb-connection.js
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Connection error:', error)
  }
}

module.exports = connectDB
```

**Option B: PostgreSQL (Recommended for scalability)**
```javascript
// postgres-connection.js
const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

module.exports = pool
```

**Setup Instructions:**

**MongoDB:**
```bash
# Local development
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Production (Atlas)
# Visit https://www.mongodb.com/cloud/atlas
# Create cluster → Get connection string
# Add to .env: MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/prepverse
```

**PostgreSQL:**
```bash
# Local development
docker run -d -p 5432:5432 \
  -e POSTGRES_USER=prepverse \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=prepverse \
  postgres:latest

# Production
# Use AWS RDS, Railway, or Supabase
```

### Step 1.3: Project Structure Setup

```bash
backend/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   ├── env.ts
│   │   └── constants.ts
│   ├── models/
│   │   ├── User.ts
│   │   ├── StudyMaterial.ts
│   │   ├── Quiz.ts
│   │   ├── Discussion.ts
│   │   └── Progress.ts
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── materials.ts
│   │   ├── quizzes.ts
│   │   ├── progress.ts
│   │   └── community.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── materialsController.ts
│   │   ├── quizzesController.ts
│   │   ├── progressController.ts
│   │   └── communityController.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── validation.ts
│   │   └── errorHandler.ts
│   ├── utils/
│   │   ├── jwt.ts
│   │   ├── validators.ts
│   │   └── helpers.ts
│   └── app.ts
├── .env.example
├── tsconfig.json
└── package.json
```

### Step 1.4: Create Core API Endpoints

**Authentication Endpoints:**
```typescript
// POST /api/auth/signup
Request: { name, email, password, exam }
Response: { user, token }

// POST /api/auth/login
Request: { email, password }
Response: { user, token }

// GET /api/auth/profile
Headers: Authorization: Bearer <token>
Response: { user }

// POST /api/auth/logout
Response: { success: true }
```

**Study Materials Endpoints:**
```typescript
// GET /api/materials/jee
Query: { page, limit, subject }
Response: { materials: [], total, pages }

// GET /api/materials/neet
Query: { page, limit, subject }
Response: { materials: [], total, pages }

// GET /api/materials/:id
Response: { material }

// GET /api/materials/search
Query: { q, exam, subject }
Response: { results: [] }
```

**PYQs Endpoints:**
```typescript
// GET /api/pyqs
Query: { exam, year, page, limit }
Response: { pyqs: [], total }

// GET /api/pyqs/:id
Response: { pyq }

// POST /api/pyqs/:id/attempt
Request: { answers, timeSpent }
Response: { score, analysis }

// GET /api/pyqs/:id/download
Response: Binary PDF file
```

**Quiz Endpoints:**
```typescript
// GET /api/quizzes
Query: { category, difficulty, page }
Response: { quizzes: [] }

// GET /api/quizzes/:id
Response: { quiz }

// POST /api/quizzes/:id/submit
Request: { answers, timeSpent }
Response: { score, analysis, explanations }
```

**Progress Endpoints:**
```typescript
// GET /api/progress
Headers: Authorization: Bearer <token>
Response: { progress, stats }

// POST /api/progress/update
Request: { subject, topicId, percentage }
Response: { success, newProgress }

// GET /api/progress/stats
Response: { totalHours, accuracy, topicsCompleted }
```

**Community Endpoints:**
```typescript
// GET /api/community/discussions
Query: { category, page, sort }
Response: { discussions: [] }

// POST /api/community/discussions
Request: { title, content, category }
Response: { discussion }

// POST /api/community/discussions/:id/reply
Request: { content }
Response: { reply }

// POST /api/community/discussions/:id/upvote
Response: { upvotes }
```

### Step 1.5: Database Models (MongoDB with Mongoose)

```typescript
// models/User.ts
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  avatar: String,
  exam: { type: String, enum: ['JEE', 'NEET', 'Both'] },
  totalHoursStudied: { type: Number, default: 0 },
  currentStreak: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('User', userSchema)

// models/StudyMaterial.ts
const materialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: String, enum: ['Physics', 'Chemistry', 'Mathematics', 'Biology'] },
  exam: { type: String, enum: ['JEE', 'NEET'] },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] },
  content: String,
  resources: [String],
  pdfUrl: String,
  videoUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('StudyMaterial', materialSchema)

// models/Quiz.ts
const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: String,
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] },
  totalQuestions: Number,
  timeLimit: Number,
  passingScore: Number,
  questions: [{
    text: String,
    options: [{
      text: String,
      isCorrect: Boolean
    }],
    explanation: String
  }],
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Quiz', quizSchema)

// models/Discussion.ts
const discussionSchema = new mongoose.Schema({
  authorId: mongoose.Schema.Types.ObjectId,
  authorName: String,
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: String,
  upvotes: { type: Number, default: 0 },
  solved: { type: Boolean, default: false },
  replies: [{
    authorId: mongoose.Schema.Types.ObjectId,
    authorName: String,
    content: String,
    upvotes: { type: Number, default: 0 },
    isCorrect: Boolean,
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('Discussion', discussionSchema)

// models/Progress.ts
const progressSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  subject: String,
  topicsCompleted: { type: Number, default: 0 },
  totalTopics: Number,
  averageScore: { type: Number, default: 0 },
  completedQuizzes: [{
    quizId: mongoose.Schema.Types.ObjectId,
    score: Number,
    completedAt: Date
  }],
  studySessions: [{
    date: Date,
    duration: Number,
    subject: String
  }],
  lastUpdated: { type: Date, default: Date.now }
})

export default mongoose.model('Progress', progressSchema)
```

### Step 1.6: Authentication Setup

```typescript
// middleware/auth.ts
import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    req.userId = decoded.id
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

// controllers/authController.ts
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'

export const signup = async (req, res) => {
  try {
    const { name, email, password, exam } = req.body

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Check if user exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      exam
    })

    // Generate token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    )

    res.status(201).json({
      user: { id: user._id, name, email, exam },
      token
    })
  } catch (error) {
    res.status(500).json({ error: 'Signup failed' })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    )

    res.json({
      user: { id: user._id, name: user.name, email },
      token
    })
  } catch (error) {
    res.status(500).json({ error: 'Login failed' })
  }
}
```

### Step 1.7: Setup Express Server

```typescript
// app.ts
import express from 'express'
import cors from 'cors'
import connectDB from './config/database'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to database
connectDB()

// Routes
import authRoutes from './routes/auth'
import materialsRoutes from './routes/materials'
import quizzesRoutes from './routes/quizzes'
import progressRoutes from './routes/progress'
import communityRoutes from './routes/community'

app.use('/api/auth', authRoutes)
app.use('/api/materials', materialsRoutes)
app.use('/api/quizzes', quizzesRoutes)
app.use('/api/progress', progressRoutes)
app.use('/api/community', communityRoutes)

// Error handling
app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).json({ error: 'Internal server error' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
```

### Step 1.8: Environment Variables

```env
# Backend .env
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/prepverse
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/prepverse

# JWT
JWT_SECRET=your_super_secret_jwt_key_here

# Discord
DISCORD_BOT_TOKEN=your_bot_token
DISCORD_WEBHOOK_URL=your_webhook_url

# Email (for notifications)
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# File Storage (AWS S3 or similar)
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_BUCKET_NAME=prepverse-bucket
```

---

## Phase 2: Frontend-Backend Integration (Weeks 5-6)

### Step 2.1: Update API Configuration

```typescript
// lib/api.ts - Updated
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token from localStorage
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
```

### Step 2.2: Create Authentication Page

```typescript
// app/auth/login/page.tsx
'use client'

import { useState } from 'react'
import { api } from '@/lib/api'
import { useAuthStore } from '@/lib/store'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setUser } = useAuthStore()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.auth.login(email, password)
      const { user, token } = response.data
      
      localStorage.setItem('auth_token', token)
      setUser(user)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="glass p-8 rounded-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Login to PrepVerse</h1>
        
        {error && <div className="bg-red-500/20 text-red-400 p-3 rounded mb-4">{error}</div>}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 mb-4"
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 mb-6"
          required
        />
        
        <button type="submit" className="w-full btn-primary">
          Login
        </button>
      </form>
    </div>
  )
}
```

---

## Phase 3: Advanced Features (Weeks 7-8)

### Step 3.1: Implement File Upload

```typescript
// controllers/materialsController.ts
import AWS from 'aws-sdk'

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

export const uploadMaterial = async (req, res) => {
  try {
    const file = req.file
    if (!file) {
      return res.status(400).json({ error: 'No file provided' })
    }

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: `materials/${Date.now()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype
    }

    const result = await s3.upload(params).promise()
    
    res.json({
      url: result.Location,
      size: file.size
    })
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' })
  }
}
```

### Step 3.2: Add Real-Time Chat with Socket.io

```typescript
// In backend app.ts
import http from 'http'
import { Server as SocketServer } from 'socket.io'

const httpServer = http.createServer(app)
const io = new SocketServer(httpServer, {
  cors: { origin: process.env.FRONTEND_URL }
})

io.on('connection', (socket) => {
  console.log('User connected:', socket.id)

  socket.on('join_room', (discussionId) => {
    socket.join(`discussion_${discussionId}`)
  })

  socket.on('send_message', async (data) => {
    const { discussionId, message, userId } = data
    
    // Save to database
    const reply = await Discussion.findByIdAndUpdate(
      discussionId,
      { $push: { replies: { content: message, authorId: userId } } },
      { new: true }
    )

    // Broadcast to room
    io.to(`discussion_${discussionId}`).emit('receive_message', reply)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id)
  })
})

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

### Step 3.3: Email Notifications

```typescript
// utils/email.ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html
    })
  } catch (error) {
    console.error('Email error:', error)
  }
}

// Usage: Send welcome email
export const sendWelcomeEmail = async (email: string, name: string) => {
  const html = `
    <h1>Welcome to PrepVerse, ${name}!</h1>
    <p>Start your journey to ace your competitive exams.</p>
    <a href="${process.env.FRONTEND_URL}">Get Started</a>
  `
  await sendEmail(email, 'Welcome to PrepVerse', html)
}
```

---

## Phase 4: DevOps & Deployment (Weeks 9-10)

### Step 4.1: Docker Setup

```dockerfile
# Backend Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

```dockerfile
# Frontend Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/public public
COPY --from=builder /app/package*.json ./

EXPOSE 3000
CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGODB_URI=mongodb://mongo:27017/prepverse
      - JWT_SECRET=your_secret
    depends_on:
      - mongo
    networks:
      - prepverse

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:5000/api
    depends_on:
      - backend
    networks:
      - prepverse

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    networks:
      - prepverse

volumes:
  mongo_data:

networks:
  prepverse:
    driver: bridge
```

### Step 4.2: Deploy to Railway

```bash
# 1. Install Railway CLI
npm i -g @railway/cli

# 2. Login
railway login

# 3. Initialize project
railway init

# 4. Add services
railway service add

# 5. Configure environment variables
railway variables

# 6. Deploy
railway up
```

### Step 4.3: Deploy Frontend to Vercel

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel deploy --prod

# 4. Add environment variables in Vercel dashboard
# Settings → Environment Variables
# Add: NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api
```

---

## Phase 5: Testing & QA (Weeks 11-12)

### Step 5.1: Backend Testing

```typescript
// tests/auth.test.ts
import request from 'supertest'
import app from '../app'

describe('Authentication', () => {
  it('should signup a new user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        exam: 'JEE'
      })

    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('token')
  })

  it('should login with valid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      })

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('token')
  })
})
```

### Step 5.2: Frontend Testing

```typescript
// __tests__/pages/auth.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginPage from '@/app/auth/login/page'

describe('Login Page', () => {
  it('renders login form', () => {
    render(<LoginPage />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)
    
    await user.type(screen.getByPlaceholderText('Email'), 'test@example.com')
    await user.type(screen.getByPlaceholderText('Password'), 'password123')
    await user.click(screen.getByRole('button', { name: /login/i }))
  })
})
```

---

## Implementation Timeline

```
Week 1-4:  Backend Development
           ✓ Database setup
           ✓ API endpoints
           ✓ Authentication
           ✓ Models

Week 5-6:  Frontend Integration
           ✓ Connect API
           ✓ Auth pages
           ✓ Data fetching
           ✓ Error handling

Week 7-8:  Advanced Features
           ✓ File uploads
           ✓ Real-time chat
           ✓ Email notifications
           ✓ Analytics

Week 9-10: DevOps & Deployment
           ✓ Docker setup
           ✓ Database migrations
           ✓ CI/CD pipelines
           ✓ Production deployment

Week 11-12: Testing & Polish
            ✓ Unit tests
            ✓ Integration tests
            ✓ Performance optimization
            ✓ Security audit
            ✓ User feedback
```

---

## Helpful Resources

**Backend:**
- Express.js Docs: https://expressjs.com/
- Mongoose: https://mongoosejs.com/
- JWT Auth: https://jwt.io/
- REST API Best Practices: https://restfulapi.net/

**Frontend:**
- Next.js Docs: https://nextjs.org/docs
- React: https://react.dev/
- TailwindCSS: https://tailwindcss.com/
- Framer Motion: https://www.framer.com/motion/

**DevOps:**
- Docker: https://docs.docker.com/
- Railway: https://docs.railway.app/
- Vercel: https://vercel.com/docs
- GitHub Actions: https://docs.github.com/en/actions

**Testing:**
- Jest: https://jestjs.io/
- React Testing Library: https://testing-library.com/
- Supertest: https://github.com/visionmedia/supertest

---

## Common Issues & Solutions

**Issue: CORS Error**
```typescript
// Solution in backend
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))
```

**Issue: Token Expiration**
```typescript
// Solution: Refresh token logic
const refreshToken = jwt.sign(
  { id: user._id },
  process.env.REFRESH_TOKEN_SECRET!,
  { expiresIn: '30d' }
)
```

**Issue: Database Connection Timeout**
```bash
# Increase timeout
MONGODB_URI=mongodb://localhost:27017/prepverse?serverSelectionTimeoutMS=10000
```

---

**Start building! 🚀**
