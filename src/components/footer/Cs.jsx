import { Link } from 'react-router-dom'
import { OurServices } from '../../constant/index'
import { employee } from '../../assets'

const Cs = () => {

  return (
    <div>
      <div className="w-full p-10 justify-end gap-20 max-tablet:gap-5 flex max-tablet:flex-col bg-t-secondary/60 ">
          {OurServices.map(service => (
            <div key={service.id} className='flex flex-col gap-5 max-tablet:gap-2'>
              <h1 className='font-bold text-center'>Helpful Links</h1>
              <div className='flex gap-2 max-tablet:gap-1 font-medium'>
                {service.lists.map(i => (
                  <ul key={i.id} >
                    <Link to={i.url} className='text-sm hover:text-white hover:font-medium transition-all delay-[0.1s] cursor-pointer'> {i.content}  </Link>
                  </ul>
                ))}
              </div>
            </div>
          ))}
          <div className='flex flex-col items-center'>
            <img src={employee} alt="" className='w-10 h-10 rounded-full' />
            <h1 className='font-bold'>
              Careers
            </h1>
          </div>
          {/* {Supports.map(support => (
            <div key={support.id} className='flex flex-col gap-5 max-tablet:gap-2'>
              <h1 className='font-bold'>{support.content}</h1>
              <div className='flex flex-col max-tablet:gap-1 gap-2 font-medium'>
                {support.lists.map(i => (
                  <ul key={i.id}>
                    <li className='text-sm hover:text-white hover:font-medium transition-all delay-[0.1s] cursor-pointer'>{i.content}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))} */}
          {/* {Blogs.map(blog => (
            <div key={blog.id} className='flex flex-col gap-5 max-tablet:gap-3'>
              <h1 className='font-bold'>{blog.heading}</h1>
              <div className='flex flex-col gap-4 max-tablet:gap-2 max-w-80 font-medium'>
                {first_Two.map(first_two => (
                  <ul key={first_two.id}>
                    <li className='flex gap-6 max-tablet:gap-3'>
                      <div>
                        <img src={first_two.img} width={100} alt={first_two.title} className='h-full rounded-lg' />
                      </div>
                      <div className='flex flex-col'>
                        <h1 className='text-sm'>{first_two.date}</h1>
                        <Link to={first_two.url} className='font-bold text-sm line-clamp-2 hover:text-white hover:transition-all hover:delay-[.2ms]'>{first_two.title}</Link>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))} */}
      </div>
    </div>
  )
}

export default Cs
