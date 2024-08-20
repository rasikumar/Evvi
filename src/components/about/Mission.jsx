import { aboutus } from "../../assets"
import { About_Full } from "../../constant"

const content = About_Full[2]

const Mission = () => {
  return (
    <div className="flex max-tablet:flex-col max-mobile:px-10 w-full py-24 px-24 items-start gap-20 bg-t-primary"> 
        <div className="w-[50%] max-tablet:w-full flex flex-col gap-4">
            <h1 className="text-xl max-tablet:text-lg font-medium text-white">{content.title}</h1>
            <h1 className="text-white text-5xl max-tablet:text-3xl font-medium">{content.header}</h1>
            <p className="text-white leading-snug max-tablet:text-sm">{content.paragraph1}</p>
            <p className="text-white leading-snug max-tablet:text-sm">{content.paragraph2}</p>
        </div>
        <div className="w-[20%] max-tablet:w-[40%] max-tablet:pb-40 max-mobile:pb-24 flex flex-col gap-10 -mt-10">
            <div className="flex gap-10">
                <img src={aboutus} width={200} className="rounded-[5rem] rounded-br-none bg-slate-200"  alt="missionImage" />
                <img src={aboutus} width={200}  className="rounded-[5rem] rounded-bl-none bg-slate-200"  alt="missionImage" />
            </div>
            <div className="relative">
                <img src={aboutus} width={200} className="rounded-[5rem] rounded-tr-none -rotate-45 absolute left-[7.5rem] max-mobile:left-[5rem] top-4 bg-slate-200" alt="missionImage" />
            </div>
        </div>
    </div>
  )
}

export default Mission