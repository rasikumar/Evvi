import { HR_Content } from "../constant";

const Services = () => {
    const { header,subheader,items } = HR_Content[1]
  return (
    <div className="flex flex-col items-center max-tablet:flex-col gap-4 w-full p-14 max-tablet:p-5 max-tablet:gap-10 max-mobile:gap-5 bg-b-primary">
        <h1 className="text-2xl font-semibold">{header}</h1>
        <p className="font-medium">{subheader}</p>
        <div className="grid grid-cols-3 grid-col-2 gap-14 mt-20">
            {items.map(item => (
                <div key={item.id} className="card-container">
                    <img src={item.img} alt={item.title} width={200} className="rounded-xl"/>
                    <div className="card-content">
                        <h3 className="text-sm font-bold text-t-primary">{item.title}</h3>
                        <p className="text-xs font-medium text-black">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services
