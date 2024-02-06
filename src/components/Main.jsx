import HtmlIcon from '../assets/tech-stack/html.svg'
import CssIcon from '../assets/tech-stack/css-3.svg'
import JavascriptIcon from '../assets/tech-stack/javascript.svg'
import SassIcon from '../assets/tech-stack/sass.svg'
import ReactIcon from '../assets/tech-stack/react.svg'

const Main = () => {
  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[99vw]">
      <section className="intro-section h-screen my-0 text-center">
        <div className="intro-container">
          <div className="title-wrapper text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            <p className="supertitle text-xl">Hi, I'm</p>
            <h1 className="title font-semibold">
              <span>Basit Korai</span>
              <span className="text-orange-300">Web Developer</span>
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
      </section>
      <section className="about-me">
        <article className="tech-stack">
          <h2 className="text-2xl font-semibold">Technologies I know</h2>
          <div className="tech-stack-content">
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
          </div>
        </article>
      </section>
    </main>
  )
}

export default Main
