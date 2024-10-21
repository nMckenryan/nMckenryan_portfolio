import { skills } from 'helpers/cvDetails'
import type { ReactElement } from 'react'
import Section from '../ui/Section'

export default function SkillsSection(): ReactElement {
	return (
		<Section title='Skills' scrollId='item-4'>
			<>
				{skills.map(skill => (
					<div
						className='mb-10 flex w-full flex-col'
						key={skill.certificationName}
					>
						<div id='skills:heading' className='flex flex-row'>
							<div className='flex w-full flex-col justify-between md:flex-row'>
								<div className='flex flex-col'>
									<h2 className='text-lg font-bold text-orange-300 md:text-2xl'>
										{skill.certificationName}
									</h2>
									<div className='flex flex-row gap-2'>
										<h2 className='text-baseline md:text-lg'>
											{skill.institution}
										</h2>
									</div>
								</div>
								<div className='flex flex-col text-left md:text-right'>
									<h2 className='text-baseline text-orange-300 md:text-2xl'>
										{skill.startDate.getFullYear()} -{' '}
										{skill.endDate.getFullYear()}
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
