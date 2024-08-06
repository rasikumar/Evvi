import Cf from './Cf'
import Cs from './Cs'
import Ct from './Ct'

const Footer = () => {
  return (
    <div className='relative py-10'>
      <div className='absolute -top-6 left-32 '>
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
