/* eslint-disable react/prop-types */
import { MdDateRange } from "react-icons/md";
import { FaEyeSlash, FaEye, FaTrash } from "react-icons/fa";
import { useState } from "react";
import Instance from "../Instance";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import ConfirmModal from "./ConfirmModal";

const CommentItem = ({ comment, onDelete, onToggleVisibility }) => {
  const [replyText, setReplyText] = useState("");
  const [commentToReply, setCommentToReply] = useState(null);
  const [comments, setComments] = useState([]);
  const [showReplies, setShowReplies] = useState(false);
  const [replyToToggle, setReplyToToggle] = useState(null); // Track the reply being toggled
  const [isReplyHidden, setIsReplyHidden] = useState(false); // Track the current visibility state for replies
  const [isReplyToggleModalOpen, setIsReplyToggleModalOpen] = useState(false); // Modal state for reply toggle

  const toggleShow = () => {
    setShowReplies((prev) => !prev);
  };

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReply = async (comment_id) => {
    if (!replyText.trim()) return;

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

      setComments(updatedComments);
      setReplyText(""); // Clear the reply input
      setCommentToReply(null); // Reset comment to reply
    } catch (error) {
      console.error("Failed to reply to comment:", error);
    }
  };

  const handleReplyVisibilityToggle = (reply) => {
    setReplyToToggle(reply); // Set the reply to toggle
    setIsReplyHidden(reply.reply_is_hidden); // Track the current visibility state
    setIsReplyToggleModalOpen(true); // Open the modal for confirmation
  };

  const confirmReplyToggleVisibility = async () => {
    if (!replyToToggle) return;

    const { reply_id, reply_is_hidden } = replyToToggle; // Extract reply_id
    const isCurrentlyHidden = reply_is_hidden; // Reflect the current state
    const newVisibilityState = !isCurrentlyHidden; // Toggle the visibility state

    const endpoint = reply_is_hidden
      ? `/admin/hideReply`
      : `/admin/unhideReply`; // Decide the endpoint based on current state

    try {
      await Instance.post(endpoint, {
        reply_id,
        hide_status: newVisibilityState ? true : false,
      });

      // Update the replies list to reflect the new visibility
      const updatedComments = comments.map((com) => {
        if (com.id === comment.id) {
          return {
            ...com,
            replies: com.replies.map((r) => {
              if (r.reply_id === reply_id) {
                return { ...r, reply_is_hidden: newVisibilityState }; // Update visibility in state
              }
              return r;
            }),
          };
        }
        return com;
      });

      setComments(updatedComments); // Update the comments state

      // Close the modal and reset the state
      setIsReplyToggleModalOpen(false);
      setReplyToToggle(null);
    } catch (error) {
      console.error("Failed to toggle reply visibility:", error);
    }
  };

  return (
    <>
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
              onClick={() =>
                onToggleVisibility(
                  comment.comment_id,
                  comment.comment_is_hidden
                )
              }
              className="text-red-500 hover:text-red-700"
            >
              {comment.comment_is_hidden ? <FaEyeSlash /> : <FaEye />}
            </button>
            <button
              onClick={() => onDelete(comment.blog_id, comment.comment_id)}
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
          {showReplies ? (
            <div className="inline-flex items-center gap-2">
              Hide Reply <BiUpArrow className="mt-1" />{" "}
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 ">
              Show Reply <BiDownArrow className="mt-1" />{" "}
            </div>
          )}
        </button>
        {showReplies && comment.replies && comment.replies.length > 0 && (
          <ul className="mt-4 ml-6 space-y-2">
            {comment.replies.map((reply) => (
              <li
                key={reply.reply_id}
                className="text-sm bg-gray-100 rounded-md p-2"
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
                <p className="text-sm text-t-primary font-semibold">
                  {reply.reply_username}
                </p>
                <p className="mt-1 text-sm text-green-600">{reply.reply}</p>

                <button
                  onClick={() => handleReplyVisibilityToggle(reply)}
                  className="text-red-500 hover:text-red-700"
                >
                  {reply.reply_is_hidden ? <FaEyeSlash /> : <FaEye />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
      <ConfirmModal
        isOpen={isReplyToggleModalOpen}
        onConfirm={confirmReplyToggleVisibility} // Correctly assign the confirm function here
        onCancel={() => setIsReplyToggleModalOpen(false)}
        message={`Are you sure you want to ${
          isReplyHidden ? "unhide" : "hide"
        } this reply?`}
        btn1="Cancel"
        btn2={isReplyHidden ? "Unhide" : "Hide"}
      />
    </>
  );
};

export default CommentItem;
