import ProductCard from '../components/ProductCard'
import { products } from '../constant'

function PopularProducts() {
  return (
    
    <section className='px-16 max-mobile:px-8 py-10 flex flex-col gap-4 w-full'>
      <div>
        <h2 className='font-palanquin capitalize text-4xl max-tablet:text-2xl max-mobile:text-lg lg:max-w-lg font-bold'>Our <span className='text-blue-500 max-tablet:text-2xl max-mobile:text-lg'>Popular </span>Products</h2>
      </div>
      <div className='grid grid-rows-1 grid-cols-4 max-tablet:grid-cols-2 max-mobile:gap-4  m-auto'>
      {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

    </section>    
  )
}

export default PopularProducts