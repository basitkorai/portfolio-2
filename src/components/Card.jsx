import GithubIcon from '../assets/social-list/github-2.svg'
import { FaEye } from 'react-icons/fa'

const Card = ({
  name,
  image,
  description,
  technologies,
  source_code,
  site_url,
}) => {
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg card-bg">
      <a href={site_url}>
        <img class="w-full" src={image} alt="Sunset in the mountains" />
      </a>
      <div class="px-2 py-4 text-white">
        <div class="font-semibold text-xl mb-2">{name}</div>
        <p class="text-base">{description}</p>
      </div>
      <div className="flex gap-0 justify-start flex-wrap px-2">
        {technologies.map((item, index) => {
          return (
            <span
              key={index}
              class="bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center gap-1"
            >
              <span>{item}</span>
            </span>
          )
        })}
      </div>
      <div class="px-2 pt-4 pb-2 mt-auto flex gap-1 justify-between">
        <a
          href={source_code}
          class="bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 inline-flex items-center gap-2 cursor-pointer hover:bg-gray-300"
        >
          <span>Source code</span>
          <img aria-hidden src={GithubIcon} alt="" width={30} height={30} />
        </a>
        <a
          href={site_url}
          class="bg-slate-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 inline-flex items-center gap-2 cursor-pointer hover:bg-gray-300"
        >
          <FaEye size={'1.5rem'} color="black" />
        </a>
      </div>
    </div>
  )
}

export default Card
