import Link from 'next/link'

export default function NavigationLinkButton({ href, content }: { href: string; content: any }) {
  return (
    <Link href={href} className={`group/buttonParent group-hover/LinkParent:text-gray-400 pr-8`}>
      <button className={`lgComponent initHoverAnimation group-hover/buttonParent:text-black`}>
        {content}
      </button>
    </Link>
  )
}
