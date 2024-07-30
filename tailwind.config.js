/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        scroll: 'scroll 10s linear infinite' 
      },
      keyframes:{
        scroll:{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      screens:{
        'mobile' : '480px',
        'tablet' : '801px',
        'laptop' : '1025px',
        'desktop' : '1281px',
      },
      colors:{
        'b-primary' : '#F2F2F2',
        'white' : '#fafafa',
        't-primary' : '#0b1a5f',
        't-secondary' : '#F67629',
        'btn' : '#E7DEAB',
        'glass' : 'rgba( 255, 255, 255, 0 )',

        // t - Text, 
        // b - Background
      }
    },
  },
  plugins: [],
}
