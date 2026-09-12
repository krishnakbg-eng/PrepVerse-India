import { create } from 'zustand'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  streak?: number
  totalHours?: number
}

interface StudyState {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User) => void
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

export const useAuthStore = create<StudyState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user: User) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  updateUser: (updatedUser: Partial<User>) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updatedUser } : null,
    })),
}))

interface ProgressState {
  topics: Record<string, number>
  accuracy: number
  hoursStudied: number
  updateProgress: (topic: string, percentage: number) => void
  setAccuracy: (accuracy: number) => void
  addHours: (hours: number) => void
}

export const useProgressStore = create<ProgressState>((set) => ({
  topics: {},
  accuracy: 0,
  hoursStudied: 0,
  updateProgress: (topic: string, percentage: number) =>
    set((state) => ({
      topics: { ...state.topics, [topic]: percentage },
    })),
  setAccuracy: (accuracy: number) => set({ accuracy }),
  addHours: (hours: number) =>
    set((state) => ({
      hoursStudied: state.hoursStudied + hours,
    })),
}))

interface NotificationState {
  notifications: Array<{
    id: string
    message: string
    type: 'success' | 'error' | 'info' | 'warning'
  }>
  addNotification: (message: string, type: string) => void
  removeNotification: (id: string) => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (message: string, type: string) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          id: Date.now().toString(),
          message,
          type: type as any,
        },
      ],
    })),
  removeNotification: (id: string) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}))
