import { Evvi_icon } from "../../assets";
import { Address } from "../../constant"


const Cf = () => {
  return (
    <div className="bg-t-primary rounded-xl max-tablet:rounded-none py-1 max-tablet:py-12 max-mobile:py-6 max-w-[17rem] max-tablet:max-w-full gap-3 px-5 flex flex-col">
      <div className="flex flex-col items-center mt-4">
        <img src={Evvi_icon} alt="Evvi_icon" width={80} height={80} />
        <h2 className="text-white font-semibold">Evvi Solutions Private Limited</h2>
      </div>
      <hr />
      <div>
        {Address.map(address => (
          <div key={address.id} className="flex items-start gap-2 mb-3">
            <img src={address.icon} width={20} height={20} alt="icons" />
            <div className="text-white font-medium text-sm leading-tight">
              <p>{address.content}</p>
              {address.content2 && <p>{address.content2}</p>}
              {address.content3 && <p>{address.content3}</p>}
              {address.content4 && <p>{address.content4}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cf
