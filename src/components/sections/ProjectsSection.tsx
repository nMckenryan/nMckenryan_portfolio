import type { ReactElement } from 'react'
import { BiLogoGoogleCloud } from 'react-icons/bi'
import { SiDocker, SiFastapi, SiPython } from 'react-icons/si'
import Section from '../ui/Section'

interface Project {
	title: string
	description: string[]
	technologies: string[]
}

const projects: Project[] = [
	{
		title: 'Pokemon Unbound Web Scraper and API Backend',
		description: [
			'Developed a robust web scraper in Python to extract data from the Pokemon Unbound (A popular fan-made game development project)',
			'Extracted data from multiple websites, spreadsheets and APIs to make data more easily available to community developers',
			'Engineered a RESTful API using FastAPI, converting complex Pokedex data into a structured JSON',
			'Packed the web scraper and API into a Docker image',
			'Deployed the containerized application on Google Cloud Platform, ensuring high availability and scalability of the API endpoints'
		],
		technologies: ['Python', 'FastAPI', 'Docker', 'Google Cloud Platform']
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
		default: {
			// eslint-disable-next-line react/jsx-no-useless-fragment
			return <></>
		}
	}
}

export default function ProjectSection(): ReactElement {
	return (
		<Section title='Project'>
			<>
				{projects.map(project => (
					<div className='mb-10 flex w-screen flex-col' key={project.title}>
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
							className='mt-3 flex w-screen flex-col pl-5'
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
