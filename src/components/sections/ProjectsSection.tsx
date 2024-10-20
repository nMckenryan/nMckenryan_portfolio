import type { ReactElement } from 'react'
import Section from '../ui/Section'

interface Project {
	title: string
	description: string
	technologies: string[]
}

const projects: Project[] = [
	{
		title: 'Project 1',
		description: 'Descip',
		technologies: ['Tech 1', 'Tech 2', 'Tech 3']
	},
	{
		title: 'Project 1',
		description: 'Descip',
		technologies: ['Tech 1', 'Tech 2', 'Tech 3']
	},
	{
		title: 'Project 1',
		description: 'Descip',
		technologies: ['Tech 1', 'Tech 2', 'Tech 3']
	}
]

export default function ProjectSection(): ReactElement {
	return (
		<Section title='Project'>
			<>
				{projects.map(project => (
					<div className='mb-10 flex flex-col' key={project.title}>
						<div className='flex flex-row'>
							<div className='flex w-full flex-row justify-between'>
								<div className='flex flex-col'>
									<h2 className='text-2xl text-orange-300'>{project.title}</h2>
									<h2 className='text-lg '>{project.description}</h2>
								</div>
							</div>
						</div>
						<div className='mt-3 flex flex-col pl-5'>
							<ul className='list-disc'>
								{project.technologies.map((tech: string) => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</>
		</Section>
	)
}
