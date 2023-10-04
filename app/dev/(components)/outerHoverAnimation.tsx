import { ReactElement } from 'react'

export default function OuterHoverAnimation({
  children,
  className,
}: {
  children: ReactElement
  className?: string
}) {
  return (
    <div className={`${className} initHoverAnimation hover:bg-gray-200 rounded-full`}>
      {children}
    </div>
  )
}
