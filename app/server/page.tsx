import { options } from '@/app/api/auth/[...nextauth]/options'
import UserCard from '@/components/UserCard'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function ServerPage() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }

  return (
    <section className='flex flex-col gap-6'>
      {session ? (
        <UserCard user={session?.user} pagetype={'Server'} />
      ) : (
        <h1 className='text-5xl'>You Shall Not Pass!</h1>
      )}
    </section>
  )
}
