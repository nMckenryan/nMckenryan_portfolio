import type { ReactElement } from 'react'
import ExperienceSection from './sections/ExperienceSection'
import HeroSection from './sections/HeroSection'
import ContentSection from './sections/ProjectsSection'

export default function Content(): ReactElement {
	return (
		<div id='scrollspy-content' className='col-span-3 ml-[10rem]'>
			<div id='scrollspy-2' className='h-screen w-[800px] space-y-4'>
				<div id='item-1' className='h-screen'>
					<HeroSection />
				</div>
				<div id='item-2' className='h-screen'>
					<ExperienceSection />
				</div>
				<div id='item-3' className='h-screen'>
					<ContentSection />
				</div>
				<div id='item-4' className='h-screen'>
					<HeroSection />
				</div>
				<div id='item-5' className='h-screen'>
					<HeroSection />
				</div>
			</div>
		</div>
	)
}
