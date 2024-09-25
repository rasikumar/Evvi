import { useState, useEffect } from "react";
import Instance from "./Instance";
import { MdDateRange } from "react-icons/md";
import { FaEye, FaTrash } from "react-icons/fa";
import ConfirmModal from "./ConfirmModal"; // Import the ConfirmModal

// CommentList Component
const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [replyText, setReplyText] = useState(""); // State for reply text
  const [commentToReply, setCommentToReply] = useState(null); // Comment to reply to

  // Fetch comments on component mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await Instance.post("/admin/getAllComments");
        setComments(response.data.comments);
      } catch (err) {
        setError("Failed to fetch comments");
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  const handleDeleteComment = (blog_id, commentId) => {
    setCommentToDelete({ blog_id, commentId });
    setIsModalOpen(true);
  };

  const confirmDeleteComment = async () => {
    if (!commentToDelete) return;

    const { blog_id, commentId } = commentToDelete;

    try {
      await Instance.post(`/admin/deleteComment`, {
        blog_id,
        commentId,
      });
      setComments(comments.filter((comment) => comment.id !== commentId));
      setIsModalOpen(false); // Close modal after deletion
      setCommentToDelete(null); // Clear comment to delete
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReply = async (comment_id) => {
    if (!replyText.trim()) return; // Prevent empty replies

    try {
      await Instance.post(`/admin/replyToComment`, {
        comment_id,
        reply: replyText,
      });

      // Optionally, update the comments state to include the new reply
      const updatedComments = comments.map((comment) => {
        if (comment.id === comment_id) {
          return {
            ...comment,
            replies: [...(comment.replies || []), replyText], // Add the new reply
          };
        }
        return comment;
      });

      setComments(updatedComments);
      setReplyText(""); // Clear the reply input
      setCommentToReply(null); // Reset comment to reply
    } catch (error) {
      console.error("Failed to reply to comment:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredComments = comments.filter((comment) =>
    comment.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = filteredComments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-center text-3xl font-bold mb-5">Comment List</h1>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="🔍 Search by Fans name..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-teal-300"
        />
      </div>

      {loading ? (
        <div className="text-center">
          {/* Loader */}
          <svg
            className="animate-spin h-8 w-8 text-teal-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredComments.length === 0 ? (
        <p className="text-center text-red-500">No comments found</p>
      ) : (
        <ul className="flex flex-wrap gap-3">
          {currentComments.map((comment) => (
            <li
              key={comment.id}
              className="w-full border-2 border-teal-800 rounded-lg p-4 mb-4"
            >
              <div>
                <p className="font-semibold text-lg">{comment.username}</p>
                <div className="flex items-center text-gray-500 text-sm gap-2 mb-2">
                  <MdDateRange />
                  {new Date(comment.created_at).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </div>
                <p className="text-sm text-gray-700">{comment.comment}</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => {
                    setCommentToReply((prev) =>
                      prev === comment.id ? null : comment.id
                    );
                    setReplyText("");
                  }}
                  className="text-teal-600 hover:text-teal-500"
                >
                  Reply
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      handleDeleteComment(comment.blog_id, comment.id)
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() =>
                      handleDeleteComment(comment.blog_id, comment.id)
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>

              {/* Reply Input */}
              {commentToReply === comment.id && (
                <div className="mt-4">
                  <input
                    type="text"
                    value={replyText}
                    onChange={handleReplyChange}
                    placeholder="Type your reply..."
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-teal-300"
                  />
                  <button
                    onClick={() => handleReply(comment.id)}
                    className="mt-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
                  >
                    Send Reply
                  </button>
                </div>
              )}

              {/* Display Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <ul className="mt-4 ml-6 space-y-2">
                  {comment.replies.map((reply, index) => (
                    <li
                      key={index}
                      className="text-gray-600 text-sm bg-gray-100 rounded-md p-2"
                    >
                      {reply}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      {filteredComments.length > commentsPerPage && (
        <div className="flex justify-center mt-6">
          {Array.from({
            length: Math.ceil(filteredComments.length / commentsPerPage),
          }).map((_, number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === number + 1
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={confirmDeleteComment}
        onCancel={() => setIsModalOpen(false)}
        message="Are you sure you want to delete this comment?"
      />
    </div>
  );
};

export default CommentList;
