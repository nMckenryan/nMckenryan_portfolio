import type { ReactElement } from 'react'
import Section from './ui/Section'

interface Experience {
	title: string
	company: string
	location: string
	startDate: Date
	endDate: Date
	description: string[]
}

const experiences: Experience[] = [
	{
		title: 'Web Developer',
		company: 'Camp Australia',
		location: 'Melbourne, Victoria',
		startDate: new Date('2021-04-01'),
		endDate: new Date('2022-06-01'),
		description: [
			'Maintaining and updating the websites of WEC’s Brands',
			'Co-ordinating with WEC Stakeholders to scope project requirements',
			'Building Frontend Solutions through Wordpress with Vue.JS and Tailwind.',
			'Resolving compliance errors and fixing software bugs'
		]
	},
	{
		title: 'Junior Web Developer',
		company: 'WEC Administration',
		location: 'Melbourne, Victoria',
		startDate: new Date('2021-04-01'),
		endDate: new Date('2022-06-01'),
		description: [
			'Maintaining and updating the websites of WEC’s Brands',
			'Co-ordinating with WEC Stakeholders to scope project requirements',
			'Building Frontend Solutions through Wordpress with Vue.JS and Tailwind.',
			'Resolving compliance errors and fixing software bugs'
		]
	}
]

export default function ExperienceSection(): ReactElement {
	return (
		<Section title='Experience'>
			<>
				{experiences.map(experience => (
					<div className='mb-10 flex flex-col' key={experience.title}>
						<div className='flex flex-row'>
							<div className='flex w-full flex-row justify-between'>
								<div className='flex flex-col'>
									<h2 className='text-2xl'>{experience.title}</h2>
									<h2 className='text-lg'>{experience.company}</h2>
								</div>
								<div className='flex flex-col'>
									<h2 className='text-2xl'>
										{experience.startDate.getMonth()}{' '}
										{experience.startDate.getFullYear()} -{' '}
										{experience.endDate.getMonth()}{' '}
										{experience.endDate.getFullYear()}
									</h2>
									<h2 className='text-lg'>{experience.location}</h2>
								</div>
							</div>
						</div>
						<div className='mt-3 flex flex-col pl-5'>
							<ul className='list-disc'>
								{experience.description.map(desc => (
									<li key={desc}>{desc}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</>
		</Section>
	)
}
