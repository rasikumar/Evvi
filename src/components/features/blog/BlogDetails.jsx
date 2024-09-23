import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Instance from "../../Admin/Instance";

const BlogDetail = () => {
  const { id } = useParams(); // Assuming you pass the blog ID in the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(""); // State for the username
  const [comment, setComment] = useState(""); // State for the comment
  const [comments, setComments] = useState([]); // Initialize comments as an empty array
  const [commentError, setCommentError] = useState(null);

  // Fetch blog details
  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await Instance.get(`/getBlogById/${id}`);
        setBlog(response.data.blog);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog details", err);
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  // Fetch comments for this blog
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await Instance.get(`/getCommentsByBlogId/${id}`);
        setComments(response.data.comments || []); // Ensure we get an array
      } catch (err) {
        console.error("Failed to fetch comments:", err);
        setComments([]); // In case of failure, set to empty array to avoid undefined
      }
    };

    fetchComments();
  }, [id]);

  // Handle comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!comment || !username) {
      setCommentError("Both username and comment are required.");
      return;
    }

    try {
      const response = await Instance.post("/createComments", {
        blogId: id,
        username, // Include the username in the request
        comment, // Include the comment
      });
      setComments([...comments, response.data.newComment]); // Add new comment to the state
      setComment(""); // Reset comment input
      setUsername(""); // Reset username input
      setCommentError(null); // Clear any previous errors
    } catch (err) {
      console.error("Failed to post comment:", err);
      setCommentError("Failed to post comment. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="w-[90%] m-auto py-12 flex justify-between mb-10">
      <div className="w-[70%]">
        {blog &&
          blog.map((blog) => (
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

        {/* Comment Section */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Comments</h3>

          {/* Display Comments */}
          <div className="mb-6">
            {comments.length > 0 ? (
              comments.map((cmt) => (
                <div key={cmt.id} className="mb-4">
                  <p className="font-semibold">{cmt.username}</p>{" "}
                  {/* Show username */}
                  <p>{cmt.comment}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(cmt.createdAt).toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>

          {/* Comment Input */}
          <form onSubmit={handleCommentSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:text-t-primary"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:text-t-primary"
              rows="4"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            {commentError && <p className="text-red-500">{commentError}</p>}
            <button
              type="submit"
              className="px-4 py-2 btn-primary rounded-lg"
            >
              Submit Comment
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BlogDetail;
