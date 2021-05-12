import { useEffect, useRef, useState } from 'react'

const UseNearScreen = () => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const handleIntersecting = (entry) => {
      const [element] = entry

      element.isIntersecting
        ? setIsIntersecting(true)
        : setIsIntersecting(false)
    }

    const observer = new IntersectionObserver(handleIntersecting, {
      "rootMargin": "200px"
    })

    observer.observe(elementRef.current)
  }, [isIntersecting])

  return {
    isIntersecting,
    elementRef
  }
}

export default UseNearScreen