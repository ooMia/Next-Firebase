'use client'

import { useEffect, useRef } from 'react'
import '@/styles/ConentSliderLayout.css'
import '@/styles/ContentSliderAnimation.css'
import sliderData from '@/public/slider.json'

import SliderButton from '@/components/ImageListSlider/SliderButton'
import ContentBoxList from '@/components/ImageListSlider/ContentBoxList'

const ContentBoxListSlider = (props: {
  viewWidth: number;
  imageWidth: number
}) => {
  // 이벤트로 움직일 ContentBoxList 컴포넌트 타게팅
  const targetRef = useRef<HTMLElement>()
  const pos = useRef(0)
  const isAnimationRunning = useRef(false)
  const intervalID = useRef<any>()

  const getImageSize = (imgWidth: number, imgPadding: number) => props.imageWidth
  const imgSize = getImageSize(96, 1)

  // 핵심 단위 이벤트
  const moveListAnimation = () => {
    console.log(intervalID.current)

    const targetList = targetRef.current
    if (!targetList) return

    const ani = targetList.animate([{ transform: `translate(${pos.current}vw)` }], {
      duration: 500, fill: 'forwards',
    })

    ani.onfinish = () => {
      isAnimationRunning.current = false
      pos.current %= sliderData.length * imgSize
      if (pos.current === 0) targetList.animate([{ transform: `translate(0vw)` }], { duration: 0, fill: 'forwards' })
    }
    ani.play()
  }

  const moveLeft = () => {
    if (isAnimationRunning.current) return else isAnimationRunning.current = true

    pos.current += imgSize

    moveListAnimation()
  }
  const moveRight = () => {
    if (isAnimationRunning.current) return else isAnimationRunning.current = true

    pos.current -= imgSize

    moveListAnimation()
  }

  useEffect(() => {
    intervalID.current = setInterval(moveRight, 5000)
    return () => {
      clearInterval(intervalID.current)
    }
  }, [])

  // 2n + 3 (홀수)
  const copiedContents = (ocs: any) => [ocs[ocs.length - 1], ...ocs, ...ocs, ocs[0], ocs[1]]

  return (<div className='ContentBoxListSlider'>
      <ContentBoxList
        length={copiedContents.length}
        contents={copiedContents(sliderData.contents)}
      />
      <SliderButton onClickCallback={moveLeft} value={'<'} />
      <SliderButton onClickCallback={moveRight} value={'>'} />
    </div>)
}

export default ContentBoxListSlider
