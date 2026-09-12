// SEO Metadata Configuration

export const SITE_METADATA = {
  title: 'PrepVerse India - Master Your Competitive Exams',
  description: 'All-in-one platform for JEE and NEET preparation with study tools, resources, PYQs, MCQs, and a thriving community of 10k+ students.',
  url: 'https://prepverse.in',
  image: 'https://prepverse.in/og-image.png',
  keywords: [
    'JEE preparation',
    'NEET preparation',
    'competitive exams',
    'study platform',
    'online coaching',
    'exam resources',
    'PYQs',
    'MCQ practice',
    'study tracker',
    'India',
  ],
  author: 'PrepVerse India',
  twitterHandle: '@PrepVerseIndia',
}

export const generateMetaTags = ({
  title = SITE_METADATA.title,
  description = SITE_METADATA.description,
  image = SITE_METADATA.image,
  url = SITE_METADATA.url,
  type = 'website',
}: any = {}) => ({
  title,
  description,
  openGraph: {
    title,
    description,
    image,
    url,
    type,
  },
  twitter: {
    handle: SITE_METADATA.twitterHandle,
    cardType: 'summary_large_image',
  },
})
