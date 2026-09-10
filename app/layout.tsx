import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ANKITA S — Computer Science / AI-ML Portfolio',
  description: 'The personal portfolio of Ankita S — a computer science student exploring AI, machine learning, cybersecurity, music and sport.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#070809',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
