import { useState, useEffect } from "react";
import Instance from "./Instance";
import CommentItem from "./comment/CommentItem";
import Pagination from "./comment/Pagination";
import ConfirmModal from "./comment/ConfirmModal"; // Import the ConfirmModal
import Loader from "./comment/Loader";

// CommentList Component
const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isToggleModalOpen, setIsToggleModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [commentToToggle, setCommentToToggle] = useState(null);
  // const [replies, setReplies] = useState([]);

  // Fetch comments on component mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await Instance.post("/admin/getAllComments");
        // console.log(response.data.comments[0].replies[0].reply);
        setComments(response.data.comments);
        console.log(response);
        
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
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteComment = async () => {
    if (!commentToDelete) return;

    const { blog_id, commentId } = commentToDelete;
    try {
      await Instance.post(`/admin/deleteComment`, { blog_id, commentId });
      setComments(comments.filter((comment) => comment.id !== commentId));
      setIsDeleteModalOpen(false);
      setCommentToDelete(null);
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const handleToggleVisibility = (comment_id) => {
    setCommentToToggle({ comment_id });
    setIsToggleModalOpen(true);
  };

  const confirmToggleVisibility = async () => {
    if (!commentToToggle) return;

    const { comment_id, isTrue } = commentToToggle;
    try {
      await Instance.post(`/admin/hideComment`, { comment_id, isTrue });
      setComments(
        comments.map((comment) =>
          comment.id === comment_id
            ? { ...comment, visible: !comment.visible }
            : comment
        )
      );

      setIsToggleModalOpen(false);
      setCommentToToggle(null);
    } catch (error) {
      console.error("Failed to toggle comment visibility:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredComments = comments.filter((comment) =>
    comment.comment_username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = filteredComments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <Loader />; // Display a loader component
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-center text-3xl font-bold mb-5">Comment List</h1>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="🔍 Search by Fans name..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-teal-300"
        />
      </div>

      <ul className="flex flex-wrap gap-3">
        {currentComments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onDelete={handleDeleteComment}
            onToggleVisibility={handleToggleVisibility}
          />
        ))}
      </ul>

      {filteredComments.length > commentsPerPage && (
        <Pagination
          commentsPerPage={commentsPerPage}
          totalComments={filteredComments.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}

      {/* Confirmation Modal for Deletion */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onConfirm={confirmDeleteComment}
        onCancel={() => setIsDeleteModalOpen(false)}
        message="Are you sure you want to delete this comment?"
        btn1="Cancel"
        btn2="Delete"
      />

      {/* Confirmation Modal for Toggling Visibility */}
      <ConfirmModal
        isOpen={isToggleModalOpen}
        onConfirm={confirmToggleVisibility}
        onCancel={() => setIsToggleModalOpen(false)}
        message="Are you sure you want to toggle the visibility of this comment?"
        btn1="Cancel"
        btn2="Toggle Visibility"
      />
    </div>
  );
};

export default CommentList;
