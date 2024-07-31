import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Sliding from "./components/Sliding"
import Testimonials from "./components/Testimonial"
const App = () => {


  return (
    <>
      <Header/>
      <Hero/>
      <Sliding/>
      <About/>
      <Testimonials/>
    </>
  )
}

export default App

// const blog = Blogs[0]
// const itemThreeRender = blog.lists.slice(0, 3);
// const itemOneRender = blog.lists.slice(3, 4);
{/* <div className="bg-blue-50 p-4">
      {
        Blogs.map((blog, index) => (
          <div key={index} className="w-[90%] list-none m-auto flex flex-col items-center justify-center gap-2">
            <h2 className="text-t-primary font-medium text-sm">{blog.heading}</h2>
            <p className="font-semibold text-2xl">{blog.title}</p>
            <div className="flex items-center justify-center gap-4 h-full">
              <div className=" w-[30%] flex flex-col gap-4">
                {itemThreeRender.map(item => (
                  <div key={item.id} className="border-b-[1px] py-3 flex items-center gap-4">
                    <div><img src={item.img} alt="" width={200} className="rounded-lg"/></div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 ">
                        <img src={item.icon_1} alt="" width={item.width} className=""/>
                        <li className="text-sm text-t-primary font-medium">{item.date}</li>
                      </div>
                      <div className="font-bold line-clamp-2">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-b-primary h-[120%]  w-[60%] rounded-lg">
                {itemOneRender.map(item => (
                  <div key={item.id} className="flex gap-2 bg-[white] rounded-lg">
                    <div><img src={item.img} alt="" width={600} className="h-[380px] rounded-lg"/></div>
                    <div className="flex flex-col w-full px-4 py-10 gap-4">
                      <div className="flex items-center gap-2 w-[50%] text-t-primary">
                        <img src={item.icon_1} alt="" width={item.width} />
                        <li className="text-sm font-medium">{item.date}</li>
                      </div>
                      <h3 className="line-clamp-2 font-bold">{item.title}</h3>
                      <p className="line-clamp-5 w-full font-medium border-t-[1px] mt-4 mb-4">{item.description}</p>
                      <a href={item.link} className="text-t-secondary font-semibold w-[50%] flex">{item.link} <img src={item.icon_2} alt="" width={item.width}/></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </div> */}

// {
//   Testimonials.map((testimonial, index) => (
//     <div key={index}>
//       <p>{testimonial.heading}</p>
//       <p>{testimonial.title}</p>
//       <div className="flex gap-2  flex-col w-[40%] m-auto">
//         {
//           testimonial.lists.map((list, index) => (
//             <div key={index} className="bg-b-primary p-10 flex flex-col rounded-xl gap-6">
//               <img src={list.icon} alt="" width={list.width} />
//               <p className="text-t-primary font-medium">&apos;&apos; {list.content} &apos;&apos;</p>
//               <div className="flex gap-4">
//                 <img src={list.cust_icon} alt="" width={list.width} height={list.height} className="rounded-full" />
//                 <div className="flex flex-col text-sm">
//                   <p className="font-semibold">{list.cust_name}</p>
//                   <p>{list.position}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   ))
// }

