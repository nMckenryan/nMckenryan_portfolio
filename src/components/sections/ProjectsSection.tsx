import { projects } from 'helpers/cvDetails'
import renderLogo from 'helpers/helper'
import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Section from '../ui/Section'

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
									<h2 className='text-baseline md:text-1xl font-bold text-orange-300'>
										{project.client}
									</h2>
									<Link
										className='flex flex-row gap-2 py-1 text-blue-300 underline'
										to={project.link}
									>
										{project.link}
									</Link>
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
