import type { ReactElement } from 'react'
import { BiLogoGoogleCloud, BiLogoPostgresql } from 'react-icons/bi'
import { FaVuejs } from 'react-icons/fa'
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
import Section from '../ui/Section'

interface Project {
	title: string
	client: string
	description: string[]
	technologies: string[]
	link: string
}

const projects: Project[] = [
	{
		title: 'Pokemon Unbound Web Scraper and API',
		client: 'Pokemon Unbound Community',
		description: [
			'Developed a robust web scraper in Python to extract data from the Pokemon Unbound (A popular fan-made game development project)',
			'Extracted data from multiple websites, spreadsheets and APIs to make data more easily available to community developers',
			'Engineered a RESTful API using FastAPI, converting complex Pokedex data into a structured JSON',
			'Packed the web scraper and API into a Docker image',
			'Deployed the containerized application on Google Cloud Platform, ensuring high availability and scalability of the API endpoints'
		],
		technologies: ['Python', 'FastAPI', 'Docker', 'Google Cloud Platform'],
		link: ''
	},
	{
		title: 'Five Things Social Media Notes App Project',
		client: '',
		description: [
			'Built Five Things, a bullet point list review social media Web Application',
			'Built UI components with ReactJS, Material UI and Typescript',
			'Compiled the backend systems with NextJS, Drizzle and Postgres. Hosted the site via Vercel',
			'Implemented Authentication with Clerk, Error Detection with Sentry and Analytics with Posthog'
		],
		technologies: [
			'ReactJS',
			'Material UI',
			'NextJS',
			'Postgres',
			'Drizzle',
			'Clerk',
			'Sentry',
			'Posthog',
			'Typescript',
			'Vercel',
			'Postgres'
		],
		link: 'https://five-things.vercel.app/'
	},
	{
		title: 'Public Website Revamp',
		client: 'Camp Australia ',
		description: [
			'Assisted with development of Camp Australia’s Public Website',
			'Built UI components with ReactJS and Material UI',
			'Compiled backend operations via the Strapi CMS, SQL Server and Javascript',
			'Composed documentation to help developers and users best use the system'
		],
		technologies: [
			'ReactJS',
			'Material UI',
			'Strapi',
			'SQL Server',
			'Javascript',
			'Typescript'
		],
		link: ''
	},
	{
		title: 'Link Hub Application',
		client: 'WEC Administration',
		description: [
			'Designed and developed a Linktree clone for WEC Administration’s Promotions',
			'Worked with Stakeholders in WEC to iron out the interface and functionality.',
			'Connected and implemented the Airtable Database so staff could easily update the page.',
			'Built the User Interface with Vue.Js and Tailwind and implemented it into Wordpress.',
			'Revamped a version of this project in 2024, Upgraded to the Vite Compiler and modernised features'
		],
		technologies: ['Vue.Js', 'Tailwind', 'Airtable', 'Wordpress'],
		link: 'https://five-things.linktree.app'
	}
]

function renderLogo(tech: string): ReactElement {
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

export default function ProjectSection(): ReactElement {
	return (
		<Section title='Projects' scrollId='item-3'>
			<>
				{projects.map(project => (
					<div className='mb-10 flex w-full flex-col' key={project.title}>
						<div className='flex flex-row'>
							<div className='flex w-full flex-row justify-between'>
								<div className='flex flex-col'>
									<h2 className='text-lg font-bold text-orange-300 md:text-2xl'>
										{project.title}
									</h2>
								</div>
							</div>
						</div>
						<div className='flex flex-row gap-2 py-1'>
							{project.technologies.map(tech => renderLogo(tech))}
						</div>
						<div
							id='project:content'
							className='mt-3 flex w-full flex-col pl-5'
						>
							<ul className='list-disc'>
								{project.description.map((tech: string) => (
									<li
										className='md:text-baseline leading-1.5 py-1 text-sm'
										key={tech}
									>
										{tech}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</>
		</Section>
	)
}
