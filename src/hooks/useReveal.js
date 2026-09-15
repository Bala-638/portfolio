import { useEffect, useRef } from 'react'

/**
 * Adds a subtle fade/slide-up reveal to an element when it scrolls into view.
 * Respects prefers-reduced-motion by skipping the observer entirely.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      node.classList.add('in-view')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('in-view')
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}
