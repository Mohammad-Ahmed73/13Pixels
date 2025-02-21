const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#090E10',
			white: '#ffffff',
			mint: '#00B67A',
			green: '#00A886',
			dark: '#0E0A20',
			gray: {
				DEFAULT: '#152023', // used
				100: '#F2F2F2', // used
				200: '#E4E5E5', // used
				300: '#C6C7C7', // used
				400: '#A2A3A4', // used
				500: '#747676', // used
				600: '#152023', // used
				// 700: '#131D1F',
				// 800: '#10191B',
				// 900: '#0D1416',
				1000: '#090E10', // used
			},
			green: {
				DEFAULT: '#00A886', // used
				// 100: '#F3F8F2',
				// 200: '#E6F0E5',
				// 300: '#C9E1C8',
				// 400: '#A7D0A6',
				// 500: '#7DBE7B',
				600: '#3AAA35', // used
				// 700: '#34982F',
				// 800: '#2D8429',
				// 900: '#256C22',
				// 1000: '#1A4C18',
			},
			blue: {
				DEFAULT: '#0E0A20',
				800: '#0E0A20CC',
			},
		},
		fontSize: {
			xs: '0.75rem', // 12
			sm: '0.875rem', // 14
			base: '1rem', // 16
			md: '1.125rem', // 18
			lg: '1.25rem', // 20
			xl: '1.375rem', // 22
			'2xl': '1.5rem', // 24
			'3xl': '2rem', // 32
			'4xl': '2.5rem', // 40
			'5xl': '3rem', // 48
			'6xl': '3.5rem', // 56
			'7xl': '4rem', // 64
		},
		fontFamily: {
			sans: ['Plus Jakarta Sans', 'sans-serif'],
		},
		fontWeight: {
			light: '300',
			normal: '400',
			medium: '500',
			bold: '700',
		},
		screens: {
			xs: '375px',
			...defaultTheme.screens,
			'3xl': '1600px',
			'4xl': '1920px',
		},

		extend: {
			colors: {
				brands: {
					facebook: '#1877f2',
					twitter: '#1da1f2',
					x: '#14171a',
					instagram: '#405de6',
					linkedin: '#0a66c2',
					youtube: '#ff0000',
					vimeo: '#1ab7ea',
					pinterest: '#e60023',
					tiktok: '#ff0050',
				},
			},
			backgroundImage: {
				check: "url('/dist/images/check.svg')",
				greenRadialGradient: 'radial-gradient(121.18% 95% at 4.71% 75.52%, rgba(0, 168, 134, 0.2) 0%, rgba(0, 168, 134, 0.012) 100%)',
			},
			borderRadius: {
				'30': '30px',
				'60': '60px',
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
	safelist: [],
	content: ['./templates/**/*.{twig,html,js}', './src/**/*.{css,js}'],
};
