import { useInView } from '../hooks/useInView'

export default function FadeIn({ children, className = '', delay = 0, fast = false }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={`${fast ? 'fade-in-fast' : 'fade-in'} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
