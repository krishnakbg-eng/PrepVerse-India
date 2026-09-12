// Analytics Configuration
// Setup for Google Analytics and custom event tracking

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Event tracking utility
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}

// Custom events for PrepVerse
export const ANALYTICS_EVENTS = {
  // Page views
  PAGE_VIEW: (page: string) => trackEvent({
    action: 'page_view',
    category: 'navigation',
    label: page,
  }),

  // User actions
  USER_SIGNUP: () => trackEvent({
    action: 'user_signup',
    category: 'user',
  }),
  USER_LOGIN: () => trackEvent({
    action: 'user_login',
    category: 'user',
  }),
  USER_LOGOUT: () => trackEvent({
    action: 'user_logout',
    category: 'user',
  }),

  // Study actions
  START_QUIZ: (quizName: string) => trackEvent({
    action: 'start_quiz',
    category: 'study',
    label: quizName,
  }),
  COMPLETE_QUIZ: (quizName: string, score: number) => trackEvent({
    action: 'complete_quiz',
    category: 'study',
    label: quizName,
    value: score,
  }),
  VIEW_RESOURCE: (resourceType: string) => trackEvent({
    action: 'view_resource',
    category: 'resources',
    label: resourceType,
  }),

  // Community actions
  JOIN_COMMUNITY: () => trackEvent({
    action: 'join_community',
    category: 'community',
  }),
  CREATE_DISCUSSION: (topic: string) => trackEvent({
    action: 'create_discussion',
    category: 'community',
    label: topic,
  }),
  UPVOTE_DISCUSSION: () => trackEvent({
    action: 'upvote_discussion',
    category: 'community',
  }),

  // Feature usage
  USE_STUDY_TRACKER: () => trackEvent({
    action: 'use_study_tracker',
    category: 'features',
  }),
  DOWNLOAD_RESOURCE: (resourceName: string) => trackEvent({
    action: 'download_resource',
    category: 'resources',
    label: resourceName,
  }),
}
