const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		fontFamily: {
			inter: ['Inter', ...defaultConfig.theme.fontFamily.serif],
			sans: ['Lato', ...defaultConfig.theme.fontFamily.sans],
			saira: ['Saira Extra Condensed', ...defaultConfig.theme.fontFamily.serif]
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
module.exports = config
