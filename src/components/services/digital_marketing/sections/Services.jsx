import ServiceCard from '../components/ServiceCard'
import { services } from '../constant'

function Services() {
  return (
    <section className='max-container flex justify-center max-tablet:flex-wrap gap-6 max-mobile:px-6 px-16 py-5 text-justify'>
          {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services  