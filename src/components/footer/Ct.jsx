import { Footerend } from "../../constant"
const Ct = () => {
    const item1 = Footerend[0].content
    // const item2 = Footerend[1].content
  return (
    <div className="bg-slate-800 flex items-center justify-center w-full">  
        <ul className="flex max-tablet:flex-col max-tablet:gap-4 max-tablet:py-5 items-center justify-between py-4 px-36 max-tablet:p-1 " >
            <li className="text-white font-semibold text-sm">{item1}</li>
            {/* <li className="flex gap-8 text-white font-semibold text-sm">
                {item2.map((item, index) => (
                    <li key={index} className="hover:text-t-secondary cursor-pointer">{item}</li>
                ))}
            </li> */}
        </ul>
    </div>
  )
}

export default Ct
