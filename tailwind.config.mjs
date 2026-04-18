/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: '#050505',
				primary: '#a855f7',
				secondary: '#3b82f6',
			},
		},
	},
	plugins: [],
}
