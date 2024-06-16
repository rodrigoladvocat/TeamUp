/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
    colors: {
      'primary': '#A28BFE',
      'text': '#FFFFFF',
      'general-background': '#121212',
      'content-background': '#201F1F',
      'dark-zebra': '#383446',
      'purple-text': '#A28BFE',
    },
    fontSize: {
      '32': '2rem',
      '28': '1.75rem',
      '20': '1.25rem',
      '16': '1rem',
      '14': '0.875rem',
      '12': '0.75rem',
    }
  },
  plugins: [],
}

