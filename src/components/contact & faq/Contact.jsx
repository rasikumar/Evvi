import { ContactUs } from "../../constant"

const Contact = () => {
    const {title, heading, button} = ContactUs[0]

  return (
    <div className="flex flex-col bg-t-primary p-8 gap-6 w-full rounded-xl">
        <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-white">{heading}</h1>
            <p className="text-4xl max-tablet:text-3xl max-mobile:text-2xl font-semibold text-white">{title}</p>
        </div>
        <div>
            <form className="flex flex-col gap-4">
                <div className="flex gap-4 max-mobile:flex-col">
                    <input type="text" placeholder="Your name" className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-5 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"/>
                    <input type="text" placeholder="Phone number" className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-5 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"/>
                </div>
                <div className="flex gap-4 max-mobile:flex-col" >
                    <input type="email" placeholder="Email" className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-5 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"/>
                    <input type="text" placeholder="Subject" className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-2 px-5 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75 w-full"/>
                </div>
                    <input type="text" placeholder="Details here" className="bg-none bg-white/30 border-2 rounded-md border-white/30 py-6 px-6 placeholder:text-white placeholder:font-medium focus:border-t-secondary transition-all delay-75"/>
                    <button className="btn-secondary text-white w-60 max-mobile:w-full">{button}</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
