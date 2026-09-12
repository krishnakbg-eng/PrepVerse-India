// Discord Integration Configuration
// This file contains constants and utilities for Discord community integration

export const DISCORD_CONFIG = {
  // Main Discord Server
  SERVER_ID: process.env.NEXT_PUBLIC_DISCORD_SERVER_ID || '',
  INVITE_URL: process.env.NEXT_PUBLIC_DISCORD_INVITE || 'https://discord.gg/prepverse',
  BOT_TOKEN: process.env.DISCORD_BOT_TOKEN || '',
  CLIENT_ID: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || '',

  // Channel IDs
  CHANNELS: {
    GENERAL: 'general',
    JEE: 'jee-discussion',
    NEET: 'neet-discussion',
    PHYSICS: 'physics',
    CHEMISTRY: 'chemistry',
    MATHEMATICS: 'mathematics',
    BIOLOGY: 'biology',
    DOUBTS: 'doubt-solving',
    ANNOUNCEMENTS: 'announcements',
    RESOURCES: 'resources',
    STUDY_GROUPS: 'study-groups',
    WINS: 'wins-and-achievements',
  },

  // Role IDs (customize based on your server)
  ROLES: {
    MEMBER: 'member',
    JEE_ASPIRANT: 'jee-aspirant',
    NEET_ASPIRANT: 'neet-aspirant',
    MENTOR: 'mentor',
    MODERATOR: 'moderator',
  },

  // Embed Colors
  EMBED_COLORS: {
    PRIMARY: 0x00d9ff,  // Cyan
    SECONDARY: 0x7c3aed, // Purple
    ACCENT: 0xec4899,   // Pink
    SUCCESS: 0x10b981,  // Green
    WARNING: 0xf59e0b,  // Amber
    ERROR: 0xef4444,    // Red
  },
}

// Discord Rich Embed Helper
export const createDiscordEmbed = ({
  title,
  description,
  color = 'PRIMARY',
  fields = [],
  footer,
  image,
  thumbnail,
}: any) => ({
  title,
  description,
  color: DISCORD_CONFIG.EMBED_COLORS[color as keyof typeof DISCORD_CONFIG.EMBED_COLORS],
  fields,
  footer: footer ? { text: footer } : undefined,
  image: image ? { url: image } : undefined,
  thumbnail: thumbnail ? { url: thumbnail } : undefined,
  timestamp: new Date().toISOString(),
})

// Discord API Helper
export const sendDiscordWebhook = async (webhookUrl: string, payload: any) => {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return response.ok
  } catch (error) {
    console.error('Discord webhook error:', error)
    return false
  }
}

// Community Statistics
export interface CommunityStats {
  totalMembers: number
  activeUsers: number
  discussions: number
  messagesDaily: number
  solvedRate: number
}

// Default Stats
export const DEFAULT_COMMUNITY_STATS: CommunityStats = {
  totalMembers: 10000,
  activeUsers: 2500,
  discussions: 5000,
  messagesDaily: 20000,
  solvedRate: 98,
}
