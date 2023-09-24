'use client'

import { useCallback, useEffect, useState } from 'react'

export default function Page() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  const a = useCallback(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', a)
    return window.removeEventListener('resize', a)
  }, [a])

  return (
    <div>
      <div>{windowWidth}</div>
      <div>{windowHeight}</div>
    </div>
  )
}
