import type { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			{/* <Suspense fallback={<LoadingOrError />} /> */}
		</BrowserRouter>
	)
}
