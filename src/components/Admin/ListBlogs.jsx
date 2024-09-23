/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Instance from "./Instance";
import DOMPurify from "dompurify";
import EditBlog from "./EditBlog";
import DeleteBlog from "./DeleteBlog";
import { FaPencilAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

// Custom Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50rem] relative max-h-[30rem] overflow-y-scroll">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await Instance.get("/admin/getAllBlogs");
        setBlogs(response.data.blogs);
      } catch (err) {
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleEditClick = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div>
        <h1 className="text-center text-3xl mb-5">Blog List</h1>
        <ul className="flex flex-wrap gap-3">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="even:bg-white odd:bg-zinc-300 border-2 border-teal-800 rounded-lg p-4 mb-1 flex gap-6 max-h-32 sm:max-h-36"
            >
              <div className="w-full ">
                <div className="flex text-sm">
                  <h2 className="text-md font-semibold">{blog.blog_title}</h2>
                </div>
                <div className="flex gap-4">
                  <p className="text-gray-600 inline-flex items-center text-xs gap-2">
                    <FaPencilAlt />
                    {blog.blog_author}
                  </p>
                  <p className="text-gray-500 inline-flex items-center text-xs gap-2">
                    <MdDateRange />
                    {new Date(blog.blog_date).toLocaleDateString()}
                  </p>
                </div>

                <div
                  className="line-clamp-2 text-xs"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.blog_body),
                  }}
                />
                <div className="inline-flex gap-4">
                  <button
                    onClick={() => handleEditClick(blog)}
                    className="mt-2 h-6 text-center flex justify-center items-center text-blue-500"
                  >
                    Edit
                  </button>
                  <DeleteBlog blogId={blog.id} setBlogs={setBlogs} />
                </div>
              </div>
              {blog.blog_image && (
                <img
                  src={`http://192.168.20.7:3000/blog_images/${blog.blog_image}`}
                  alt={blog.blog_title}
                  className="rounded-lg"
                  style={{ maxWidth: "10%", height: "auto" }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Custom Modal for Edit Blog */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {selectedBlog && (
            <EditBlog
              blog={selectedBlog}
              setEditing={setIsModalOpen}
              setBlogs={setBlogs}
              closeModal={handleCloseModal} // Pass the function to close modal
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ListBlog;
