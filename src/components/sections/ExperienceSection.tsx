import type { ReactElement } from 'react'
import Section from '../ui/Section'

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
		title: 'Web Developer (React/C#/Flutter/MSSQL)',
		company: 'Camp Australia',
		location: 'Melbourne, Victoria',
		startDate: new Date('2022-03-01'),
		endDate: new Date('2024-06-01'),
		description: [
			'Building new Web-based and Mobile Frontend Solutions via C#, Flutter and ReactJS.',
			'Updating the Backend of Customer Facing Sites using Strapi, SQL and Azure.',
			'Communicating with Business Analysts to deliver ideal Code Solutions',
			'Collaborating with the Testing to help deliver high quality code.',
			'Working with Marketing and Customer Support to resolve software bugs and implement Quality of Life Improvements.'
		]
	},
	{
		title: 'Junior Web Developer (Wordpress/Vue.JS)',
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
	},
	{
		title: 'Information Technology Officer (SQL)',
		company: 'Ecotricity NZ',
		location: 'Auckland, New Zealand',
		startDate: new Date('2019-08-01'),
		endDate: new Date('2020-10-01'),
		description: [
			'Managing monthly invoicing',
			'Resolving invoicing and system errors',
			'Ordering IT equipment and maintaining workstations',
			'Maintaining Ecotricity’s data servers',
			'Improving efficiency for the Customer Service Team',
			'Advising the Metering, Customer Service, Sales and Reporting Teams',
			'Co-ordinating with the external support team to resolve technical issues'
		]
	},
	{
		title: 'Disputes Resolution Manager',
		company: 'Ecotricity NZ',
		location: 'Auckland, New Zealand',
		startDate: new Date('2019-02-01'),
		endDate: new Date('2019-08-01'),
		description: [
			'Co-ordinating with Utilities Disputes',
			'Responding to client complaints and reaching resolutions with customers.',
			'Advising Colleagues as to how to effectively resolve issues',
			'Relaying Feedback to change makers in Ecotricity.',
			'Ensuring Ecotricity remains in accordance to Electricity Authority Regulations.'
		]
	}
]

function DateSection(experience: Experience): ReactElement {
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

export default function ExperienceSection(): ReactElement {
	return (
		<Section title='Experience'>
			<>
				{experiences.map(experience => (
					<div className='mb-10 flex w-screen flex-col' key={experience.title}>
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
							className='mt-3 flex w-screen flex-col pl-5'
						>
							<ul className='list-disc'>
								{experience.description.map(desc => (
									<li className='md:text-baseline py-1 text-sm' key={desc}>
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
