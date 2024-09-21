import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Instance from "../../Admin/Instance";

const BlogDetail = () => {
  const { id } = useParams(); // Assuming you pass the blog ID in the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await Instance.get(`/getBlogById/${id}`);
        console.log(response);
        setBlog(response.data.blog);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog details", err);
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="w-[90%] m-auto py-12 flex justify-between mb-10">
      <div className="w-[70%]">
        {blog.map((blog) => (
          <div key={blog.id} className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold underline">
              {blog.blog_title}
            </h2>
            <div className="flex gap-5 items-center">
              <p className="text-gray-600">{blog.blog_author}</p>
              <p className="text-gray-600">
                Posted on{" "}
                {new Date(blog.blog_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <img
              src={`http://192.168.20.7:3000/blog_images/${blog.blog_image}`}
              alt={blog.blog_title}
              className="min-w-full h-72 object-cover rounded-xl"
            />

            <div
              className="mt-4 indent-4"
              dangerouslySetInnerHTML={{ __html: blog.blog_body }}
            />
          </div>
        ))}
      </div>
      <div className="w-1/6 h-full bg-black fixed right-20"></div>
    </div>
  );
};

export default BlogDetail;
