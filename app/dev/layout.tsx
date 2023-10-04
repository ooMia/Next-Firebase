import Navigation from '@/app/dev/(components)/Navigation'
import { ReactNode } from 'react'
import BottomBorderBackground from '@/app/dev/(components)/BottomBorderBackground'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={`sticky top-0 z-10 box-border`}>
        <BottomBorderBackground>
          <Navigation />
        </BottomBorderBackground>
      </div>
      {children}
    </>
  )
}
