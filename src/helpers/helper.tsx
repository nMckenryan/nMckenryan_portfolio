import type { ReactElement } from 'react'
import { BiLogoGoogleCloud, BiLogoPostgresql } from 'react-icons/bi'
import {
	FaInfoCircle,
	FaLightbulb,
	FaSuitcase,
	FaUniversity,
	FaVuejs
} from 'react-icons/fa'
import { FaScrewdriverWrench } from 'react-icons/fa6'
import {
	SiAirtable,
	SiClerk,
	SiDocker,
	SiFastapi,
	SiJavascript,
	SiMaterialdesign,
	SiMicrosoftsqlserver,
	SiNextdotjs,
	SiPosthog,
	SiPython,
	SiReact,
	SiSentry,
	SiStrapi,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiWordpress
} from 'react-icons/si'

export interface Project {
	title: string
	client: string
	description: string[]
	technologies: string[]
	link: string
}

export interface Education {
	certificationName: string
	institution: string
	startDate: Date
	endDate: Date
}

export interface Experience {
	title: string
	company: string
	location: string
	startDate: Date
	endDate: Date
	description: string[]
}

export interface Skills {
	certificationName: string
	institution: string
	startDate: Date
	endDate: Date
}

export const tabs = [
	{
		content: 'About',
		href: '#item-1',
		logo: <FaInfoCircle className='text-orange-300' />
	},
	{
		content: 'Experience',
		href: '#item-2',
		logo: <FaSuitcase className='text-orange-300' />
	},
	{
		content: 'Projects',
		href: '#item-3',
		logo: <FaScrewdriverWrench className='text-orange-300' />
	},
	{
		content: 'Skills',
		href: '#item-4',
		logo: <FaLightbulb className='text-orange-300' />
	},
	{
		content: 'Education',
		href: '#item-5',
		logo: <FaUniversity className='text-orange-300' />
	}
]

export function DateSection(experience: Experience): ReactElement {
	const { startDate, endDate, location } = experience

	return (
		<div className='flex flex-col text-left md:text-right'>
			<h2 className='text-baseline text-orange-300 md:text-2xl'>
				{startDate.toLocaleString('default', {
					month: 'short'
				})}{' '}
				{startDate.getFullYear()} -{' '}
				{endDate.toLocaleString('default', {
					month: 'short'
				})}{' '}
				{endDate.getFullYear()}
			</h2>
			<h2 className='text-baseline hidden md:flex md:text-lg'>{location}</h2>
		</div>
	)
}

export default function renderLogo(tech: string): ReactElement {
	switch (tech) {
		case 'Python': {
			return <SiPython className='size-5 text-orange-300 md:size-10' />
		}
		case 'FastAPI': {
			return <SiFastapi className='size-5 text-orange-300 md:size-10' />
		}
		case 'Google Cloud Platform': {
			return <BiLogoGoogleCloud className='size-5 text-orange-300 md:size-10' />
		}
		case 'Docker': {
			return <SiDocker className='size-5 text-orange-300 md:size-10' />
		}

		case 'Strapi': {
			return <SiStrapi className='size-5 text-orange-300 md:size-10' />
		}
		case 'Airtable': {
			return <SiAirtable className='size-5 text-orange-300 md:size-10' />
		}
		case 'Vue.Js': {
			return <FaVuejs className='size-5 text-orange-300 md:size-10' />
		}

		case 'Tailwind': {
			return <SiTailwindcss className='size-5 text-orange-300 md:size-10' />
		}

		case 'Javascript': {
			return <SiJavascript className='size-5 text-orange-300 md:size-10' />
		}

		case 'Wordpress': {
			return <SiWordpress className='size-5 text-orange-300 md:size-10' />
		}

		case 'ReactJS': {
			return <SiReact className='size-5 text-orange-300 md:size-10' />
		}
		case 'Material UI': {
			return <SiMaterialdesign className='size-5 text-orange-300 md:size-10' />
		}
		case 'NextJS': {
			return <SiNextdotjs className='size-5 text-orange-300 md:size-10' />
		}

		case 'SQL Server': {
			return (
				<SiMicrosoftsqlserver className='size-5 text-orange-300 md:size-10' />
			)
		}

		case 'Clerk': {
			return <SiClerk className='size-5 text-orange-300 md:size-10' />
		}

		case 'Sentry': {
			return <SiSentry className='size-5 text-orange-300 md:size-10' />
		}

		case 'Posthog': {
			return <SiPosthog className='size-5 text-orange-300 md:size-10' />
		}

		case 'Vercel': {
			return <SiVercel className='size-5 text-orange-300 md:size-10' />
		}

		case 'Typescript': {
			return <SiTypescript className='size-5 text-orange-300 md:size-10' />
		}

		case 'Postgres': {
			return <BiLogoPostgresql className='size-5 text-orange-300 md:size-10' />
		}

		default: {
			// eslint-disable-next-line react/jsx-no-useless-fragment
			return <></>
		}
	}
}
