import type { ReactElement } from 'react'
import ExperienceSection from './sections/ExperienceSection'
import HeroSection from './sections/HeroSection'
import ContentSection from './sections/ProjectsSection'

export default function Content(): ReactElement {
	return (
		<div id='scrollspy-content' className='col-span-3 ml-0 md:ml-[10rem]'>
			<div id='scrollspy-2' className=' w-[800px] space-y-4'>
				<div id='item-1'>
					<HeroSection />
				</div>
				<div id='item-2'>
					<ExperienceSection />
				</div>
				<div id='item-3'>
					<ContentSection />
				</div>
				<div id='item-4'>
					<HeroSection />
				</div>
				<div id='item-5'>
					<HeroSection />
				</div>
			</div>
		</div>
	)
}
