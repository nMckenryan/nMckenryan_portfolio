import Section from 'components/ui/Section'
import type { ReactElement } from 'react'
import avatar from '../../../public/apple-touch-icon.png'

export default function HeroSection(): ReactElement {
	return (
		<Section title='' scrollId='item-1'>
			<>
				<div className='m-1 flex w-full md:hidden'>
					<img
						src={avatar}
						alt='avatar'
						className='size-32 rounded-full drop-shadow-lg'
					/>
				</div>
				<h1 className='font-saira text-5xl font-bold text-orange-400 md:text-6xl'>
					Nigel Mckenzie-Ryan
				</h1>
				<h2 className='py-2 font-saira text-2xl text-slate-300 md:text-3xl'>
					Prahran, Melbourne
				</h2>
				<p className='md:text-baseline text-baseline leading-1.5 w-full py-1  text-slate-300'>
					Welcome to my site! I&apos;m a Web Developer, Prop Builder,
					Comedian/Writer and Tinkerer. I originally hailed from Auckland, New
					Zealand.
				</p>
				<br />
				<p className='md:text-baseline text-baseline leading-1.5 w-full py-1  italic text-slate-300'>
					I enjoy building new things and learning along the way!
				</p>
			</>
		</Section>
	)
}
