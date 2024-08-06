import { Supports, OurServices, Blogs } from '../../constant/index'

const Cs = () => {
  const first_Two = Blogs[0].lists.slice(0,2)

  return (
    <div className='bg-footerImage bg-cover'>
      <div className="w-full p-20 max-tablet:p-10 justify-end gap-20 max-tablet:gap-5 flex max-tablet:flex-col bg-b-primary/90 ">
          {OurServices.map(service => (
            <div key={service.id} className='flex flex-col gap-5 max-tablet:gap-2'>
              <h1 className='font-bold'>{service.heading}</h1>
              <div className='flex flex-col gap-2 max-tablet:gap-1 font-medium'>
                {service.lists.map(i => (
                  <ul key={i.id}>
                    <li className='text-sm'>{i.content}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
          {Supports.map(support => (
            <div key={support.id} className='flex flex-col gap-5 max-tablet:gap-2'>
              <h1 className='font-bold'>{support.content}</h1>
              <div className='flex flex-col max-tablet:gap-1 gap-2 font-medium'>
                {support.lists.map(i => (
                  <ul key={i.id}>
                    <li className='text-sm'>{i.content}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
          {Blogs.map(blog => (
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
                        <p className='font-bold text-sm line-clamp-2'>{first_two.title}</p>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Cs
