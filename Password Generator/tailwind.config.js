/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // Adding my custom colors here
        'custom-blue':'#007cf0',
        'custom-pink':'#00dfd8',
      },
      width:{
        'input-width':'600px',
      },
      height:{
        'input-height':'45px',
      },
      spacing:{
        '400':'400px',
      }
    },
  },
  plugins: [],
}

