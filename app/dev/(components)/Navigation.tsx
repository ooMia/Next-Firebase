import Wanted from '@/public/wanted.svg'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
import Link from 'next/link'
import NavigationLinkButton from '@/app/dev/(components)/NavigationLinkButton'
import CenteredComponent from '@/app/dev/(components)/CenteredComponent'
import OuterHoverAnimation from '@/app/dev/(components)/outerHoverAnimation'

interface NavigationButton {
  content: string
  link: string
}

export default function Navigation() {
  const links: NavigationButton[] = [
    {
      content: '채용',
      link: '/wdlist',
    },
    {
      content: '커리어',
      link: '/events',
    },
    {
      content: '소셜',
      link: '/community',
    },
    {
      content: '이력서',
      link: '/cv/list',
    },
    {
      content: '프리랜서',
      link: '/gigs/experts',
    },
  ]

  const roundedBorderBox: string = `border box-border rounded-xl border-gray-200`

  return (
    <CenteredComponent>
      <div className={`flex justify-between items-center py-2`}>
        <Link href={`/dev/jobsfeed`} className={``}>
          <Image src={Wanted} alt={'wanted logo'} className={`object-contain`} />
        </Link>
        <div className={`flex items-center w-full tracking-tighter text-sm font-bold`}>
          <div className={`group/LinkParent pl-14 w-full flex`}>
            {links.map((e, i) => (
              <NavigationLinkButton href={'/dev' + e.link} content={e.content} key={i} />
            ))}
            <div className={`group/buttonParent group-hover/LinkParent:text-gray-400`}>
              <button
                className={`lgComponent initHoverAnimation group-hover/buttonParent:text-black`}
              >
                더보기
              </button>
            </div>
          </div>

          <div className={`flexRowGroup items-center justify-evenly`}>
            <OuterHoverAnimation>
              <SearchIcon className={`m-1`} />
            </OuterHoverAnimation>
            {/*<OuterHoverAnimation>*/}
            {/*  <NotificationsOutlinedIcon className={`m-1`} />*/}
            {/*</OuterHoverAnimation>*/}
            {/*<OuterHoverAnimation className={`text-gray-400`}>*/}
            {/*  <AccountCircleIcon className={`m-1`} />*/}
            {/*</OuterHoverAnimation>*/}
            <Link href={`/dev/login`}>
              <button
                className={`px-4 py-2 initHoverAnimation ${roundedBorderBox} hover:bg-gray-200 border-gray-400 text-blue-500 whitespace-nowrap p-1 m-1`}
              >
                회원가입<p className={`hidden lg:inline`}>/로그인</p>
              </button>
            </Link>
            <Link href={`/dev/dashboard`}>
              <button
                className={`px-4 py-2 lgComponent initHoverAnimation ${roundedBorderBox} hover:bg-gray-200 border-gray-400 whitespace-nowrap p-1 m-1`}
              >
                기업 서비스
              </button>
            </Link>
          </div>
        </div>
      </div>
    </CenteredComponent>
  )
}
