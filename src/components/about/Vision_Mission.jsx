import { motion } from "framer-motion";
import { About_Full } from "../../constant"

const visions = About_Full[4].vision_mission;


const Vision_Mission = () => {

  return (
    <div className="w-full px-20 py-5 flex flex-col gap-4" >
      {visions.map((vision)=> (
        <div key={vision.id} className={`flex max-tablet:flex-col gap-4 items-center ${vision.id % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
          <motion.div
          whileHover={{
            scale: 1.02,
            shadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
          }}
          className="flex flex-col gap-4 rounded-3xl bg-slate-200 p-10 shadow-custom">
            <h2 className="font-semibold text-3xl text-t-primary w-fit">{vision.header}</h2>
            <p className="w-[40rem] max-tablet:w-[20rem] max-mobile:w-[18rem] m-auto text-justify">{vision.content}</p>
          </motion.div>
          <div>
            <img src={vision.img} alt={vision.header} className="rounded-3xl"/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Vision_Mission