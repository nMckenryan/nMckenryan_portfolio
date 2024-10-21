import type { ReactElement } from 'react'
import avatar from '../../../public/apple-touch-icon.png'

export default function HeroSection(): ReactElement {
	return (
		<div className='items-left flex w-full flex-col justify-center'>
			<div className='ju m-1 flex w-screen md:hidden'>
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
				Web Developer, Prop Builder, Actor, Writer and Tinkerer hailing from
				Auckland, New Zealand.
			</p>
			<br />
			<p className='text-baseline w-screen italic md:text-xl'>
				I love learning and building new things, both physical and digital!
			</p>
		</div>
	)
}
