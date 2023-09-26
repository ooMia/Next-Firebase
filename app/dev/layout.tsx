import { ReactElement } from 'react'

export default function Layout({ children }: { children: ReactElement }) {
  const alignCenter: string = `flex flex-row justify-center`
  return <>{children}</>
}
