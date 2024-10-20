import type { ReactElement } from 'react'

export default function Sidebar(): ReactElement {
	const tabs = [
		{ content: 'About', href: 'about' },
		{ content: 'Experience', href: 'experience' },
		{ content: 'Education', href: 'education' },
		{ content: 'Projects', href: 'projects' },
		{ content: 'Skills', href: 'skills' },
		{ content: 'Interests', href: 'interests' }
	]

	return (
		<div className='col-span-2'>
			<h2 className='text-xl font-medium dark:text-white'>Navbar</h2>

			<ul
				className='sticky top-0'
				data-hs-scrollspy='#scrollspy-2'
				data-hs-scrollspy-scrollable-parent='#scrollspy-scrollable-parent-2'
			>
				{tabs.map(item => (
					<li key={item.href} data-hs-scrollspy-group=''>
						<a href='#item-1' className='text-2xl font-bold'>
							{item.content}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
