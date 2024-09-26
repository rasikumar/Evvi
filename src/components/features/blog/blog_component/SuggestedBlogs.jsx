import { Link } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";

/* eslint-disable react/prop-types */

const SuggestedBlogs = ({ suggestedBlogs, suggestedLoading, suggestedError }) => {
    return (
      <section className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">You Might Also Like</h3>
        {suggestedLoading ? (
          <SkeletonLoader />
        ) : suggestedError ? (
          <div className="text-red-500">{suggestedError}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {suggestedBlogs.map((blog) => (
              <div key={blog.id} className="border rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`http://192.168.20.7:3000/blog_images/${blog.blog_image}`}
                  alt={blog.blog_title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{blog.blog_title}</h4>
                  <Link to={`/blog/${blog.id}`} className="text-teal-500">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  };
  
  export default SuggestedBlogs;
  