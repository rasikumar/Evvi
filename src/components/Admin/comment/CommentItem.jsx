/* eslint-disable react/prop-types */
import { MdDateRange } from "react-icons/md";
import { FaEyeSlash, FaEye, FaTrash } from "react-icons/fa";
import { useState } from "react";
import Instance from "../Instance";

const CommentItem = ({ comment, onDelete, onToggleVisibility }) => {
  const [replyText, setReplyText] = useState("");
  const [commentToReply, setCommentToReply] = useState(null);
  const [comments, setComments] = useState([]);
  const [showReplies, setShowReplies] = useState(false);

  const toggleShow = () => {
    setShowReplies((prev) => !prev);
  };

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReply = async (comment_id) => {
    if (!replyText.trim()) return; // Prevent empty replies

    try {
      await Instance.post(`/admin/replyToComment`, {
        id: comment_id,
        reply: replyText,
      });

      const updatedComments = comments.map((comment) => {
        if (comment.id === comment_id) {
          return {
            ...comment,
            replies: [...(comment.replies || []), replyText],
          };
        }
        return comment;
      });

      // Update state with the new comments array
      setComments(updatedComments);
      setReplyText(""); // Clear the reply input
      setCommentToReply(null); // Reset comment to reply
    } catch (error) {
      console.error("Failed to reply to comment:", error);
    }
  };

  return (
    <li className="w-full border-2 border-teal-800 rounded-lg p-4 mb-4">
      <div>
        <p className="font-semibold text-lg line-clamp-1">
          {comment.blog_title}
        </p>
        <p className="font-semibold text-lg">{comment.comment_username}</p>
        <div className="flex items-center text-gray-500 text-sm gap-2 mb-2">
          <MdDateRange />
          {new Date(comment.comment_created_at).toLocaleDateString("en-IN", {
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
          onClick={() =>
            setCommentToReply((prev) =>
              prev === comment.id ? null : comment.id
            )
          }
          className="text-teal-600 hover:text-teal-500"
        >
          Reply
        </button>
        <div className="flex gap-3">
          <button
            onClick={() => onToggleVisibility(comment.id)}
            className="text-red-500 hover:text-red-700"
          >
            {comment.visible ? <FaEyeSlash /> : <FaEye />}
          </button>
          <button
            onClick={() => onDelete(comment.blog_id, comment.id)}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrash />
          </button>
        </div>
      </div>

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
            onClick={() => handleReply(comment.comment_id)}
            className="mt-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
          >
            Send Reply
          </button>
        </div>
      )}

      <button onClick={toggleShow} className="text-blue-500">
        {showReplies ? "Hide Replies" : "Show Replies"}{" "}
      </button>
      {showReplies && comment.replies && comment.replies.length > 0 && (
        <ul className="mt-4 ml-6 space-y-2">
          {comment.replies.map((reply) => (
            <li
              key={reply.reply_id} // Use a unique identifier for the key
              className="text-gray-600 text-sm bg-gray-100 rounded-md p-2"
            >
              <p className="text-sm text-gray-500">
                {new Date(reply.reply_created_at).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>
              <p className="text-sm text-gray-600">{reply.reply}</p>
              <p className="mt-2 text-gray-800">
                {reply.reply_is_hidden ? "Visible" : "Hidden"}
              </p>
              <p
                className={`mt-1 text-sm ${
                  reply.reply_is_hidden ? "text-green-600" : "text-red-600"
                }`}
              >
                {reply.reply_username}
              </p>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default CommentItem;
