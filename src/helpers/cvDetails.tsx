import type { Education, Experience, Project } from './helper'

export const educations: Education[] = [
	{
		certificationName: 'Graduate Certificate of Computer Science',
		institution: 'Auckland University of Technology',
		startDate: new Date('2017, 1, 1'),
		endDate: new Date('2018, 12, 1')
	},
	{
		certificationName: 'Bachelor of Communications',
		institution: 'Auckland University of Technology',
		startDate: new Date('2012, 1, 1'),
		endDate: new Date('2014, 12, 1')
	}
]

export const experiences: Experience[] = [
	{
		title: 'Web Developer (React/C#/Flutter/MSSQL)',
		company: 'Camp Australia',
		location: 'Melbourne, Victoria',
		startDate: new Date('2022-03-01'),
		endDate: new Date('2024-06-01'),
		description: [
			'Building new Web-based and Mobile Frontend Solutions via C#, Flutter and ReactJS.',
			'Updating the Backend of Customer Facing Sites using Strapi, SQL and Azure.',
			'Communicating with Business Analysts to deliver ideal Code Solutions',
			'Collaborating with the Testing to help deliver high quality code.',
			'Working with Marketing and Customer Support to resolve software bugs and implement Quality of Life Improvements.'
		]
	},
	{
		title: 'Junior Web Developer (Wordpress/Vue.JS)',
		company: 'WEC Administration',
		location: 'Melbourne, Victoria',
		startDate: new Date('2021-04-01'),
		endDate: new Date('2022-06-01'),
		description: [
			'Maintaining and updating the websites of WEC’s Brands',
			'Co-ordinating with WEC Stakeholders to scope project requirements',
			'Building Frontend Solutions through Wordpress with Vue.JS and Tailwind.',
			'Resolving compliance errors and fixing software bugs'
		]
	},
	{
		title: 'Information Technology Officer (SQL)',
		company: 'Ecotricity NZ',
		location: 'Auckland, New Zealand',
		startDate: new Date('2019-08-01'),
		endDate: new Date('2020-10-01'),
		description: [
			'Managing monthly invoicing',
			'Resolving invoicing and system errors',
			'Ordering IT equipment and maintaining workstations',
			'Maintaining Ecotricity’s data servers',
			'Improving efficiency for the Customer Service Team',
			'Advising the Metering, Customer Service, Sales and Reporting Teams',
			'Co-ordinating with the external support team to resolve technical issues'
		]
	},
	{
		title: 'Disputes Resolution Manager',
		company: 'Ecotricity NZ',
		location: 'Auckland, New Zealand',
		startDate: new Date('2019-02-01'),
		endDate: new Date('2019-08-01'),
		description: [
			'Co-ordinating with Utilities Disputes',
			'Responding to client complaints and reaching resolutions with customers.',
			'Advising Colleagues as to how to effectively resolve issues',
			'Relaying Feedback to change makers in Ecotricity.',
			'Ensuring Ecotricity remains in accordance to Electricity Authority Regulations.'
		]
	}
]

export const projects: Project[] = [
	{
		title: 'Pokemon Unbound Web Scraper and API',
		client: 'Pokemon Unbound Community',
		description: [
			'Developed a robust web scraper in Python to extract data from the Pokemon Unbound (A popular fan-made game development project)',
			'Extracted data from multiple websites, spreadsheets and APIs to make data more easily available to community developers',
			'Engineered a RESTful API using FastAPI, converting complex Pokedex data into a structured JSON',
			'Packed the web scraper and API into a Docker image',
			'Deployed the containerized application on Google Cloud Platform, ensuring high availability and scalability of the API endpoints'
		],
		technologies: ['Python', 'FastAPI', 'Docker', 'Google Cloud Platform'],
		link: 'https://borrius-pokedex-scraper.onrender.com/docs'
	},
	{
		title: 'Five Things - Social Media Notes App',
		client: '',
		description: [
			'Built Five Things, a bullet point list review social media Web Application',
			'Built UI components with ReactJS, Material UI and Typescript',
			'Compiled the backend systems with NextJS, Drizzle and Postgres. Hosted the site via Vercel',
			'Implemented Authentication with Clerk, Error Detection with Sentry and Analytics with Posthog'
		],
		technologies: [
			'ReactJS',
			'Material UI',
			'NextJS',
			'Postgres',
			'Drizzle',
			'Clerk',
			'Sentry',
			'Posthog',
			'Typescript',
			'Vercel'
		],
		link: 'https://five-things.vercel.app/'
	},
	{
		title: 'Public Website Revamp',
		client: 'Camp Australia ',
		description: [
			'Assisted with development of Camp Australia’s Public Website',
			'Built UI components with ReactJS and Material UI',
			'Compiled backend operations via the Strapi CMS, SQL Server and Javascript',
			'Composed documentation to help developers and users best use the system'
		],
		technologies: [
			'ReactJS',
			'Material UI',
			'Strapi',
			'SQL Server',
			'Javascript',
			'Typescript'
		],
		link: ''
	},
	{
		title: 'Link Hub Application',
		client: 'WEC Administration',
		description: [
			'Designed and developed a Linktree clone for WEC Administration’s Promotions',
			'Worked with Stakeholders in WEC to iron out the interface and functionality.',
			'Connected and implemented the Airtable Database so staff could easily update the page.',
			'Built the User Interface with Vue.Js and Tailwind and implemented it into Wordpress.',
			'Revamped a version of this project in 2024, Upgraded to the Vite Compiler and modernised features'
		],
		technologies: ['Vue.Js', 'Tailwind', 'Airtable', 'Wordpress'],
		link: 'https://five-things.linktree.app'
	},
	{
		title: 'Portfolio (This Website!)',
		client: '',
		description: [
			'Revamped my portfolio from the ground up, based on my previous, Gatsby based resume site',
			'Built the baseline of the website with Vitamin, a opinionated Vite based template, using ReactJS',
			'Ensured Mobile Responsiveness with TailwindCSS and ReactJS',
			'Utilised Husky, Stylelint, ESLint and Prettier to ensure better code quality and security',
			'Deployed website to Github Pages and implemented simple CI/CD pipeline'
		],
		technologies: ['ReactJS', 'Tailwind', 'Vite'],
		link: ''
	}
]
