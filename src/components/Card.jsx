import GithubIcon from '../assets/social-list/github-2.svg'
import { FaEye } from 'react-icons/fa'

const technologies = ['React', 'Material UI', 'TailwindCSS']
const Card = ({ name, image }) => {
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg card-bg">
      <img
        class="w-full"
        src="https://images.pexels.com/photos/1498273/pexels-photo-1498273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Sunset in the mountains"
      />
      <div class="px-2 py-4 text-white">
        <div class="font-semibold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia.
        </p>
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
      <div class="px-2 pt-4 pb-2 flex gap-1 justify-between">
        <a
          href="/project-url"
          class="bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 inline-flex items-center gap-2 cursor-pointer hover:bg-gray-300"
        >
          <span>Source code</span>
          <img aria-hidden src={GithubIcon} alt="" width={30} height={30} />
        </a>
        <a class="bg-slate-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 inline-flex items-center gap-2 cursor-pointer hover:bg-gray-300">
          <FaEye size={'1.5rem'} color="black" />
        </a>
      </div>
    </div>
  )
}

export default Card
