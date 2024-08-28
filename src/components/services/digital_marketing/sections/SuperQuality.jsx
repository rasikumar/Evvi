import { shoe8 } from '../assets/images'

function SuperQuality() {
  return (
    <section className='flex justify-center items-center max-tablet:flex-col px-16 max-mobile:px-8 gap-16 max-tablet:gap-4 py-16'>
      <div className='flex flex-col'>
        <h2 className='font-palanquin capitalize text-4xl max-tablet:text-2xl max-mobile:text-lg desktop:max-w-lg font-bold'>Transform Your <span className='text-blue-500'>Digital Presence </span>with Proven Expertise </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Our digital transformation services are designed to empower your business through innovative strategies and comprehensive solutions. From crafting effective marketing plans to optimizing your online presence.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        We offer end-to-end support to help you excel in the digital age.
        </p>
        <button className='btn-primary w-[25%] max-mobile:w-[40%] mt-4'>Learn More</button>
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