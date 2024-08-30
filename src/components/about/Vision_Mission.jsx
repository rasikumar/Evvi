import { About_Full } from "../../constant"

const visions = About_Full[4].vision_mission



const Vision_Mission = () => {

  return (
    <div className="w-full px-20 py-10 flex flex-col gap-4" >
      {visions.map((vision)=> (
        <div key={vision.id} className={`flex gap-4 items-center ${vision.id % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
          <div className="flex flex-col gap-4 bg-slate-50 p-10">
            <h1 className="font-semibold text-3xl text-t-primary">{vision.header}</h1>
            <p className="w-[50em] m-auto">{vision.content}</p>
          </div>
          <div>
            <img src="https://dummyimage.com/300x200//fff"  className="rounded-3xl rounded-tl-none rounded-br-none"/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Vision_Mission