import { Link } from "react-router-dom";
import { Blogs } from "../../../constant";

const BlogPage = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex items-center justify-between w-full mt-10 px-20">
        <h1 className="text-5xl font-medium">Blogs</h1>
        <p className="w-72">
          New product features, the latest in technology,solutions and updates
        </p>
      </div>
      {Blogs.map((blog, index) => (
        <div
          key={index}
          className="flex gap-8 flex-wrap items-center justify-center py-20 mb-4"
        >
          {blog.lists.map((list, index) => (
            <div
              key={index}
              className="group w-fit flex flex-col bg-slate-100 p-2 rounded-lg"
            >
              <div className="relative w-[23rem]">
                <img
                  src={list.img}
                  alt={list.title}
                  className="transition-transform duration-300 ease-in-out rounded-xl"
                />
                <div className="absolute bottom-0 px-2 bg-white/30 backdrop-blur-sm p-2 w-full text-t-primary transition-opacity duration-300 ease-in-out rounded-xl">
                  <h1 className="text-base font-semibold">{list.author}</h1>
                  <p className="text-xs">{list.date}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <h1 className="text-xl font-bold group-hover:text-blue-500 transition-colors duration-300">
                  {list.title}
                </h1>
                <p className="line-clamp-2 text-sm text-gray-600 group-hover:text-gray-800 w-80 mb-2">
                  {list.description}
                </p>
              </div>
              <Link
                to={list.url}
                className="text-sm font-semibold text-blue-500 p-2 bg-btn group-hover:text-t-primary transition-colors duration-300 w-fit rounded-lg"
              >
                {list.link}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
