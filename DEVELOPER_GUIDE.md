# 🚀 PrepVerse India - Complete Developer Guide

## Table of Contents
1. [Quick Start](#quick-start)
2. [Project Architecture](#project-architecture)
3. [Component Structure](#component-structure)
4. [API Integration](#api-integration)
5. [State Management](#state-management)
6. [Styling Guide](#styling-guide)
7. [Features Breakdown](#features-breakdown)
8. [Discord Integration](#discord-integration)
9. [Analytics Setup](#analytics-setup)
10. [Deployment Guide](#deployment-guide)
11. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Prerequisites
```bash
- Node.js 16+
- npm or yarn
- Git
```

### Installation Steps
```bash
# 1. Clone repository
git clone https://github.com/krishnakbg-eng/PrepVerse-India.git
cd PrepVerse-India

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local

# 4. Configure environment variables
# Edit .env.local with your API keys and credentials

# 5. Run development server
npm run dev

# 6. Open browser
# Visit http://localhost:3000
```

---

## Project Architecture

### Directory Structure
```
PrepVerse-India/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout wrapper
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── tools/                   # Study tools page
│   │   └── page.tsx
│   ├── jee/                     # JEE resources
│   │   └── page.tsx
│   ├── neet/                    # NEET resources
│   │   └── page.tsx
│   ├── pyqs/                    # Previous Year Questions
│   │   └── page.tsx
│   ├── mcqs/                    # MCQ Practice
│   │   └── page.tsx
│   ├── tracker/                 # Study Tracker
│   │   └── page.tsx
│   └── community/               # Community
│       └── page.tsx
├── components/                   # Reusable Components
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer
│   ├── Toast.tsx                # Notifications
│   ├── LoadingSpinner.tsx        # Loading state
│   ├── Modal.tsx                # Modal dialog
│   └── Card.tsx                 # Card component
├── lib/                          # Utilities & Helpers
│   ├── api.ts                   # API configuration
│   ├── store.ts                 # Zustand stores
│   ├── hooks.ts                 # Custom React hooks
│   ├── utils.ts                 # Utility functions
│   ├── discord.ts               # Discord integration
│   ├── analytics.ts             # Analytics setup
│   ├── seo.ts                   # SEO utilities
│   └── types.ts                 # TypeScript types
├── public/                       # Static assets
├── tailwind.config.js           # TailwindCSS configuration
├── tsconfig.json                # TypeScript config
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies
├── .env.example                 # Environment template
└── README.md                    # Documentation
```

---

## Component Structure

### Navbar Component
```typescript
// components/Navbar.tsx
// Features:
// - Responsive navigation
// - Mobile menu toggle
// - Authentication button
// - Social links (Discord, GitHub)
// - Smooth animations
```

### Footer Component
```typescript
// components/Footer.tsx
// Features:
// - Multiple columns layout
// - Quick links
// - Social media links
// - Copyright information
// - Responsive grid
```

### Utility Components
```typescript
// Toast - Notifications
import Toast from '@/components/Toast'
<Toast message="Success!" type="success" />

// LoadingSpinner - Loading states
import LoadingSpinner from '@/components/LoadingSpinner'
<LoadingSpinner size="md" fullScreen />

// Modal - Dialog boxes
import Modal from '@/components/Modal'
<Modal isOpen={open} onClose={handleClose} title="Confirm">...</Modal>

// Card - Content containers
import Card from '@/components/Card'
<Card hover onClick={handleClick}>...</Card>
```

---

## API Integration

### API Client Setup
```typescript
// lib/api.ts
import { api } from '@/lib/api'

// Authentication
await api.auth.login(email, password)
await api.auth.signup(name, email, password)
await api.auth.getProfile()

// Study Materials
await api.materials.getJEEResources()
await api.materials.getNEETResources()
await api.materials.getTopics('jee')

// PYQs
await api.pyqs.getPYQs('jee', 2024)
await api.pyqs.downloadPYQ(id)
await api.pyqs.submitSolution(id, solution)

// MCQs
await api.mcqs.getQuizzes('physics', 'intermediate')
await api.mcqs.getQuiz(id)
await api.mcqs.submitQuiz(id, answers)

// Progress
await api.progress.getProgress()
await api.progress.updateProgress(data)
await api.progress.getStats()

// Community
await api.community.getDiscussions(1)
await api.community.createDiscussion(title, content, category)
await api.community.replyToDiscussion(id, content)
```

### Environment Variables
```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.prepverse.in

# Authentication
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Discord Integration
NEXT_PUBLIC_DISCORD_SERVER_ID=your_server_id
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/yourlink
DISCORD_BOT_TOKEN=your_bot_token
NEXT_PUBLIC_DISCORD_CLIENT_ID=your_client_id

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id
```

---

## State Management

### Zustand Stores
```typescript
// lib/store.ts

// Authentication Store
import { useAuthStore } from '@/lib/store'
const { user, isAuthenticated, setUser, logout } = useAuthStore()

// Progress Store
import { useProgressStore } from '@/lib/store'
const { topics, accuracy, hoursStudied, updateProgress } = useProgressStore()

// Notification Store
import { useNotificationStore } from '@/lib/store'
const { notifications, addNotification } = useNotificationStore()
```

### Usage Example
```typescript
'use client'
import { useAuthStore } from '@/lib/store'

export default function Component() {
  const { user, setUser, logout } = useAuthStore()

  const handleLogin = (userData) => {
    setUser(userData)
  }

  return (
    <div>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => handleLogin(...)}>Login</button>
      )}
    </div>
  )
}
```

---

## Styling Guide

### Color Palette
```css
/* Primary Colors */
--primary: #00D9FF    /* Cyan - Main accent */
--secondary: #7C3AED  /* Purple - Secondary */
--accent: #EC4899     /* Pink - Highlight */

/* Background */
--dark-950: #030712
--dark-900: #111827
--dark-800: #1f2937

/* Glass Effect */
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Utility Classes
```html
<!-- Glass Morphism -->
<div class="glass">...</div>
<div class="glass-sm">...</div>

<!-- Buttons -->
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>

<!-- Gradient Text -->
<h1 class="gradient-text">Heading</h1>
<p class="gradient-text-pink">Pink Text</p>

<!-- Animations -->
<div class="fade-in">Fade In</div>
<div class="slide-in-left">Slide Left</div>
<div class="pulse-glow">Glow Effect</div>
```

### Custom Components with Tailwind
```typescript
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>

// Flex layout
<div className="flex flex-col md:flex-row gap-4">
  {/* Content */}
</div>

// Dark mode aware
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  {/* Content */}
</div>
```

---

## Features Breakdown

### 1. Homepage (`/`)
**Purpose**: Landing page and introduction

**Key Features**:
- Interactive hero section with canvas particles
- Feature showcase cards
- Statistics dashboard
- Call-to-action sections
- Smooth scroll animations

**Components Used**:
- Framer Motion for animations
- Motion components for staggered reveals
- Canvas for particle background

**Data Flow**:
```
Homepage
├── Hero Section (Animated)
├── Stats Section (Motion Cards)
├── Features Grid (Staggered Animation)
└── CTA Section (Interactive)
```

### 2. Study Tools (`/tools`)
**Purpose**: Access all study utilities

**Tools Available**:
- Notes & Concepts
- Practice Tests
- Performance Analytics
- Study Schedule
- Doubt Solver
- Quick Revision

**State Management**:
```typescript
const [selectedTool, setSelectedTool] = useState('')
const [toolData, setToolData] = useState(null)

useEffect(() => {
  if (selectedTool) {
    api.materials.getTopics(selectedTool)
      .then(data => setToolData(data))
  }
}, [selectedTool])
```

### 3. JEE Resources (`/jee`)
**Purpose**: Complete JEE preparation materials

**Subject Coverage**:
- Physics (120 hours)
- Chemistry (100 hours)
- Mathematics (110 hours)

**Content Types**:
- Study notes
- Video lectures
- Practice questions
- Mock tests
- Formula sheets

### 4. NEET Resources (`/neet`)
**Purpose**: Medical exam preparation

**Subject Distribution**:
- Biology (50%)
- Chemistry (25%)
- Physics (25%)

**Special Features**:
- NCERT-based materials
- Memory aids
- Topic-wise breakdown
- Expert mentorship

### 5. Previous Year Questions (`/pyqs`)
**Purpose**: Practice with real exam questions

**Features**:
- Filterable by exam and year
- Detailed solutions
- Performance tracking
- Download functionality
- 2000+ questions

**Filter Logic**:
```typescript
const filteredPYQs = pyqs.filter(pyq => {
  if (selectedExam !== 'all' && pyq.exam !== selectedExam) return false
  if (selectedYear !== 'all' && pyq.year !== parseInt(selectedYear)) return false
  return true
})
```

### 6. MCQ Practice (`/mcqs`)
**Purpose**: Quiz and practice system

**Features**:
- 1000+ questions
- Multiple difficulty levels
- Instant feedback
- Performance analytics
- Timed challenges

**Score Calculation**:
```typescript
const accuracy = (correctAnswers / totalQuestions) * 100
const performance = accuracy >= 90 ? 'Excellent' :
                   accuracy >= 75 ? 'Good' :
                   accuracy >= 60 ? 'Average' :
                   'Need Improvement'
```

### 7. Study Tracker (`/tracker`)
**Purpose**: Monitor progress and performance

**Key Metrics**:
- Total hours studied
- Topics completed
- Current accuracy
- Overall progress
- Weekly activity
- Subject-wise breakdown

**Visualization**:
```typescript
// Weekly chart
const weeklyData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => ({
  day,
  hours: hoursPerDay[idx]
}))

// Progress bar
<div className="bg-white/10 rounded-full h-2">
  <div style={{ width: `${percentage}%` }} className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2" />
</div>
```

### 8. Community (`/community`)
**Purpose**: Student interaction and support

**Platforms**:
- Discord Server (8500+ members)
- In-Platform Forum (5000+ discussions)
- GitHub Community (2500+ members)

**Discussion Features**:
- Topic-based threads
- Upvoting system
- Expert responses
- Solved marking
- Category filtering

**Community Stats**:
```typescript
const stats = {
  totalMembers: 10000,
  activeUsers: 2500,
  discussions: 5000,
  messagesDaily: 20000,
  solvedRate: 98
}
```

---

## Discord Integration

### Setup Discord Bot

**1. Create Discord Application**
- Go to [Discord Developer Portal](https://discord.com/developers/applications)
- Click "New Application"
- Set name to "PrepVerse India"
- Go to OAuth2 → URL Generator
- Select scopes: `bot`
- Select permissions: `Send Messages`, `Embed Links`, `Manage Roles`

**2. Configure Environment**
```env
NEXT_PUBLIC_DISCORD_SERVER_ID=your_server_id
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/your_link
DISCORD_BOT_TOKEN=your_bot_token
NEXT_PUBLIC_DISCORD_CLIENT_ID=your_client_id
```

**3. Send Discord Messages**
```typescript
import { sendDiscordWebhook, createDiscordEmbed } from '@/lib/discord'

const embed = createDiscordEmbed({
  title: 'New Discussion',
  description: 'Student asked a question',
  color: 'PRIMARY',
  fields: [
    { name: 'Category', value: 'Physics', inline: true },
    { name: 'Difficulty', value: 'Hard', inline: true }
  ]
})

await sendDiscordWebhook(webhookUrl, { embeds: [embed] })
```

**4. Community Channels**
```
#general - General discussion
#jee-discussion - JEE specific
#neet-discussion - NEET specific
#physics, #chemistry, #mathematics, #biology - Subject channels
#doubt-solving - Ask doubts
#announcements - Important updates
#resources - Shared materials
#study-groups - Group formation
#wins-and-achievements - Success stories
```

---

## Analytics Setup

### Google Analytics Integration

**1. Setup GA4**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**2. Track Events**
```typescript
import { ANALYTICS_EVENTS } from '@/lib/analytics'

// Page view
ANALYTICS_EVENTS.PAGE_VIEW('/jee')

// User actions
ANALYTICS_EVENTS.USER_LOGIN()
ANALYTICS_EVENTS.START_QUIZ('Physics Mechanics')
ANALYTICS_EVENTS.COMPLETE_QUIZ('Physics Mechanics', 85)

// Community
ANALYTICS_EVENTS.CREATE_DISCUSSION('mechanics')
ANALYTICS_EVENTS.JOIN_COMMUNITY()
```

**3. Custom Events**
```typescript
import { trackEvent } from '@/lib/analytics'

trackEvent({
  action: 'custom_event',
  category: 'engagement',
  label: 'feature_name',
  value: 100
})
```

---

## Deployment Guide

### Deploy to Vercel

**1. Push to GitHub**
```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

**2. Connect to Vercel**
- Visit [Vercel](https://vercel.com)
- Click "New Project"
- Select your GitHub repository
- Configure environment variables
- Click "Deploy"

**3. Configure Environment on Vercel**
Go to Project Settings → Environment Variables and add:
```
NEXT_PUBLIC_API_URL
NEXT_PUBLIC_DISCORD_INVITE
NEXTAUTH_SECRET
NEXTAUTH_URL
DISCORD_BOT_TOKEN
NEXT_PUBLIC_GA_ID
```

### Deploy to Other Platforms

**Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

**Railway**
- Connect GitHub repo
- Set environment variables
- Deploy

**Netlify**
- Connect GitHub repo
- Set build command: `npm run build`
- Set publish directory: `.next`
- Add environment variables

---

## Troubleshooting

### Common Issues

**Issue: Port 3000 already in use**
```bash
# Linux/Mac
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Run on different port
NEXT_PUBLIC_PORT=3001 npm run dev
```

**Issue: Module not found**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Tailwind styles not loading**
```bash
# Rebuild tailwind
npm run build

# Clear Next.js cache
rm -rf .next
npm run dev
```

**Issue: API connection failed**
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Verify backend server is running
- Check network tab in browser DevTools
- Test with curl: `curl https://api.prepverse.in/health`

**Issue: Discord bot not responding**
- Verify bot token in `.env.local`
- Check bot permissions in Discord server
- Ensure webhook URL is correct
- Check Discord server rate limits

---

## Performance Tips

1. **Code Splitting**
   - Use dynamic imports for heavy components
   - Lazy load images
   - Split routes by feature

2. **Optimization**
   - Compress images
   - Minify CSS/JS
   - Use CDN for static files
   - Enable gzip compression

3. **Caching**
   - Cache API responses
   - Use browser cache headers
   - Implement service workers
   - Cache static assets

4. **Database**
   - Index frequently queried fields
   - Use pagination
   - Cache common queries
   - Optimize N+1 queries

---

## Next Steps

1. **Backend Development**
   - Set up Node.js/Express API
   - Configure MongoDB/PostgreSQL
   - Implement authentication
   - Create API endpoints

2. **Advanced Features**
   - AI-powered recommendations
   - Real-time collaboration
   - Video streaming
   - Mobile app

3. **Community Features**
   - Live chat rooms
   - Study groups
   - Peer mentoring
   - Leaderboards

4. **Monetization**
   - Premium subscriptions
   - Course bundles
   - Personalized coaching
   - Merchandise

---

**Last Updated**: September 12, 2024
**Version**: 1.0.0
**License**: MIT

For questions or support, visit [GitHub Issues](https://github.com/krishnakbg-eng/PrepVerse-India/issues)
