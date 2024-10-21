import type { ReactElement } from 'react'

export default function Section({
	title,
	children,
	scrollId
}: {
	title: string
	children: ReactElement
	scrollId: string
}): ReactElement {
	return (
		<div
			className='items-left ml-2 flex h-1/2 w-full flex-col justify-center py-10 md:ml-40'
			id={scrollId}
		>
			<h1 className='mb-5 text-xl font-bold text-orange-400 md:text-4xl'>
				{title}
			</h1>
			{children}
		</div>
	)
}
