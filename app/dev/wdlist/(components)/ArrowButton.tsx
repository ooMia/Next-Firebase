import Arrow from '@/public/arrow.svg'
import Image from 'next/image'

const ArrowButtonOrigin = (props: { className?: string }) => {
  return (
    <Image
      src={Arrow}
      alt={'Arrow'}
      className={`cursor-pointer w-fit bg-white rounded-full p-2 border border-gray-300 hover:border-black ${props.className}`}
      onClick={(e) => e.stopPropagation()}
    />
  )
}

const ArrowButton = (props: { className?: string }) => {
  return (
    <label className={`select-none ${props.className}`}>
      <input type={'checkbox'} value={''} className={`peer sr-only `} />
      <ArrowButtonOrigin className={`peer-checked:rotate-180 duration-300 transition-all`} />
    </label>
  )
}

export default ArrowButton
