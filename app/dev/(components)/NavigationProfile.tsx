'use client'

import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import Kakao from '@/public/kakao.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { DialogContext, DialogDispatchContext } from '@/contexts/DialogContext'
import Link from 'next/link'
import { useContext } from 'react'

export default function NavigationProfile() {
  const { data: session, status } = useSession()

  const dialogState = useContext(DialogContext)
  const dialogsDispatch = useContext(DialogDispatchContext)

  const menuDialog = () => {
    dialogsDispatch({ type: 'setTarget', target: dialogState.dialogMap['Menu'] })
    dialogsDispatch({ type: 'on' })
  }

  return (
    <div>
      <button className={`md:hidden`}>
        <MenuIcon onClick={() => menuDialog()} />
      </button>

      {status === 'authenticated' ? (
        <div className={`relative w-[37.6px] h-[37.6px] rounded-full `}>
          <Image
            priority={false}
            className={`rounded-full w-fit border border-black`}
            fill
            src={session?.user?.image ? session.user.image : Kakao}
            alt={'?'}
            onClick={() => signOut({ callbackUrl: '/' })}
          />
        </div>
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
