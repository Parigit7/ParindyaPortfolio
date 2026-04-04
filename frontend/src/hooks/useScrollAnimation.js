import { useEffect, useRef } from 'react'

export const useScrollAnimation = (animationClass = 'animate-fade-in-up') => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [animationClass])

  return ref
}

export const useMouseMove = (ref) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Apply subtle parallax effect
      const moveX = (x - rect.width / 2) * 0.05
      const moveY = (y - rect.height / 2) * 0.05
      
      ref.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [ref])
}
