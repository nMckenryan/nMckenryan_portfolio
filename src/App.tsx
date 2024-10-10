import LoadingOrError from 'components/LoadingOrError'
import Sidebar from 'components/SideHeaderBar'
import { Suspense, type ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />} />
			<Sidebar />
		</BrowserRouter>
	)
}
