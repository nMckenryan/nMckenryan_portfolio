import type { ReactElement } from 'react'
import Section from '../ui/Section'

interface Skills {
	certificationName: string
	institution: string
	startDate: Date
	endDate: Date
}

const educations: Skills[] = [
	{
		certificationName:
			'Graduate Certificate of Computing and Information Sciences',
		institution: 'Auckland University of Technology',
		startDate: new Date('2017, 1, 1'),
		endDate: new Date('2018, 12, 1')
	},
	{
		certificationName: 'Bachelor of Communications',
		institution: 'Auckland University of Technology',
		startDate: new Date('2012, 1, 1'),
		endDate: new Date('2014, 12, 1')
	}
]

export default function SkillsSection(): ReactElement {
	return (
		<Section title='Skills' scrollId='item-4'>
			<>
				{educations.map(skills => (
					<div
						className='mb-10 flex w-full flex-col'
						key={skills.certificationName}
					>
						<div id='skills:heading' className='flex flex-row'>
							<div className='flex w-full flex-col justify-between md:flex-row'>
								<div className='flex flex-col'>
									<h2 className='text-lg font-bold text-orange-300 md:text-2xl'>
										{skills.certificationName}
									</h2>
									<div className='flex flex-row gap-2'>
										<h2 className='text-baseline md:text-lg'>
											{skills.institution}
										</h2>
									</div>
								</div>
								<div className='flex flex-col text-left md:text-right'>
									<h2 className='text-baseline text-orange-300 md:text-2xl'>
										{skills.startDate.getFullYear()} -{' '}
										{skills.endDate.getFullYear()}
									</h2>
								</div>
							</div>
						</div>
					</div>
				))}
			</>
		</Section>
	)
}
