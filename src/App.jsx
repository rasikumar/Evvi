import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Service from "./components/services/Service"
import Sliding from "./components/Sliding"
import Testimonials from "./components/Testimonial"
import Blog from "./components/blogs/Blog"
import CF from './components/contact & faq/CF'
import Footer from "./components/footer/Footer"


import { createTheme, ThemeProvider  } from "@mui/material"

const theme = createTheme ({
  palette: {
    primary: {
      main : '#0b1a5f'
    },
    secondary : {
      main : '#F67629'
    }
  },
  typography: {
    fontWeight : 600,
  }
})

const App = () => {


  return (
    <>
     <ThemeProvider theme={theme}>
        <Header/>
        <Hero/>
        <Sliding/>
        <About/>
        <Testimonials/>
        <Service/>
        <Blog/>
        <CF/>
        <Footer/>
     </ThemeProvider>
    </>
  )
}

export default App
