import './globals.css'
import { Sora, Space_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'
import StarField from '@/components/StarField'

// next/font handles preloading, no layout shift, zero blocking —
// replaces the @import in globals.css which blocked first paint.
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
  title: 'Konou — Portfolio',
  description: 'Informatika student at Telkom University. Building real products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceMono.variable}`}>
      <body>
        <StarField />
        <Navbar />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  )
}