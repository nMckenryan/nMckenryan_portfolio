import ExperienceSection from 'components/sections/ExperienceSection'
import HeroSection from 'components/sections/HeroSection'
import LoadingOrError from 'components/ui/LoadingOrError'
import { Suspense, type ReactElement } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { BrowserRouter } from 'react-router-dom'
import avatar from '../public/apple-touch-icon.png'

function onLinkedinClick(): void {
	window.open('https://www.linkedin.com/in/nmckenryan', '_blank')
}
function onGithubClick(): void {
	window.open('https://github.com/nMckenryan', '_blank')
}
export default function App(): ReactElement {
	const tabs = [
		{ content: 'About', href: '#item-1' },
		{ content: 'Experience', href: '#item-2' },
		{ content: 'Projects', href: '#item-3' },
		{ content: 'Skills', href: '#item-4' },
		{ content: 'Education', href: '#item-5' }
	]

	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />} />

			<div
				id='scrollspy-scrollable-parent-2'
				className='h-screen overflow-y-auto'
			>
				<div id='side-menu' className='grid grid-cols-5'>
					<div
						id='scrollspy-menu'
						className='fixed col-span-2 h-screen items-center justify-center bg-slate-700'
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
											className='hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-500 active block py-0.5 text-sm font-medium leading-6 text-gray-700 hover:text-gray-900 focus:text-blue-600 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-blue-500'
										>
											{item.content}
										</a>
									</li>
								))}
							</ul>
							<div className='flex flex-row gap-3'>
								<FaLinkedin
									size={32}
									onClick={onLinkedinClick}
									className='cursor-pointer'
								/>

								<FaGithub
									size={32}
									onClick={onGithubClick}
									className='cursor-pointer'
								/>
							</div>
						</div>
					</div>

					{/* CONTENT */}
					<div id='scrollspy-content' className='col-span-3 ml-[10rem]'>
						<div id='scrollspy-2' className='h-screen w-[800px] space-y-4'>
							<div id='item-1' className='h-screen'>
								<HeroSection />
							</div>
							<div id='item-2' className='h-screen'>
								<ExperienceSection />
							</div>
							<div id='item-3' className='h-screen'>
								<HeroSection />
							</div>
							<div id='item-4' className='h-screen'>
								<HeroSection />
							</div>
							<div id='item-5' className='h-screen'>
								<HeroSection />
							</div>
						</div>
					</div>
				</div>
			</div>
		</BrowserRouter>
	)
}
