/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import Instance from "./Instance";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import confirm alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

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

  const showConfirmDialog = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this blog?',
      buttons: [
        {
          label: 'Yes',
          onClick: handleDelete, // Call the handleDelete function on confirmation
        },
        {
          label: 'No',
          onClick: () => {} // Do nothing on cancellation
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  return (
    <div>
      <Button
        onClick={showConfirmDialog}
        className="mt-2 focus:outline-none text-white hover:bg-black h-6 text-center flex justify-center items-center"
      >
        Delete
      </Button>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default DeleteBlog;
