import type { ReactElement } from 'react'

export default function HeroSection(): ReactElement {
	return (
		<div className='items-left flex h-screen w-full flex-col justify-center'>
			<h1 className='text-6xl font-bold'>Nigel Mckenzie-Ryan</h1>
			<h2 className='text-3xl'>
				Melbourne, Victoria -{' '}
				<a href='mailto:n.Mckenryan@gmail.com' className='text-3xl underline'>
					{' '}
					n.Mckenryan@gmail.com
				</a>{' '}
			</h2>
			<p className='text-baseline w-50'>
				Web Developer, Prop Builder and Tinkerer hailing from Auckland, New
				Zealand. Currently based in Melbourne, Victoria.
			</p>
		</div>
	)
}
