import { codingImage, digitalImage } from "../assets"
import { AboutUs } from "../constant"

// import { BsFillPersonCheckFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="flex items-center max-tablet:flex-col gap-20 w-full p-14 max-tablet:p-5 max-tablet:gap-10">
      <div className="relative w-[50%] max-tablet:w-full">
        <div className="w-36 h-36 bg-t-secondary blur-[100px] absolute top-0 -z-10"></div>
        <div className="relative">
          <img src={codingImage}  alt="" className="w-[70%] rounded-3xl max-tablet:w-full" />
          <img src={digitalImage} alt="" className="absolute top-12 left-44 w-[70%] rounded-3xl max-tablet:hidden" />
        </div>
      </div>
      <div className="relative w-[50%] max-tablet:w-full">
        {AboutUs.map(about => (
          <div key={about.id} className="flex flex-col gap-6">
              <p className="text-t-primary font-semibold">{about.heading}</p>
              <h1 className="text-4xl max-tablet:text-3xl max-mobile:text-2xl font-semibold">{about.title}</h1>
              <p className="line-clamp-5 font-medium">{about.description}</p>
              <ul>
                {about.lists.map(list => (
                  <li key={list.id} className="flex items-center mb-2"><img src={list.icon} width={list.width} alt={list.icon} className="mr-2" />{list.content}</li>
                ))}
              </ul>
              <a href={about.url} className="btn-primary w-[25%] max-tablet:w-full" >{about.btn}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About

    