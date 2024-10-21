import type { ReactElement } from 'react'
import avatar from '../../../public/apple-touch-icon.png'

export default function HeroSection(): ReactElement {
	return (
		<div className='items-left flex h-screen w-full flex-col justify-center'>
			<div className='m-1 flex w-screen  md:hidden'>
				<img
					src={avatar}
					alt='avatar'
					className='size-20 rounded-full drop-shadow-lg'
				/>
			</div>
			<h1 className='text-3xl font-bold text-orange-400 md:text-6xl'>
				Nigel Mckenzie-Ryan
			</h1>
			<h2 className='py-2 text-xl md:text-3xl'>Prahran, Melbourne</h2>
			<p className='text-baseline w-screen md:text-xl'>
				Web Developer, Prop Builder, Actor and Tinkerer hailing from Auckland,
				New Zealand. Currently based in Melbourne, Victoria.
			</p>
		</div>
	)
}
