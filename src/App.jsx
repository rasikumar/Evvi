import Header from "./components/Header"
import About from "./components/About"
import Hero from "./components/Hero"
import Service from "./components/services/Service"
import Sliding from "./components/Sliding"
import Testimonials from "./components/Testimonial"
import Blog from "./components/blogs/Blog"
import CF from './components/contact & faq/CF'
import SideIcons from "./components/SideIcons"
import Footer from "./components/footer/Footer"
// import Testing from "./components/Testing"


import { createTheme, ThemeProvider  } from "@mui/material"
import FloatingIcon from "./components/FloatingIcon"

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
        <SideIcons/>
        <FloatingIcon/>
        <Hero/>
        <Sliding/>
        <About/>
        <Testimonials/>
        <Service/>
        <Blog/>
        <CF/>
        <Footer/>
        {/* <Testing/> */}
     </ThemeProvider>
    </>
  )
}

export default App
