import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ContextProviders from '@/contexts/ContextProviders'
import AlertDialog from '@/components/AlertDialog'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  creator: 'ooMia',
  authors: [{ name: 'ooMia', url: 'https://github.com/ooMia' }],
  title: "ooMia's Wanted Clone",
  description: 'Cloned web site with Next.js framework',
  metadataBase: new URL('https://next-firebase-oomia.vercel.app'),
  openGraph: {
    type: 'website',
    title: 'Wanted Clone',
    description: 'Cloned web site with Next.js framework',
    emails: '07ily@naver.com',
    countryName: 'Repulic of Korea',
    siteName: "ooMia's Wanted Clone",
    images: 'https://avatars.githubusercontent.com/u/96914905?v=4',
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className={`${inter.className} relative`}>
        <ContextProviders>
          {props.children}
          <AlertDialog />
        </ContextProviders>
      </body>
    </html>
  )
}
