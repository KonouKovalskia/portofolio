import './globals.css'
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'

const sans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const description =
  'IT student at Telkom University in Bandung. I build web products people use, and I am looking for a frontend internship.'

export const metadata = {
  title: 'Konou, frontend developer',
  description,
  openGraph: {
    title: 'Konou, frontend developer',
    description,
    url: 'https://konou.dev',
    siteName: 'Konou',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
