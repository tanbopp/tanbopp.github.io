import ProjectCard from '../components/ProjectCard'
import FadeIn from '../components/FadeIn'
import projects from '../data/projects'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.05]">
              Creative Developer
              <br />
              <span className="text-secondary">& Designer</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-8 text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
              I craft digital experiences that blend thoughtful design with clean, purposeful code.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-12">
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-secondary hover:text-white transition-colors cursor-pointer"
              >
                View Work
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-sm uppercase tracking-widest text-secondary mb-16">
              Selected Work
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <h2 className="text-sm uppercase tracking-widest text-secondary mb-8">
                About
              </h2>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-snug">
                I build things for the web with a focus on simplicity and craft.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="space-y-6 text-secondary leading-relaxed">
                <p>
                  With years of experience in web development and design, I specialize in creating
                  digital products that are both beautiful and functional. My approach combines
                  minimalist design principles with modern development practices.
                </p>
                <p>
                  I believe great digital experiences come from understanding the intersection of
                  technology and human behavior. Every project is an opportunity to create something
                  meaningful.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-semibold text-white">50+</p>
                  <p className="mt-1 text-sm text-secondary">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">5+</p>
                  <p className="mt-1 text-sm text-secondary">Years Experience</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
