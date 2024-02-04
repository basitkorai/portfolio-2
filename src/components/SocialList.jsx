import GithubIcon from '../assets/social-list/github.svg'
import TwitterIcon from '../assets/social-list/twitter-color.svg'
import FrontendMentorIcon from '../assets/social-list/frontendmentor.svg'
import EmailIcon from '../assets/social-list/email-2.svg'

const SocialList = () => {
  return (
    <div className="social-list-wrapper">
      <ul className="social-list">
        <li className="social-icon social-icon-hover">
          <a href="https://github.com/basitkorai" target="_blank">
            <img className="icon-github" src={GithubIcon} alt="" />
          </a>
        </li>

        <li className="social-icon social-icon-hover">
          <a href="https://twitter.com/basitxkorai" target="_blank">
            <img src={TwitterIcon} alt="" />
          </a>
        </li>

        <li className="social-icon social-icon-hover">
          <a
            href="https://www.frontendmentor.io/profile/basit-flash"
            target="_blank"
          >
            <img src={FrontendMentorIcon} alt="" />
          </a>
        </li>

        <li className="social-icon social-icon-hover">
          <a href="mailto:basitalikorai7@gmail.com" target="_blank">
            <img src={EmailIcon} alt="" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialList
