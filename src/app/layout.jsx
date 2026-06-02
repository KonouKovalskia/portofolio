import './globals.css'
import { Sora, Space_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'
import StarField from '@/components/StarField'
import CustomCursor from '@/components/CustomCursor'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Konou — Frontend Developer',
  description: 'Information Technology student at Telkom University. I build web products that solve real problems.',
  openGraph: {
    title: 'Konou — Frontend Developer',
    description: 'Information Technology student at Telkom University. I build web products that solve real problems.',
    url: 'https://konou.dev',
    siteName: 'Konou Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Konou — Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konou — Frontend Developer',
    description: 'Information Technology student at Telkom University. I build web products that solve real problems.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceMono.variable}`}>
      <body>
        <CustomCursor />
        <StarField />
        <Navbar />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  )
}