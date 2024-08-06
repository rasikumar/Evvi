import { Evvi_icon } from "../../assets";
import { Address } from "../../constant"
import { FaFacebook, FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";

const Cf = () => {
  return (
    <div className="bg-t-primary rounded-xl max-tablet:rounded-none py-20 max-tablet:py-10 max-w-72 max-tablet:max-w-full gap-6 px-5 flex flex-col">
      <div className="flex items-center">
        <img src={Evvi_icon} alt="Evvi_icon" width={80} />
        <h1 className="text-white font-medium">Evvi Solutions</h1>
      </div>
      <hr />
      <div>
        {Address.map(address => (
          <div key={address.id} className="flex items-start gap-3 mb-3">
            <img src={address.icon} width={20} alt="" />
            <p className="text-white font-medium">{address.content}</p>
          </div>
        ))}
      </div>
      <div className="flex text-white gap-5 text-xl">
        <FaFacebook/>
        <FaTwitter/>
        <FaInstagram/>
        <FaMedium/>
      </div>
    </div>
  )
}

export default Cf
