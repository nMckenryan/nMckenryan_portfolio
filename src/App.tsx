import ScrollerContent from 'components/scroller/ScrollerContent'
import ScrollerMenu from 'components/scroller/ScrollerMenu'
import LoadingOrError from 'components/ui/LoadingOrError'
import { Suspense, type ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />} />
			<div
				id='scrollspy-scrollable-parent-2'
				className='h-screen overflow-y-auto '
			>
				<div id='side-menu' className='grid grid-cols-5'>
					<ScrollerMenu />
					<ScrollerContent />
				</div>
			</div>
		</BrowserRouter>
	)
}
