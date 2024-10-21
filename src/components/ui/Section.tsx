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
			className='items-left 2xl:w-5/5 ml-2 flex h-1/2 w-full flex-col justify-center px-10 md:ml-40 md:w-full xl:w-3/4'
			id={scrollId}
		>
			<h1 className='mb-1 py-0 font-saira text-3xl font-bold text-orange-400 md:py-5 md:text-4xl'>
				{title}
			</h1>

			{children}
		</div>
	)
}
