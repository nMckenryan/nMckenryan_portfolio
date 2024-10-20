import type { ReactElement } from 'react'
import Content from './Content'
import ScrollerMenu from './ScrollerMenu'

export default function Scroller(): ReactElement {
	return (
		<div
			id='scrollspy-scrollable-parent-2'
			className='h-screen overflow-y-auto '
		>
			<div id='side-menu' className='grid grid-cols-5'>
				<ScrollerMenu />
				<Content />
			</div>
		</div>
	)
}
