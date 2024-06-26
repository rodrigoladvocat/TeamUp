/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
    colors: {
      'primary': '#A28BFE',
      'text': '#FFFFFF',
      'white': '#FFFFFF',
      'black': '#000',
      'general-background': '#121212',
      'content-background': '#201F1F',
      'dark-zebra': '#383446',
      'light-zebra': '#3F3F3F',
      'purple-text': '#A28BFE',
    },
    fontSize: {
      '32': '2rem',
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
