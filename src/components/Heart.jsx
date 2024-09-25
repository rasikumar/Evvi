import About from "./About";
import Hero from "./Hero";
import Service from "./services/Service";
import Sliding from "./Sliding";
import Testimonials from "./Testimonial";
import Blog from "./features/blog/Blog";
import CF from "./contact & faq/CF";
import { Helmet } from "react-helmet-async";
// import Testing from "./components/Testing"

const Heart = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>
          Evvi Solutions | Your Partner for People & Digital Excellence
        </title>
        <meta
          name="description"
          content="Welcome to Evvi Solutions – your partner in People and Digital Excellence. We offer tailored Business Consulting, HR Services, Digital Marketing, and Web & Mobile App solutions."
        />
      </Helmet>
      <Hero />
      <Sliding />
      <About />
      <Testimonials />
      <Service />
      <Blog />
      <CF />
      {/* <Testing/> */}
      
    </div>
  );
};

export default Heart;
