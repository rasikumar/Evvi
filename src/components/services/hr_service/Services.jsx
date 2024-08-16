import { useGSAP } from "@gsap/react";
import { HR_Content } from "../constant";

const Services = () => {
    const { header,subheader,items } = HR_Content[1]
    useGSAP(() => {
        
    })
  return (
    <div className="flex flex-col items-center max-tablet:flex-col gap-4 w-full p-14 max-tablet:p-5 max-tablet:gap-10 max-mobile:gap-5 bg-b-primary">
        <h1 className="text-2xl font-semibold">{header}</h1>
        <p className="font-medium">{subheader}</p>
        <div className="flex flex-wrap gap-4 justify-center" >
            {items.map(item => (
                <div key={item.id} className="card-container w-96 h-72">
                    <img src={item.img} alt={item.title} className="rounded-xl"/>
                    <div className="card-content">
                        <h3 className="text-md font-bold text-white">{item.title}</h3>
                        <p className="text-sm font-medium text-black">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    </div> 
  )
}

export default Services
