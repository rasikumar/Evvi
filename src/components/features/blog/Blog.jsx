import { Link } from "react-router-dom";
import { Blogs } from "../../../constant";
import { motion } from "framer-motion";

const Blog = () => {
  const blog = Blogs[0];
  const itemOneRender = blog.lists.slice(3, 4);
  const itemThreeRender = blog.lists.slice(0, 3);
  return (
    <div className="bg-blue-50 max-tablet:px-6 max-tablet:py-10 py-20">
      {Blogs.map((blog, index) => (
        <div
          key={index}
          className="list-none m-auto flex flex-col items-center justify-center gap-4 mb-4"
        >
          <h2 className="text-t-primary font-medium text-sm">{blog.heading}</h2>
          <p className="font-semibold text-2xl mb-6">{blog.title}</p>
          <div className="flex items-center max-tablet:flex-col justify-center gap-4 ">
            <div className=" w-[30%] max-tablet:w-full flex flex-col gap-4">
              {itemThreeRender.map((item) => (
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 1,
                  }}
                  key={item.id}
                  className="border-b-[1px] py-3 flex items-center gap-4"
                >
                  <div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-lg w-20"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 ">
                      <img src={item.icon_1} alt={item.title} width={item.width} />
                      <li className="text-xs text-t-primary font-medium">
                        {item.date}
                      </li>
                    </div>
                    <Link
                      to={item.url}
                      className="font-bold w-52 text-lg line-clamp-4 transition-all delay-75"
                    >
                      {item.title}
                      <div className="font-normal leading-tight text-xs text-justify">
                        {item.description}
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-b-primary h-[120%] max-tablet:w-full w-[60%] rounded-lg">
              {itemOneRender.map((item) => (
                <div
                  key={item.id}
                  className="flex max-mobile:flex-col gap-2 max-mobile:gap-0 bg-[white] rounded-lg"
                >
                  <div>
                    <img
                      src={item.img}
                      alt={item.title}
                      width={800}
                      className="h-[380px] max-mobile:h-[200px] rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col w-full px-4 py-10 gap-4 max-mobile:gap-0">
                    <div className="flex items-center gap-2 w-[50%] text-t-primary">
                      <img src={item.icon_1} alt={item.title} width={item.width} />
                      <li className="text-sm font-medium">{item.date}</li>
                    </div>
                    <h3 className="line-clamp-2 font-bold">{item.title}</h3>
                    <p className="line-clamp-5 w-full font-medium border-t-[1px] mt-4 mb-4 text-justify">
                      {item.description}
                    </p>
                    <Link
                      to={item.url}
                      className="text-t-secondary font-semibold w-[50%] flex"
                    >
                      {item.link}{" "}
                      <img src={item.icon_2} alt="icon_image" width={item.width} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link className="btn-secondary" to={blog.link}>{blog.btn}</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
