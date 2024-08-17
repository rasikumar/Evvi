import { HR_Content } from "../constant"


const Choose = () => {
    const { title,heading,description } = HR_Content[3]
    return (
    <div className="bg-heroImage bg-cover max-mobile:bg-right bg-no-repeat h-[26rem] w-full ">
        <div className="w-[60%] max-mobile:w-full flex flex-col justify-center bg-gradient-to-r from-t-secondary  h-full">
            <div className="px-28 max-tablet:px-14 max-mobile:px-8 gap-6 flex flex-col" >
                <div>
                    <h1 className="text-xl font-semibold text-white">{title}</h1> 
                    <p className="text-sm font-medium">{heading}</p>
                </div>
                <p className="leading-tight font-medium"><span className="font-bold">{description.slice(0,14)}</span>{description.slice(14, 276)}</p>
            </div>
        </div>
    </div>
  )
}

export default Choose
