import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'A&S Solar Solutions | Best Solar Company in Rajgarh MP | Government Subsidy ₹78,000',
  description: 'A&S Solar Solutions – Rajgarh\'s most trusted solar panel installation company. Get up to ₹78,000 government subsidy. 3kW, 5kW & 10kW systems. Call now: 9039897640.',
  keywords: 'solar panels Rajgarh, solar installation Madhya Pradesh, A&S Solar Solutions, government subsidy solar MP, best solar company Rajgarh, rooftop solar Rajgarh, solar EPC Rajgarh',
  openGraph: {
    title: 'A&S Solar Solutions | Solar Installation in Rajgarh MP',
    description: 'Power your future with smart solar. Government subsidy up to ₹78,000. Serving Rajgarh & nearby areas.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: 'index, follow',
  authors: [{ name: 'A&S Solar Solutions' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Rajgarh, Madhya Pradesh" />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} font-body bg-solar-dark text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
