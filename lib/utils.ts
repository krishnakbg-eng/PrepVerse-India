export const formatDate = (date: Date | string): string => {
  const d = new Date(date)
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}h ${mins}m`
}

export const calculateAccuracy = (correct: number, total: number): number => {
  return Math.round((correct / total) * 100)
}

export const getGradeColor = (score: number): string => {
  if (score >= 90) return 'text-green-400'
  if (score >= 75) return 'text-cyan-400'
  if (score >= 60) return 'text-yellow-400'
  return 'text-red-400'
}

export const getGradeBg = (score: number): string => {
  if (score >= 90) return 'bg-green-500/20'
  if (score >= 75) return 'bg-cyan-500/20'
  if (score >= 60) return 'bg-yellow-500/20'
  return 'bg-red-500/20'
}

export const truncateText = (text: string, length: number): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text
}
