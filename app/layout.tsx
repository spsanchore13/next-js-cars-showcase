import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car Hub',
  description: 'Find best cars for you from around world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
