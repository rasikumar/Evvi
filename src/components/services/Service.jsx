import { OurServices } from "../../constant"
import ServiceSlide from "./ServiceSlide"

const Service = () => {
    const { title, heading} = OurServices[0]

  return (
    <div className="flex flex-col gap-4 w-full h-full max-tablet:gap-10 max-mobile:gap-5 bg-t-primary">
        <div className="flex flex-col gap-5 items-center justify-center w-full ">
            <h3 className="text-white font-semibold">{heading}</h3>
            <p className="text-white text-4xl max-tablet:text-3xl max-mobile:text-2xl font-semibold">{title}</p>
        </div>
        <div className="w-full h-[30rem] p-14 max-tablet:p-5">
            <ServiceSlide/>
        </div>
    </div>
  )
}

export default Service
// p-14 max-tablet:p-5