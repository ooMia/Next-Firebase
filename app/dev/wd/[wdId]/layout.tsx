import { ReactNode } from 'react'
import CenteredComponent from '@/app/dev/(components)/CenteredComponent'

export default function Layout({
  JobCardList,
  RewardContainer,
  children,
}: {
  JobCardList: ReactNode
  RewardContainer: ReactNode
  children: ReactNode
}) {
  return (
    <>
      <div className={`flex justify-center`}>
        <div className={`max-w-full`}>
          <main>{children}</main>
        </div>
        <aside className={`lgComponent`}>
          <header className={`sticky top-[90px] right-0 w-fit`}>
            <div className={`h-fit w-[340px]`}> {RewardContainer}</div>
          </header>
        </aside>
      </div>
      <CenteredComponent>{JobCardList}</CenteredComponent>
    </>
  )
}
