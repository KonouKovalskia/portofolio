import './globals.css'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'
import StarField from '@/components/StarField'

export const metadata = {
  title: 'Konou — Portfolio',
  description: 'Informatika student at Telkom University. Building real products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StarField />
        <Navbar />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  )
}