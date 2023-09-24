'use client'

import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import Button2 from '@/components/Button2'
import Kakao from '@/public/kakao.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { DialogContext, DialogDispatchContext } from '@/contexts/DialogContext'
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
    <div className={`flex flex-row`}>
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
    </div>
  )

  return (
    <div className={`flex flex-row`}>
      <button className={`md:hidden`}>
        <MenuIcon onClick={() => menuDialog()} />
      </button>
      {status === 'authenticated' ? (
        isAuthenticated
      ) : (
        <Button2 key={'로그인'} href={'/api/auth/signin'}>
          로그인
        </Button2>
      )}
    </div>
  )
}
