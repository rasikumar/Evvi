import { Testimonials } from "./constant"

const App = () => {
  return (
    <div>
      {
        Testimonials.map((testimonial, index) => (
          <div key={index}>
            <p>{testimonial.heading}</p>
            <p>{testimonial.title}</p>
            <div className="flex gap-2  flex-col w-[40%] m-auto">
              {
                testimonial.lists.map((list, index) => (
                  <div key={index} className="bg-b-primary p-10 flex flex-col rounded-xl gap-6">
                    <img src={list.icon} alt="" width={list.width} />
                    <p className="text-t-primary font-medium">&apos;&apos; {list.content} &apos;&apos;</p>
                    <div className="flex gap-4">
                      <img src={list.cust_icon} alt="" width={list.width} height={list.height} className="rounded-full" />
                      <div className="flex flex-col text-sm">
                        <p className="font-semibold">{list.cust_name}</p>
                        <p>{list.position}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default App

{/* <div className="relative">
        <div className="absolute w-52 h-52 rounded-full bg-t-primary blur-[150px] -z-10">

        </div>
      </div>
      <div className="z-50">
        {
          AboutUs.map((about, index) => (
            <div key={index}>
              <h1>{about.heading}</h1>
              <h1>{about.title}</h1>
              <p>{about.description}</p>
              {about.lists.map((list, index) => (
              <ul key={index} className="flex">
                  <li><img src={list.icon} alt="" width={list.width} height={list.height}/></li>
                  <li>{list.content}</li>
              </ul>
                ))}
            </div>
          ))
        }
        <button className="btn-primary">About More</button>
      </div> */}