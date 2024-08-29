import Cf from './Cf'
import Cs from './Cs'
import Ct from './Ct'

const Footer = () => {
  return (
    <div className='relative bg-footerImage bg-no-repeat bg-start bg-cover w-full'>
      <div className='absolute -top-[6rem] left-24 max-tablet:relative max-tablet:left-0 max-tablet:top-0'>
        <Cf/>
      </div>
      <div>
        <Cs/>
      </div>
      <div className='absolute w-full z-50'>
        <Ct/>
      </div>
    </div>
  )
}

export default Footer
