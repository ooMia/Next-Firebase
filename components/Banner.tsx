import Button2 from '@/components/Button2'
import Wanted from '@/public/wanted.svg'
import Image from 'next/image'
import Link from 'next/link'
import BannerProfile from '@/components/BannerProfile'

export default async function Banner() {
  return (
    <div
      className={`flex-row inline-flex justify-between sticky z-50 top-0 left-0 w-full bg-white opacity-90`}
    >
      <div className={`flex flex-row`}>
        <Link href={'/'}>
          <Image src={Wanted} alt={'wanted logo'} className={'mx-12 my-6'} />
        </Link>

        <div className={`hidden md:block group w-fit`}>
          <Button2 key={'채용'} href={'/wdlist'}>
            채용
          </Button2>
          <Button2 key={'커리어'} href={'/wdlist'}>
            커리어
          </Button2>
          <Button2 key={'소셜'} href={'/wdlist'}>
            소셜
          </Button2>
          <Button2 key={'이력서'} href={'/wdlist'}>
            이력서
          </Button2>
          <Button2 key={'프리랜서'} href={'/wdlist'}>
            프리랜서
          </Button2>
          <Button2 key={'더보기'} href={'/wd/register'}>
            더보기
          </Button2>
        </div>
      </div>
      <BannerProfile />
    </div>
  )
}
