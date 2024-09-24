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
  const [replyText, setReplyText] = useState(""); // State for the reply text
  const [replyError, setReplyError] = useState(null); // State for reply error messages
  const [replies, setReplies] = useState({}); // State to hold replies keyed by comment ID
  const [commentToReply, setCommentToReply] = useState(null); // Track which comment is being replied to

  // Fetch blog details
  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await Instance.get(`/getBlogById/${id}`);
        setBlog(response.data.blog);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog details");
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  // Fetch comments for this blog
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await Instance.get(`/getCommentByBlogId/${id}`);
        setComments(response.data.comments || []); // Ensure we get an array

        // Assuming each comment has replies
        const repliesData = response.data.comments.reduce((acc, comment) => {
          acc[comment.id] = comment.replies || []; // Adjust according to your API response structure
          return acc;
        }, {});

        setReplies(repliesData);
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
        blog_id: id,
        username,
        comment,
      });
      setComments([...comments, response.data.newComment]);
      setComment("");
      setUsername("");
      setCommentError(null);
      window.location.reload();
    } catch (err) {
      console.error("Failed to post comment:", err);
      setCommentError("Failed to post comment. Please try again.");
    }
  };

  // Handle reply submission
  const handleReplySubmit = async (e, comment_id) => {
    e.preventDefault();

    if (!replyText) {
      setReplyError("Reply text is required.");
      return;
    }

    try {
      const response = await Instance.post("/createReplies", {
        comment_id: comment_id,
        reply: replyText,
      });

      // Update replies state for the specific comment
      setReplies((prevReplies) => ({
        ...prevReplies,
        [comment_id]: [
          ...(prevReplies[comment_id] || []),
          response.data.newReply,
        ],
      }));

      setReplyText(""); // Clear reply text
      setReplyError(null);
      setCommentToReply(null); // Close the reply input after submission
    } catch (err) {
      console.error("Failed to post reply:", err);
      setReplyError("Failed to post reply. Please try again.");
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
      <div className="w-[80%] m-auto">
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
                <div
                  key={cmt.id}
                  className="mb-4 p-4 bg-slate-300/20 rounded-lg border border-gray-200 duration-300"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
                      <img
                        src={`https://ui-avatars.com/api/?name=${cmt.username}&background=random`}
                        alt={cmt.username}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <p className="font-semibold text-lg">{cmt.username}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(cmt.created_at).toLocaleString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Comment text */}
                  <p className="text-gray-800 text-base leading-relaxed">
                    {cmt.comment}
                  </p>

                  {/* Reply Button */}
                  <button
                    onClick={() => setCommentToReply(prev => prev === cmt.id ? null : cmt.id)}
                    className="text-teal-500 hover:text-teal-700"
                  >
                    Reply
                  </button>

                  {/* Reply Input */}
                  {commentToReply === cmt.id && (
                    <form
                      onSubmit={(e) => handleReplySubmit(e, cmt.id)}
                      className="mt-2 flex flex-col"
                    >
                      <textarea
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        rows="2"
                        placeholder="Write a reply..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        required
                      />
                      {replyError && (
                        <p className="text-red-500">{replyError}</p>
                      )}
                      <button
                        type="submit"
                        className="mt-2 btn-primary rounded-lg"
                      >
                        Submit Reply
                      </button>
                    </form>
                  )}

                  {/* Display Replies */}
                  {replies[cmt.id] && replies[cmt.id].length > 0 && (
                    <div className="mt-4 ml-4">
                      {replies[cmt.id].map((reply) => (
                        <div
                          key={reply.id}
                          className="p-2 bg-gray-100 rounded border mb-2"
                        >
                          <div className="flex items-center gap-4 mb-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0">
                              <img
                                src={`https://ui-avatars.com/api/?name=${reply.username}&background=random`}
                                alt={reply.username}
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>

                            <div className="flex flex-col">
                              <p className="font-semibold">{reply.username}</p>
                            </div>
                          </div>
                          <p>{reply.reply}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>

          {/* Comment Input */}
          <form onSubmit={handleCommentSubmit} className="flex flex-col">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-lg mb-2"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <textarea
              className="p-2 border border-gray-300 rounded-lg mb-2"
              rows="3"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            {commentError && <p className="text-red-500">{commentError}</p>}
            <button type="submit" className="btn-primary rounded-lg">
              Submit Comment
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BlogDetail;
