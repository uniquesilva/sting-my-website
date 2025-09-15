import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sting.my - The Ultimate Insect Sting Challenge',
  description: 'Follow the 7-level sting challenge streamed live on pump.fun via STING token. Educational, entertaining, and tokenized insect sting experiences.',
  keywords: 'insect stings, Schmidt pain index, Coyote Peterson, token, livestream, education, entomology',
  authors: [{ name: 'Sting.my Team' }],
  openGraph: {
    title: 'Sting.my - The Ultimate Insect Sting Challenge',
    description: 'Follow the 7-level sting challenge streamed live on pump.fun via STING token. Educational, entertaining, and tokenized insect sting experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sting.my - The Ultimate Insect Sting Challenge',
    description: 'Follow the 7-level sting challenge streamed live on pump.fun via STING token. Educational, entertaining, and tokenized insect sting experiences.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}