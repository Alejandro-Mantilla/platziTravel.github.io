/** @type {import('tailwindcss').Config} */

module.exports = {
	purge: [
		'../**/*.html'
	],
	darkMode: 'class',
	content: ['./index.html'],
	theme: {
	  fontFamily: {
		Montserrat: ['Montserrat', 'sans-serif'],
	  },
	  textColor: {
		'primary': '#CC2D4A',
		'secondary': '#8FA206',
		'terciary': '#61AEC9',
		'white': '#FFFFFF',
		'black': '#000000'
	  },
	  backgroundColor: theme => ({
		...theme('colors'),
		'primary': '#CC2D4A',
		'secondary': '#8FA206',
		'terciary': '#61AEC9',
	  }),
	  extend: {
		backgroundImage: {
			'sanFrancisco': "url('./public/img/sanFrancisco.jpg')",
        	'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        	'yosemite': "url('../img/yosemite.jpg')",
        	'LA': "url('../img/LA.jpg')",
        	'seattle': "url('../img/seattle.jpg')",
        	'new_york': "url('../img/new_york.jpg')",
        	'norway': "url('../img/norway.jpg')",
        	'sydney': "url('../img/sydney.jpg')",
        	'miami': "url('../img/miami.jpg')",
        	'switzerland': "url('../img/switzerland.jpg')",
        	'bali': "url('../img/bali.jpg')",
        	/*'norway': "url('../img/norway.jpg')",*/
        	'chicago': "url('../img/chicago.jpg')",
        	'europe': "url('../img/europe.jpg')",
        	'iceland': "url('../img/iceland.jpg')",
		},
	  },
	},
	variants: {
		width: ["responsive", "hover", "focus"],
		extends: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
    	require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
  };