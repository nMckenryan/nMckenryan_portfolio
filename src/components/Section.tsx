import type { ReactElement } from 'react'

export default function Section({
	title,
	children
}: {
	title: string
	children: ReactElement
}): ReactElement {
	return (
		<div className='items-left flex h-screen w-full flex-col justify-center'>
			<h1 className='text-6xl font-bold'>{title}</h1>
			{children}
		</div>
	)
}
