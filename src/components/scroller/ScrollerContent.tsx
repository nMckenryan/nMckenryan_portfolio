import type { ReactElement } from 'react'
import EducationSection from '../sections/EducationSection'
import ExperienceSection from '../sections/ExperienceSection'
import HeroSection from '../sections/HeroSection'
import ContentSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'

export default function ScrollerContent(): ReactElement {
	return (
		<div id='scrollspy-content' className='col-span-3 ml-2 md:ml-[10rem]'>
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
					<SkillsSection />
				</div>
				<div id='item-5'>
					<EducationSection />
				</div>
			</div>
		</div>
	)
}
