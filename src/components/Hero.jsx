// import { analytics, codingImage, bgvid } from "../assets"
import {  bgvid } from "../assets"
import { HeroText } from "../constant"
import { FaArrowUpRightFromSquare, FaSquarePhone, FaRegFaceGrinBeam, FaStar } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";



const Hero = () => {

    const itemOneRender = HeroText.slice(0,1)
    const itemSecondRender = HeroText.slice(1,2)
    const itemThirdRender = HeroText.slice(2,3)
    const itemFourRender = HeroText.slice(3,4)

    return (
        <div className="relative flex w-[90%] gap-5 m-auto h-screen">
            <div className="absolute w-full -z-20">
                <div className="absolute right-0 top-0 w-60 h-72 blur-[200px] -z-10 bg-t-secondary"></div>
                {/* <img src={analytics} alt="" width={120} className="-top-3 opacity-50 right-36 absolute" />
                <img src={codingImage} alt="" width={140} className="absolute top-10 left-40 opacity-30" /> */}
            </div>
            
            <div className="w-[50%] p-2 flex flex-col gap-10 mt-24">
                {itemOneRender.map(hero => (
                    <div key={hero.id}>
                        <h3 className="bg-btn w-fit px-3 py-1 rounded-full" >{hero.content}</h3>
                    </div>
                ))}

                {itemSecondRender.map(hero => (
                    <div key={hero.id}>
                        <h1 className="text-6xl font-semibold">{hero.content}</h1>
                    </div>
                ))}

                <div className="flex gap-7">
                    {itemThirdRender.map(hero => (
                        <div key={hero.id}>
                            <p className="btn-primary flex items-center gap-3">{hero.content}<FaArrowUpRightFromSquare/></p>
                        </div>
                ))}
                    {itemFourRender.map(hero => (
                        <div key={hero.id}>
                            <p className="btn-secondary flex items-center gap-3"><FaSquarePhone/>{hero.content}</p>
                        </div>
                ))}
                </div>
            </div>

            <div className="w-[50%] h-fit relative mt-24">
                <div className="relative w-full h-96 rounded-xl overflow-hidden">
                    <video src={bgvid} className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop></video>
                </div>
                <div className="px-4 py-4 rounded-xl shadow-xl bg-white flex flex-col w-[35%] gap-2 absolute top-0 right-0 z-50">
                    <div className="flex items-end justify-end">
                        <FaRegFaceGrinBeam className="text-xl"/>
                    </div>
                    <div className="flex items-center flex-col">
                        <h1 className="text-3xl font-bold">1k+</h1>
                        <p className="text-sm font-medium">Happy Clients</p>
                    </div>
                </div>

                <div className="px-4 absolute bottom-0 shadow-xl left-0 border-8 border-transparent py-4 rounded-xl bg-white flex flex-col w-[35%] gap-4 ">
                    <div className="text-sm font-bold">
                        Clients Feedback
                    </div>
                    <div className="flex items-center gap-2">
                        <FcGoogle className="text-3xl"/>
                        <div className="flex flex-col gap-3">
                            <ul className="flex text-yellow-500">
                                <li><FaStar/></li>
                                <li><FaStar/></li>
                                <li><FaStar/></li>
                                <li><FaStar/></li>
                                <li><FaStar/></li>
                            </ul>
                            <p className="text-xs font-semibold">Review 4.8/5.0</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
