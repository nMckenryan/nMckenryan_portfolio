import { useRef, type ReactElement } from 'react'

import { Scrollspy } from '@makotot/ghostui'
import avatar from '../../public/apple-touch-icon.png'

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
		<Scrollspy sectionRefs={sectionReferences}>
			{({ currentElementIndexInViewport }) => (
				// LEFT HAND BAR
				<div
					id='sidebar'
					className='h-screen flex-row items-center justify-center '
				>
					<ul
						data-cy='nav-wrapper'
						className='md:position-fixed fixed hidden h-full  w-1/6 list-none flex-col items-center justify-center bg-blue-900 md:flex'
					>
						<div>
							<img
								className='mx-auto mb-2 size-32 rounded-full drop-shadow-lg'
								src={avatar}
								alt='avatar'
							/>
						</div>
						{tabs.map((item, index) => (
							<li
								key={item.href}
								className={
									currentElementIndexInViewport === index ? 'active' : ''
								}
							>
								<a
									href={`#section-${index}`}
									className={`text-2xl font-bold ${
										currentElementIndexInViewport === index
											? 'text-white'
											: 'text-gray-400'
									}`}
								>
									{item.content}
								</a>
							</li>
						))}
					</ul>
					{/* RIGHT SIDE SECTION */}
					<div data-cy='section-wrapper' className='flex flex-col'>
						{tabs.map((_, index) => (
							<div
								id={`section-${index}`}
								key='key'
								ref={sectionReferences[index]}
								className={
									currentElementIndexInViewport === index ? 'active' : ''
								}
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
			)}
		</Scrollspy>
	)
}
