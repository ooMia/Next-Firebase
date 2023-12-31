'use client'

import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import Button2 from '@/components/Button2'
import Kakao from '@/public/kakao.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { DialogContext, DialogDispatchContext } from '@/contexts/DialogContext'
import Link from 'next/link'
import { useContext } from 'react'

export default function BannerProfile() {
  const { data: session, status } = useSession()

  const dialogState = useContext(DialogContext)
  const dialogsDispatch = useContext(DialogDispatchContext)

  const menuDialog = () => {
    dialogsDispatch({ type: 'setTarget', target: dialogState.dialogMap['Menu'] })
    dialogsDispatch({ type: 'on' })
  }

  const isAuthenticated = (
    <Button2 key={'로그아웃'} href={''}>
      <Image
        priority={false}
        className={`rounded-full w-fit border border-black`}
        style={{
          objectFit: 'fill',
        }}
        width={40}
        height={40}
        src={session?.user?.image ? session.user.image : Kakao}
        alt={'?'}
        onClick={() => signOut({ callbackUrl: '/' })}
      />
    </Button2>
  )

  return (
    <div className={`flex flex-row`}>
      <button className={`md:hidden`}>
        <MenuIcon onClick={() => menuDialog()} />
      </button>
      {status === 'authenticated' ? (
        isAuthenticated
      ) : (
        <Link href={`/api/auth/signin`}>
          <button
            className={`px-4 py-2 initHoverAnimation border box-border rounded-xl border-gray-400 hover:bg-gray-200 text-blue-500 whitespace-nowrap p-1 m-1`}
          >
            회원가입<p className={`hidden lg:inline`}>/로그인</p>
          </button>
        </Link>
      )}
    </div>
  )
}
