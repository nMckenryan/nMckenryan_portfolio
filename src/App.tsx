import LoadingOrError from 'components/LoadingOrError'
import { Suspense, type ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import avatar from '../public/apple-touch-icon.png'

export default function App(): ReactElement {
	const tabs = [
		{ content: 'About', href: '#item-1' },
		{ content: 'Experience', href: '#item-2' },
		{ content: 'Projects', href: '#item-3' },
		{ content: 'Skills', href: '#item-4' },
		{ content: 'Education', href: '#item-5' },
		{ content: 'Interests', href: '#item-6' }
	]

	const MAX_ITEMS = 6
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const test = Array.from({ length: MAX_ITEMS }, (_, index) => index + 1)

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
						<img
							className='mx-auto mb-2 size-32 rounded-full drop-shadow-lg'
							src={avatar}
							alt='avatar'
						/>

						<ul
							className='sticky top-0'
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
					</div>

					<div id='scrollspy-content' className='col-span-3 ml-[10rem]'>
						<div id='scrollspy-2' className='h-screen space-y-4'>
							{test.map(item => (
								<div id={`item-${item}`} key={item} className='h-screen'>
									<h3 className='text-lg font-semibold dark:text-white'>
										{item}
									</h3>
									<p className='mt-1 text-sm leading-6 text-gray-600 dark:text-neutral-400'>
										This is some placeholder content for the scrollspy page.
										Note that as you scroll down the page, the appropriate
										navigation link is highlighted. Its repeated throughout the
										component example. We keep adding some more example copy
										here to emphasize the scrolling and highlighting.
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* <div
				id='scrollspy-scrollable-parent-2'
				className='max-h-screen overflow-y-auto'
			>
				<div id='scrollspy-container' className=' grid grid-cols-5'>
					<div
						id='scrollspy-menu'
						className='flex max-h-screen flex-col items-center justify-center'
					>
						<div>
							<img
								className='mx-auto mb-2 size-32 rounded-full drop-shadow-lg'
								src={avatar}
								alt='avatar'
							/>
						</div>
						<ul
							className='sticky top-0'
							data-hs-scrollspy='#scrollspy-2'
							data-hs-scrollspy-scrollable-parent='#scrollspy-scrollable-parent-2'
						>
							{tabs.map(item => (
								<li key={item.href} data-hs-scrollspy-group=''>
									<a href={item.href} className='text-2xl font-bold'>
										{item.content}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div id='scrollspy-content' className='col-span-3'>
						<div id='scrollspy-2' className='space-y-4'>
							<div id='item-1'>
								<HeroSection />
							</div>

							<div id='item-2'>
								<Section title='Experience'>
									<p className='mt-1 text-sm leading-6 text-gray-600 dark:text-neutral-400'>
										This is some placeholder content for the scrollspy page.
										Note that as you scroll down the page, the appropriate
										navigation link is highlighted. Its repeated throughout the
										component example. We keep adding some more example copy
										here to emphasize the scrolling and highlighting.
									</p>
								</Section>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</BrowserRouter>
	)
}
