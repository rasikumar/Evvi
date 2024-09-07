import ProductCard from '../components/ProductCard'
import { products } from '../constant'

function PopularProducts() {
  return (
    
    <section className='px-12 max-mobile:px-8 py-14 max-mobile:pb-5 flex flex-col gap-4 w-full'>
      <div className='flex flex-col gap-6'>
        <h2 className='capitalize text-4xl max-tablet:text-2xl max-mobile:text-lg lg:max-w-lg font-bold'>Our <span className='text-t-primary max-tablet:text-2xl max-mobile:text-lg'>Popular </span>Services</h2>
        <p className='text-base'>Empower your business with our all-encompassing IT consulting services. From robust cloud solutions to innovative web and app development, we offer the expertise and support you need to drive technology-forward success.</p>
      </div>
      <div className='grid grid-rows-1 max-mobile:grid-cols-1 grid-cols-4 max-tablet:grid-cols-2 gap-6 m-auto'>
      {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

    </section>    
  )
} 

export default PopularProducts