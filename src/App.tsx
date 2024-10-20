import Scroller from 'components/Scroller'
import LoadingOrError from 'components/ui/LoadingOrError'
import { Suspense, type ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />} />

			<Scroller />
		</BrowserRouter>
	)
}
