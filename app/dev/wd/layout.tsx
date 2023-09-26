import { ReactElement } from 'react'
import Navigation from '@/app/dev/(components)/Navigation'

function RewardContainer() {
  return (
    <div className={`h-2 w-fit bg-amber-600`}>
      <div className={``}>{'some contents'}</div>
    </div>
  )
}

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className={`relative`}>
      {/*<header>header</header>*/}
      <nav className={`sticky top-0 z-10`}>
        <Navigation />
      </nav>
      <div className={`flex flex-row relative`}>
        <main className={`flex flew-col bg-yellow-200 w-full`}>{children}</main>
        <header className={`sticky inline-block right-0 top-auto`}>
          <RewardContainer />
        </header>
      </div>
      <section className={`grid grid-cols-4`}>
        <article className={`h-96 w-full`}>{'some' + ' contents'}</article>
        <article className={`h-96 w-full`}>{'some' + ' contents'}</article>
        <article className={`h-96 w-full`}>{'some' + ' contents'}</article>
        <article className={`h-96 w-full`}>{'some' + ' contents'}</article>
      </section>
    </div>
  )
}
