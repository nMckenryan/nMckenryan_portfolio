import { experiences } from 'helpers/cvDetails'
import { DateSection } from 'helpers/helper'
import type { ReactElement } from 'react'
import Section from '../ui/Section'

export default function ExperienceSection(): ReactElement {
	return (
		<Section title='Experience' scrollId='item-2'>
			<>
				{experiences.map(experience => (
					<div className='mb-10 flex w-full flex-col' key={experience.title}>
						<div id='experience:heading' className='flex flex-row'>
							<div className='flex w-full flex-col justify-between md:flex-row'>
								<div className='flex flex-col'>
									<h2 className='text-lg font-bold text-orange-300 md:text-2xl'>
										{experience.title}
									</h2>
									<div className='flex flex-row gap-2'>
										<h2 className='text-baseline md:text-lg'>
											{experience.company}
										</h2>
										<h2 className='text-baseline flex md:hidden md:text-lg'>
											- {experience.location}
										</h2>
									</div>
								</div>
								{DateSection(experience)}
							</div>
						</div>
						<div
							id='experience:content'
							className='mt-3 flex w-full flex-col pl-5'
						>
							<ul className='list-disc'>
								{experience.description.map(desc => (
									<li
										className='md:text-baseline w-full py-1 text-sm'
										key={desc}
									>
										{desc}
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
