'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const handleWidthResize = () => {
    setWindowWidth(window.innerWidth)
  }
  const handleHeightResize = () => {
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWidthResize)
    window.addEventListener('resize', handleHeightResize)
    return () => {
      window.removeEventListener('resize', handleWidthResize)
      window.removeEventListener('resize', handleHeightResize)
    }
  }, [])

  return (
    <div>
      <div>{windowWidth}</div>
      <div>{windowHeight}</div>
    </div>
  )
}
