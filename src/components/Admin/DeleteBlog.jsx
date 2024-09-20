/* eslint-disable react/prop-types */
import Instance from "./Instance";
import { useState } from "react";

const DeleteBlog = ({ blogId, setBlogs }) => {
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      await Instance.delete(`/admin/deleteBlog/${blogId}`);
      // Update the blogs state to remove the deleted blog
      setBlogs((prev) => prev.filter((blog) => blog.id !== blogId));
    } catch (err) {
      setError("Failed to delete blog");
      console.error("Delete blog error:", err);
    }
  };

  return (
    <div>
      <button onClick={handleDelete} className="text-red-500 bg-emerald-400">
        Delete
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default DeleteBlog;
