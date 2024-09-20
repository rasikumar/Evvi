import { useState, useEffect } from "react";
import Instance from "./Instance";
import DOMPurify from "dompurify";
import EditBlog from "./EditBlog";
import DeleteBlog from "./DeleteBlog";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [editing, setEditing] = useState(false);

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
    setEditing(true);
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
        <h1>Blog List</h1>
        <ul className="flex flex-wrap gap-3 ">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="even:bg-white odd:bg-zinc-300 shadow-lg rounded-lg p-4 mb-6"
            >
              <div className="max-w-72 max-h-72 overflow-y-scroll">
                <h2 className="text-xl font-semibold mb-2">
                  {blog.blog_title}
                </h2>
                <p className="text-gray-600 mb-1">
                  <strong>Author:</strong> {blog.blog_author}
                </p>
                <p className="text-gray-500 mb-4">
                  <strong>Date:</strong>{" "}
                  {new Date(blog.blog_date).toLocaleDateString()}
                </p>
                {blog.blog_image && (
                  <img
                    src={`http://192.168.20.7:3000/blog_images/${blog.blog_image}`}
                    alt={blog.blog_title}
                    className="rounded-lg"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                )}
                <div
                  className="mt-4 line-clamp-4"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.blog_body),
                  }}
                />
                <div className="inline-flex gap-4">
                  <button
                    onClick={() => handleEditClick(blog)}
                    className="mt-2 text-blue-500"
                  >
                    Edit
                  </button>
                  <DeleteBlog blogId={blog.id} setBlogs={setBlogs} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        {editing && (
          <EditBlog
            blog={selectedBlog}
            setEditing={setEditing}
            setBlogs={setBlogs}
          />
        )}
      </div>
    </div>
  );
};

export default ListBlog;
