import type { ReactElement } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
	FaGithub,
	FaInfoCircle,
	FaLightbulb,
	FaLinkedin,
	FaUniversity
} from 'react-icons/fa'
import { FaScrewdriverWrench, FaSuitcase } from 'react-icons/fa6'
import avatar from '../../../public/apple-touch-icon.png'

const tabs = [
	{
		content: 'About',
		href: '#item-1',
		logo: <FaInfoCircle className='text-orange-300' />
	},
	{
		content: 'Experience',
		href: '#item-2',
		logo: <FaSuitcase className='text-orange-300' />
	},
	{
		content: 'Projects',
		href: '#item-3',
		logo: <FaScrewdriverWrench className='text-orange-300' />
	},
	{
		content: 'Skills',
		href: '#item-4',
		logo: <FaLightbulb className='text-orange-300' />
	},
	{
		content: 'Education',
		href: '#item-5',
		logo: <FaUniversity className='text-orange-300' />
	}
]

function onLinkedinClick(): void {
	window.open('https://www.linkedin.com/in/nmckenryan', '_blank')
}
function onGithubClick(): void {
	window.open('https://github.com/nMckenryan', '_blank')
}

export default function ScrollerMenu(): ReactElement {
	return (
		<div
			id='scrollspy-menu'
			className='fixed col-span-2 hidden h-screen items-center justify-center bg-slate-700 md:flex'
		>
			<div className='my-auto flex flex-col items-center'>
				<img
					className='m-4 mx-auto size-32 rounded-full p-1 drop-shadow-lg'
					src={avatar}
					alt='avatar'
				/>
				{/* SCROLL MENU */}
				<ul
					className='sticky top-0 my-5 text-center'
					data-hs-scrollspy='#scrollspy-2'
					data-hs-scrollspy-scrollable-parent='#scrollspy-scrollable-parent-2'
				>
					{tabs.map(item => (
						<li data-hs-scrollspy-group='' key={item.href}>
							<a
								href={item.href}
								className='hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-500 active block flex flex-row items-center justify-center gap-1 py-0.5 text-sm font-medium leading-6 text-gray-700 hover:text-gray-900 focus:text-blue-600 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-blue-500'
							>
								{item.logo} {item.content}
							</a>
						</li>
					))}
				</ul>
				<div className='flex flex-row gap-3'>
					<FaLinkedin
						size={32}
						onClick={onLinkedinClick}
						className='cursor-pointer text-orange-300'
					/>

					<FaGithub
						size={32}
						onClick={onGithubClick}
						className='cursor-pointer text-orange-300'
					/>
				</div>
			</div>
		</div>
	)
}
