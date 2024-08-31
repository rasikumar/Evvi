import About from "./About"
import Hero from "./Hero"
import Service from "./services/Service"
import Sliding from "./Sliding"
import Testimonials from "./Testimonial"
import Blog from "./features/blog/Blog"
import CF from './contact & faq/CF'
// import Testing from "./components/Testing"


const Heart = () => {
  return (
    <div className="overflow-hidden">
        
        <Hero/>
        <Sliding/>
        <About/>
        <Testimonials/>
        <Service/>
        <Blog/>
        <CF/>
        {/* <Testing/> */}
    </div>
  )
}

export default Heart
