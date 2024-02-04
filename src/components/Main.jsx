import HtmlIcon from '../assets/tech-stack/html.svg'
import CssIcon from '../assets/tech-stack/css-3.svg'
import JavascriptIcon from '../assets/tech-stack/javascript.svg'
import SassIcon from '../assets/tech-stack/sass.svg'
import ReactIcon from '../assets/tech-stack/react.svg'

const Main = () => {
  return (
    <main className="">
      <section className="intro-section h-screen mt-0">
        <div className="intro-container">
          <div className="title-wrapper text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            <p className="supertitle text-xl">Hi, I'm</p>
            <h1 className="title font-semibold">
              <span>Basit Korai</span>
              <span className="profession">Web Developer</span>
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
          <h3>My Tech Stack</h3>
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
                className="technology animate-bounce"
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
