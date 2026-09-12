import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.prepverse.in'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token')
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)

export const api = {
  // Auth endpoints
  auth: {
    login: (email: string, password: string) =>
      apiClient.post('/auth/login', { email, password }),
    signup: (name: string, email: string, password: string) =>
      apiClient.post('/auth/signup', { name, email, password }),
    logout: () => apiClient.post('/auth/logout'),
    getProfile: () => apiClient.get('/auth/profile'),
  },

  // Study materials
  materials: {
    getJEEResources: () => apiClient.get('/materials/jee'),
    getNEETResources: () => apiClient.get('/materials/neet'),
    getTopics: (exam: string) => apiClient.get(`/materials/topics/${exam}`),
  },

  // PYQs
  pyqs: {
    getPYQs: (exam?: string, year?: number) =>
      apiClient.get('/pyqs', { params: { exam, year } }),
    downloadPYQ: (id: string) => apiClient.get(`/pyqs/${id}/download`),
    submitSolution: (id: string, solution: any) =>
      apiClient.post(`/pyqs/${id}/submit`, solution),
  },

  // MCQs
  mcqs: {
    getQuizzes: (category?: string, difficulty?: string) =>
      apiClient.get('/mcqs', { params: { category, difficulty } }),
    getQuiz: (id: string) => apiClient.get(`/mcqs/${id}`),
    submitQuiz: (id: string, answers: any) =>
      apiClient.post(`/mcqs/${id}/submit`, answers),
  },

  // Progress tracking
  progress: {
    getProgress: () => apiClient.get('/progress'),
    updateProgress: (data: any) => apiClient.post('/progress', data),
    getStats: () => apiClient.get('/progress/stats'),
  },

  // Community
  community: {
    getDiscussions: (page?: number) =>
      apiClient.get('/community/discussions', { params: { page } }),
    createDiscussion: (title: string, content: string, category: string) =>
      apiClient.post('/community/discussions', { title, content, category }),
    replyToDiscussion: (id: string, content: string) =>
      apiClient.post(`/community/discussions/${id}/reply`, { content }),
    upvoteDiscussion: (id: string) =>
      apiClient.post(`/community/discussions/${id}/upvote`),
  },
}

export default apiClient
