import GalaxyStoreShot from '../assets/projects/galaxy-games-store.jpeg'
import SocialRocketShot from '../assets/projects/social-rocket.jpeg'
import SpaceTourismShot from '../assets/projects/space-tourism-website.jpeg'
import SunnysideShot from '../assets/projects/sunnyside-agency.jpeg'
import EcommerceShot from '../assets/projects/ecommerce-product-page.jpeg'

const projects = [
    {
        name: 'Galaxy Games Store',
        image: GalaxyStoreShot,
        source_code: 'https://github.com/basitkorai/galaxy-games-store',
        site_url: 'https://galaxygames.vercel.app',
        description: 'This web app is a video games store, where users can buy video games and play them using our galaxy games launcher.',
        technologies: ["React", "React Router", "TailwindCSS", "Framer Motion"]
    },
    {
        name: 'Social Rocket',
        image: SocialRocketShot,
        source_code: 'https://github.com/basitkorai/social-media-app',
        site_url: 'https://socialrocket.vercel.app',
        description: 'This web app is a social media website like facebook, where users can share their photos, stories and videos with others.',
        technologies: ["React", "MUI", "React Router", "React Icons", "Framer Motion"]
    },
    {
        name: 'Space Tourism Website',
        image: SpaceTourismShot,
        source_code: 'https://github.com/basitkorai/space-tourism-website',
        site_url: 'https://space-tourism-website-rust.vercel.app',
        description: 'This web app or website is a space tourism website people can plan their trips to outer space and beyond.',
        technologies: ["React", "React Router", "TailwindCSS", "Framer Motion"]
    },
    {
        name: 'Sunnyside Agency Website',
        image: SunnysideShot,
        source_code: 'https://github.com/basitkorai/sunnyside-agency',
        site_url: 'https://basitkorai.github.io/sunnyside-agency/',
        description: 'I created this website for an agency sunnyside agency.',
        technologies: ["HTML", "Sass", "Javascript",]
    },
    {
        name: 'Ecommerce Product Page',
        image: EcommerceShot,
        source_code: 'https://github.com/basitkorai/ecommerce-product-page',
        site_url: 'https://basitsecommerce.vercel.app/',
        description: 'This is a product page for an ecommerce website.',
        technologies: ["React", "CSS",]
    }
]

export default projects