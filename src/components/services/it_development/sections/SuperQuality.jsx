import { shoe8 } from '../assets/images'

function SuperQuality() {
  return (
    <section className='flex justify-center items-center max-tablet:flex-col px-16 max-mobile:px-8 gap-16 max-tablet:gap-4 py-16'>
      <div className='flex flex-col'>
        
        <h2 className='font-palanquin capitalize text-4xl max-tablet:text-2xl max-mobile:text-lg desktop:max-w-lg font-bold'>To know About <span className='text-blue-500'>Our IT Excellence </span>Services </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Transform your digital landscape with our comprehensive IT solutions. Whether you need bespoke web and mobile applications, scalable ERP systems, or dynamic e-commerce platforms, we provide end-to-end services to turn your vision into reality. 
        </p>
        <button className='btn-primary w-[25%] max-mobile:w-[40%] mt-4'>View Details</button>
      </div>
      <div>
      <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality