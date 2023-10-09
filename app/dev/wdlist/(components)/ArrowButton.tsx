import Arrow from '@/public/arrow.svg'
import Image from 'next/image'
import { ReactNode } from 'react'

const ArrowButtonOrigin = (props: { className?: string }) => {
  return (
    <Image
      src={Arrow}
      alt={'Arrow'}
      className={`cursor-pointer w-fit bg-white rounded-full p-2 border border-gray-300 hover:border-black ${props.className}`}
      onClick={(event) => event.stopPropagation()}
    />
  )
}

const ArrowButton = (props: { children?: ReactNode; className?: string; onClick?: any }) => {
  return (
    <label className={`select-none ${props.className}`} onClick={props.onClick}>
      <input type={'checkbox'} value={''} className={`peer sr-only `} />
      <ArrowButtonOrigin className={`peer-checked:rotate-180 duration-300 transition-all`} />
      {props.children}
    </label>
  )
}

export default ArrowButton
