import About from "./About"
import Hero from "./Hero"
import Service from "./services/Service"
import Sliding from "./Sliding"
import Testimonials from "./Testimonial"
import Blog from "./features/blog/Blog"
import CF from './contact & faq/CF'
import SideIcons from "./SideIcons"
// import Testing from "./components/Testing"
import FloatingIcon from "./FloatingIcon"


const Heart = () => {
  return (
    <>
        <SideIcons/>
        <FloatingIcon/>
        <Hero/>
        <Sliding/>
        <About/>
        <Testimonials/>
        <Service/>
        <Blog/>
        <CF/>
        {/* <Testing/> */}
    </>
  )
}

export default Heart
