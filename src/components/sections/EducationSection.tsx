import { educations } from 'helpers/cvDetails'
import type { ReactElement } from 'react'
import Section from '../ui/Section'

export default function EducationSection(): ReactElement {
	return (
		<Section title='Education' scrollId='education'>
			<>
				{educations.map(education => (
					<div
						className='mb-10 flex w-full flex-col'
						key={education.certificationName}
					>
						<div id='education:heading' className='flex flex-row'>
							<div className='flex w-full flex-col justify-between md:flex-row'>
								<div className='flex flex-col'>
									<h2 className='font-saira text-2xl font-bold text-orange-300 md:text-3xl'>
										{education.certificationName}
									</h2>
									<div className='flex flex-row gap-2'>
										<h2 className='leading-1.2 w-full font-saira text-xl text-slate-300 md:text-2xl'>
											{education.institution}
										</h2>
									</div>
								</div>
								<div className='flex flex-col text-left md:text-right'>
									<h2 className='text-baseline font-saira font-bold text-orange-300 md:text-3xl'>
										{education.startDate.getFullYear()} -{' '}
										{education.endDate.getFullYear()}
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
