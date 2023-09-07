import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/navbar/Navbar'
import { ThemeProvider } from '@/Components/Context/Themecontext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App with Typescript',
  description: 'Use Typescript with Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
