import type { ReactElement } from 'react'
import EducationSection from '../sections/EducationSection'
import ExperienceSection from '../sections/ExperienceSection'
import HeroSection from '../sections/HeroSection'
import ContentSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'

export default function ScrollerContent(): ReactElement {
	return (
		<div className='col-span-3'>
			<div className='w-screen space-y-4 md:w-full'>
				<HeroSection />

				<ExperienceSection />

				<ContentSection />

				<SkillsSection />

				<EducationSection />
			</div>
		</div>
	)
}
