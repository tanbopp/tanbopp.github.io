export default function Footer() {
  return (
    <footer id="contact" className="bg-black">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Let's work together
            </h2>
            <p className="mt-6 text-lg text-secondary max-w-md leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's create something exceptional.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <a
              href="mailto:hello@example.com"
              className="text-lg text-white hover:text-secondary transition-colors"
            >
              hello@example.com
            </a>
            <div className="flex gap-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-[#1d1d1f]">
          <p className="text-xs text-secondary">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
