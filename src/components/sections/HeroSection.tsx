import type { ReactElement } from 'react'

export default function HeroSection(): ReactElement {
	return (
		<div className='items-left flex h-screen w-full flex-col justify-center'>
			<h1 className='text-6xl font-bold text-orange-400'>
				Nigel Mckenzie-Ryan
			</h1>
			<h2 className=' py-2 text-3xl'>Prahran, Melbourne</h2>
			<p className='text-xl'>
				Web Developer, Prop Builder and Tinkerer hailing from Auckland, New
				Zealand. <br /> Currently based in Melbourne, Victoria.
			</p>
		</div>
	)
}
