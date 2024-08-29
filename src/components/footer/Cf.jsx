import { Evvi_icon } from "../../assets";
import { Address } from "../../constant"


const Cf = () => {
  return (
    <div className="bg-t-primary rounded-xl max-tablet:rounded-none py-1 max-tablet:py-12 max-w-72 max-tablet:max-w-full gap-1 px-5 flex flex-col">
      <div className="flex flex-col items-center mt-2">
        <img src={Evvi_icon} alt="Evvi_icon" width={80} />
        <h1 className="text-white font-semibold">Evvi Solutions Private Limited</h1>
      </div>
      <hr />
      <div>
        {Address.map(address => (
          <div key={address.id} className="flex items-start gap-2 mb-3">
            <img src={address.icon} width={20} alt="#" />
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
