import CenteredComponent from '@/app/dev/(components)/CenteredComponent'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <CenteredComponent className={`text-8xl bg-black`}>
        <h2>Page Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href='/'>Return Home</Link>
      </CenteredComponent>
    </div>
  )
}
