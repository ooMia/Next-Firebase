import { ReactNode } from 'react'

export default function CenteredComponent({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`flex justify-center py-3 mx-8 lg:mx-12 ${className}`}>
      <div className={`w-full max-w-full`}>{children}</div>
    </div>
  )
}
