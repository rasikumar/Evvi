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
      boxShadow : {
        f2 : 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
        what : 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
        custom: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;',
      },
      animation:{
        scroll: 'scroll 10s linear infinite' ,
        shake : 'shake 1s ease-in-out',
        spinslow: 'spin 5s linear infinite',
        spinreverse : 'reversespin 2.5s linear infinite',
      },
      keyframes:{
        scroll:{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        reversespin: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
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
