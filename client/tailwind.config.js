/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
    colors: {
      'primary': '#A28BFE',
      'text': '#FFFFFF',
      'white': '#FFFFFF',
      'black': '#000',
      'general-background': '#121212',
      'content-background': '#201F1F',
      'teste': '#1A1A1A',
      'dark-zebra': '#383446',
      'light-zebra': '#3F3F3F',
      'purple-text': '#A28BFE',
      'negative': '#ff8484',
      'positive': '#92e3a9',
      'hover-bg': '#5c5283',
      'hover-text': '#d5a7ff',
      'green': '#7DDA58',
      'red': '#FF6B6B',
      'gray': '#414141',
      'gray-50': '#afa8bc',
      'gray-100': '#afa8bc',
      'gray-200': '#afa8bc',
      'gray-300': '#c1bbcc',
      'gray-400': '#afa8bc',
      'gray-500': '#a59cb5',
      'gray-600': '#7A6C8C',
      'gray-700': '#554b65',
      'gray-800': '#3a3444',
      'gray-900': '#1b1822',
      'gray-950': '#101012',
      'turquoise-blue-50': '#e7fafd',
      'turquoise-blue-100': '#cff5fc',
      'turquoise-blue-200': '#a0ebf8',
      'turquoise-blue-300': '#70e1f5',
      'turquoise-blue-400': '#41d7f1',
      'turquoise-blue-500': '#12ccee',
      'turquoise-blue-600': '#0ea4be',
      'turquoise-blue-700': '#0A7B8F',
      'turquoise-blue-800': '#07525f',
      'turquoise-blue-900': '#032930',
      'turquoise-blue-950': '#afa8bc',
      'purple-50': '#f3effb',
      'purple-100': '#e7def7',
      'purple-200': '#CEBEEF',
      'purple-300': '#b9a1e7',
      'purple-400': '#a081df',
      'purple-500': '#8961D7',
      'purple-600': '#6432c7',
      'purple-700': '#4c2697',
      'purple-800': '#311962',
      'purple-900': '#0c0618',
      'purple-950': '#0c0618',
      'red-50': '#feecef',
      'red-100': '#fdd8e0',
      'red-200': '#fbadbc',
      'red-300': '#f8869d',
      'red-400': '#f65f7e',
      'red-500': '#f4355c',
      'red-600': '#e30c37',
      'red-700': '#A90929',
      'red-800': '#6f061b',
      'red-900': '#3a030e',
      'red-950': '#1d0207',
      'green-50': '#eafaf3',
      'green-100': '#d5f6e8',
      'green-200': '#abedd0',
      'green-300': '#81e4b9',
      'green-400': '#53d99f',
      'green-500': '#2dce89',
      'green-600': '#24a36c',
      'green-700': '#1B7E53',
      'green-800': '#125437',
      'green-900': '#092a1c',
      'green-950': '#3a3444',
      'orange-50': '#feefeb',
      'orange-100': '#feded7',
      'orange-200': '#fdbeaf',
      'orange-300': '#fca18d',
      'orange-400': '#fb8065',
      'orange-500': '#fa623e',
      'orange-600': '#f43206',
      'orange-700': '#b82605',
      'orange-800': '#771803',
      'orange-900': '#3c0c02',
      'orange-950': '#1e0601',
      'yellow-50': '#fffcf0',
      'yellow-100': '#fff9e1',
      'yellow-200': '#fef2c3',
      'yellow-300': '#feeca4',
      'yellow-400': '#fde686',
      'yellow-500': '#fddf69',
      'yellow-600': '#fcd022',
      'yellow-700': '#d3aa03',
      'yellow-800': '#8D7102',
      'yellow-900': '#463901',
      'yellow-950': '#231c00',
      'blue-50': '#e7f0fe',
      'blue-100': '#cee0fd',
      'blue-200': '#99befa',
      'blue-300': '#689ff8',
      'blue-400': '#327df5',
      'blue-500': '#0b60ea',
      'blue-600': '#094cb9',
      'blue-700': '#073A8D',
      'blue-800': '#04265d',
      'blue-900': '#021431',
      'blue-950': '#010a18',
    },
    fontSize: {
      '32': '2rem',
      '30': '1.875rem',
      '28': '1.75rem',
      '20': '1.25rem',
      '16': '1rem',
      '14': '0.875rem',
      '12': '0.75rem',
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animate")],
}
