import HtmlIcon from '../assets/tech-stack/html.svg'
import CssIcon from '../assets/tech-stack/css-3.svg'
import JavascriptIcon from '../assets/tech-stack/javascript.svg'
import SassIcon from '../assets/tech-stack/sass.svg'
import ReactIcon from '../assets/tech-stack/react.svg'
import Card from './Card'
import projects from '../data/projects'
import { motion } from 'framer-motion'

const Main = () => {
  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[99vw] overflow-x-hidden">
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: 'anticipate',
        }}
        viewport={{ once: true }}
        id="hero"
        className="intro-section h-[100dvh] my-0 text-center"
      >
        <div className="intro-container">
          <div className="title-wrapper text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            <p className="supertitle text-xl">Hi, I'm</p>
            <h1 className="title font-semibold">
              <span>Basit Korai</span>
              <span className="text-gray-800">Web Developer</span>
            </h1>
          </div>
          <p className="intro-text">
            I’m a software engineer specializing in building engaging and
            exceptional digital experiences. I’m focused on building accessible,
            and beautiful apps.
          </p>
          <a className="btn btn-glow" href="#work">
            Things I've built
          </a>
        </div>
      </motion.section>
      <section id="about-me" className="about-me">
        <article className="tech-stack">
          <h2 className="text-2xl font-semibold">Technologies I know</h2>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: 'anticipate',
            }}
            viewport={{ once: true }}
            className="tech-stack-content"
          >
            <div>
              <img
                className="technology"
                src={HtmlIcon}
                alt=""
                height="150px"
                width="150px"
              />
            </div>
            <div>
              <img
                className="technology"
                src={CssIcon}
                alt=""
                height="150px"
                width="150px"
              />
            </div>
            <div>
              <img
                className="technology animate-float"
                src={JavascriptIcon}
                alt=""
                height="150px"
                width="150px"
              />
            </div>
            <div>
              <img
                className="technology"
                src={SassIcon}
                alt=""
                height="150px"
                width="150px"
              />
            </div>
            <div>
              <img
                draggable
                className="technology animate-react"
                src={ReactIcon}
                alt=""
                height="150px"
                width="150px"
              />
            </div>
          </motion.div>
        </article>
      </section>
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: 'anticipate',
        }}
        viewport={{ once: true }}
        className="projects p-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        id="work"
      >
        <h2 className="text-2xl font-semibold text-center my-4">
          My recent work
        </h2>
        <div className="grid gap-4 md:gap-4 grid-cols-1 3xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {projects.map((item, index) => {
            return <Card {...item} key={index} />
          })}
        </div>
      </motion.section>
    </main>
  )
}

export default Main
