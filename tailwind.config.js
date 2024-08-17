// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      animation:{
        scroll: 'scroll 10s linear infinite' ,
        shake : 'shake 1s ease-in-out'
      },
      keyframes:{
        scroll:{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shake:{
          '0% 100' : { transform : 'translateX(0)' },
          '25%' : { transform : 'translateX(-5px)' },
          '50%' : { transform : 'translateX(5px)' },
          '75%' : { transform : 'translateX(-5px)' },
        },
      },
      screens:{
        'mobile' : '480px',
        'tablet' : '801px',
        'laptop' : '1100px',
        'desktop' : '1500px',
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
      },
      backgroundImage:{
        'footerImage' : "url('/src/assets/footer.jpg')",
        'heroImage' : "url('/src/assets/Hr_why.png')",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
