import Image from 'next/image'
import '@/styles/ConentSliderLayout.css'
import Link from 'next/link'

export interface Content {
  cid: number
  source: string
  description: string[]
  link: string
}

const ContentBox = (props: Content) => {
  return (
    <div className={`max-w-1`}>
      <Link className={``} key={props.cid} href={props.link}>
        <Image className={``} src={props.source} alt={props.description[0]} fill />
      </Link>
    </div>
  )
}

export default ContentBox
