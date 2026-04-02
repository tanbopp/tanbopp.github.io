import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const scrollToSection = (id) => {
    if (!isHome) {
      window.location.href = `/#/${id}`
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-lg font-medium tracking-tight text-white">
          Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('work')}
            className="text-sm text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-secondary hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl px-6 pb-8 pt-2">
          <div className="flex flex-col gap-6">
            <button
              onClick={() => scrollToSection('work')}
              className="text-left text-2xl font-light text-white cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-2xl font-light text-white cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-2xl font-light text-white cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
