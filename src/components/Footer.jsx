import GithubIcon from '../assets/social-list/github.svg'
import TwitterIcon from '../assets/social-list/twitter-color.svg'
import FrontendMentorIcon from '../assets/social-list/frontendmentor.svg'
import EmailIcon from '../assets/social-list/email-2.svg'

const Footer = () => {
  return (
    <footer className="bg-cyan-950">
      <ul className="flex justify-center gap-5 p-10">
        <li className="social-icon social-icon-hover w-10">
          <a href="https://github.com/basitkorai" target="_blank">
            <span className="sr-only">Github Profile</span>
            <img
              aria-hidden="true"
              className="icon-github"
              src={GithubIcon}
              alt=""
            />
          </a>
        </li>

        <li className="social-icon social-icon-hover w-10">
          <a href="https://twitter.com/basitxkorai" target="_blank">
            <span className="sr-only">Twitter Profile</span>
            <img aria-hidden="true" src={TwitterIcon} alt="" />
          </a>
        </li>

        <li className="social-icon social-icon-hover w-10">
          <a
            href="https://www.frontendmentor.io/profile/basit-flash"
            target="_blank"
          >
            <span className="sr-only">Frontend Mentor Profile</span>
            <img aria-hidden="true" src={FrontendMentorIcon} alt="" />
          </a>
        </li>

        <li className="social-icon social-icon-hover w-10">
          <a href="mailto:basitalikorai7@gmail.com" target="_blank">
            <span className="sr-only">My email address</span>
            <img aria-hidden="true" src={EmailIcon} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
