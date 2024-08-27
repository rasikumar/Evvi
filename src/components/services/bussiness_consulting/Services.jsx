import { Business_Consulting } from "../constant";

const Services = () => {
    const { header,subheader,items } = Business_Consulting[1];

    return (
    <div className="flex flex-col -mt-24 items-center max-tablet:flex-col gap-4 w-full p-14 max-tablet:p-5 max-tablet:gap-8 max-mobile:gap-2">
        <h1 className="text-2xl font-semibold ">{header}</h1>
        <p className="font-medium">{subheader}</p>
        <div className="grid grid-cols-3 grid-col-2 max-tablet:grid-cols-1 gap-14 max-tablet:gap-8 max-tablet:py-10 max-mobile:py-8 py-16">
            {items.map(item => (
                <div key={item.id} className="card-container">
                    <img src={item.img} alt={item.title} width={200} className="rounded-xl"/>
                    <div className="card-content">
                        <h3 className="text-xl font-bold text-t-primary max-mobile:text-sm">{item.title}</h3>
                        <p className="text-sm font-medium text-black max-mobile:text-xs max-mobile:leading-tight">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    </div> 
  )
}

export default Services
