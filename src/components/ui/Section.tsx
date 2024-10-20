import type { ReactElement } from 'react'

export default function Section({
	title,
	children
}: {
	title: string
	children: ReactElement
}): ReactElement {
	return (
		<div className='items-left flex h-1/2 w-full flex-col justify-center'>
			<h1 className='mb-5 text-6xl font-bold text-orange-400'>{title}</h1>

			{children}
		</div>
	)
}
