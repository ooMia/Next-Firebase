import { ReactNode } from 'react'
import BottomBorderBackground from '@/app/dev/(components)/BottomBorderBackground'
import CenteredComponent from '@/app/dev/(components)/CenteredComponent'

export default function Layout({ Filter, children }: { Filter: ReactNode; children: ReactNode }) {
  return (
    <>
      <div className={`sticky top-[90px] z-10`}>
        <BottomBorderBackground className={` `}>
          <CenteredComponent>{Filter}</CenteredComponent>
        </BottomBorderBackground>
      </div>

      <CenteredComponent>{children}</CenteredComponent>
    </>
  )
}
