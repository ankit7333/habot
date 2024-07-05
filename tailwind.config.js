/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:'Poppins, sans-serif'
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeInDelay1: 'fadeIn 1s ease-out 0.2s forwards',
        fadeInDelay2: 'fadeIn 1s ease-out 0.4s forwards',
        fadeInDelay3: 'fadeIn 1s ease-out 0.6s forwards',
        fadeInDelay4: 'fadeIn 1s ease-out 0.8s forwards',
        fadeInDelay5: 'fadeIn 1s ease-out 1s forwards',
        fadeInDelay6: 'fadeIn 1s ease-out 1.2s forwards',
        // Add more delay classes as needed
      },
    },
  },
  plugins: [],
}

