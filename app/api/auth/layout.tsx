import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen ax bg-gray-50 flex flex-col justify-center items-center pt-8`}>
      {children}
    </div>
  )
}
