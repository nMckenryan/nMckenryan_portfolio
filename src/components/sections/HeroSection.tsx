import type { ReactElement } from 'react'
import avatar from '../../../public/apple-touch-icon.png'

export default function HeroSection(): ReactElement {
	return (
		<div
			id='item-1'
			className='items-left ml-2 flex w-full flex-col justify-center md:ml-40 '
		>
			<div className='m-1 flex w-full md:hidden'>
				<img
					src={avatar}
					alt='avatar'
					className='size-20 rounded-full drop-shadow-lg'
				/>
			</div>
			<h1 className='font-mono text-3xl font-bold text-orange-400 md:text-6xl'>
				Nigel Mckenzie-Ryan
			</h1>
			<h2 className='py-2 text-xl md:text-3xl'>Prahran, Melbourne</h2>
			<p className='text-baseline w-full md:text-xl'>
				Web Developer, Prop Builder, Actor, Writer and Tinkerer hailing from
				Auckland, New Zealand.
			</p>
			<br />
			<p className='text-baseline w-full italic md:text-xl'>
				I love learning and building new things, both physical and digital!
			</p>
		</div>
	)
}
