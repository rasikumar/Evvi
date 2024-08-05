import { codingImage, digitalImage } from "../assets"
import { Testimonials } from "../constant"
import TestSlider from "./TestSlider"
import { FcGoogle } from "react-icons/fc";
import { FaRegFaceGrinBeam } from "react-icons/fa6";

const Testimonial = () => {
  const {title, heading} = Testimonials[0]
  return (
    <div className="flex items-end max-tablet:flex-col gap-4 w-full p-14 max-tablet:p-5 max-tablet:gap-10 max-mobile:gap-5">
      <div className="flex flex-col w-[55%] max-tablet:w-full gap-12">
            <div className="flex flex-col gap-6">
              <h3 className="text-t-primary font-semibold">{heading}</h3>
              <h1 className="text-4xl max-tablet:text-3xl max-mobile:text-2xl font-semibold">{title}</h1>
            </div>
        <div className="h-full w-full">
            <TestSlider/>
        </div>
      </div>

      <div className="grid max-mobile:grid-flow-row grid-cols-4 gap-4 grid-rows-6 grid-flow-col w-[100%] h-[32rem]">
        <div className="col-span-2 max-mobile:hidden row-span-4 rounded-3xl overflow-hidden">
          <img src={codingImage} alt="" className="w-full h-full object-cover"/>
        </div>

        <div className="bg-blue-50 col-span-2  row-span-2 rounded-3xl px-8 py-5 shadow-md">
          <div className="flex flex-col gap-2">
            <FcGoogle className="text-5xl max-mobile:text-3xl"/>
            <h1 className="text-2xl font-bold">4.9</h1>
            <p className="font-medium">Google Ratings</p>
          </div>  
        </div>

        <div className="bg-amber-200 col-span-2 row-span-2 rounded-3xl px-8 py-5 shadow-md">
          <div className="flex flex-col gap-2">
            <FaRegFaceGrinBeam className="text-5xl max-mobile:text-3xl"/>
            <h1 className="text-2xl font-bold">4.5K +</h1>
            <p className="font-medium">Happy Clients</p>
          </div>
        </div>

        <div className="col-span-2 max-mobile:col-span-4 row-span-4 rounded-3xl overflow-hidden shadow-xl">
          <img src={digitalImage} alt="" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
