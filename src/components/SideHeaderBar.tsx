import { useRef, type ReactElement } from 'react'

import avatar from '../../public/apple-touch-icon.png'
import HeroSection from './Section'

export default function Sidebar(): ReactElement {
	const tabs = [
		{ content: 'About', href: 'about' },
		{ content: 'Experience', href: 'experience' },
		{ content: 'Education', href: 'education' },
		{ content: 'Projects', href: 'projects' },
		{ content: 'Skills', href: 'skills' },
		{ content: 'Interests', href: 'interests' }
	]

	const sectionReferences = [
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null)
	]
	return (
		<div
			id='sidebar'
			className='h-screen flex-row items-center justify-center '
		>
			<div
				data-cy='nav-wrapper'
				className='md:position-fixed fixed hidden h-full w-1/6  list-none flex-col items-center justify-center bg-blue-900 md:flex'
			>
				<div>
					<img
						className='mx-auto mb-2 size-32 rounded-full drop-shadow-lg'
						src={avatar}
						alt='avatar'
					/>
				</div>
				<ul>
					{tabs.map((item, index) => (
						<li key={item.href}>
							<a href={`#section-${index}`} className='text-2xl font-bold'>
								{item.content}
							</a>
						</li>
					))}
				</ul>
			</div>
			{/* RIGHT SIDE SECTION */}
			<div data-cy='section-wrapper' className='flex flex-col'>
				<HeroSection />
				{tabs.map((_, index) => (
					<div
						id={`section-${index}`}
						key='key'
						ref={sectionReferences[index]}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '500px',
							backgroundColor: `#${index}${index}${index}`,
							color: '#fff',
							fontSize: '2rem'
						}}
					>
						{index}
					</div>
				))}
			</div>
		</div>
	)
}
