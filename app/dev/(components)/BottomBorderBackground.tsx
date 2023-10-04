import { ReactNode } from 'react'

export default function BottomBorderBackground({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`${className} border-b-4 bg-white bg-opacity-95`}>{children}</div>
}
