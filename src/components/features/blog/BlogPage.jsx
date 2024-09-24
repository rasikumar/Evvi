import { useState, useEffect } from "react";
import Instance from "../../Admin/Instance";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // Number of blogs per page

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await Instance.post("/getAllBlogs");
        setBlogs(response.data.blogs);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-[90%] m-auto py-12">
      <div className="flex flex-col gap-3 w-full mb-10 text-center">
        <h2 className="text-4xl tablet:text-5xl font-semibold">Blogs</h2>
        <p className="text-gray-600">
          New product features, the latest in technology, solutions, and
          updates.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((blog, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full overflow-hidden">
              <img
                src={`http://192.168.20.7:3000/blog_images/${blog.blog_image}`}
                alt={blog.blog_title}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110 w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                <h2 className="text-lg font-semibold text-white">
                  {blog.blog_author}
                </h2>
                <p className="text-sm text-gray-300">
                  {new Date(blog.blog_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col">
              <h2 className="text-xl font-bold group-hover:text-blue-500 transition-colors duration-300 line-clamp-2">
                {blog.blog_title}
              </h2>
              <div
                className="line-clamp-3 text-gray-700 mt-2 mb-4"
                dangerouslySetInnerHTML={{ __html: blog.blog_body }}
              />
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block text-sm font-medium text-blue-600 hover:text-blue-400 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
