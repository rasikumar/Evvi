import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import axios from "axios";

const CreateBlog = () => {
  const [content, setContent] = useState("");
  const [head, setHead] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null); // State to handle image upload
  const quillRef = useRef(null); // Ref to access Quill editor instance

  // Handle content change
  const handleContentChange = (value) => {
    setContent(value);
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Set image to state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", head);
    formData.append("author", author);
    formData.append("content", content);
    if (image) {
      formData.append("image", image); // Append image to formData
    }

    try {
      const response = await axios.post("/api/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Blog submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        ["bold", "italic", "underline", "strike"],
        ["link", "image"], // Add image button to toolbar
        ["clean"],
      ],
    },
  };

  return (
    <div className="flex max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="w-1/2 pr-4">
        <h2 className="text-2xl font-bold mb-6">Create a New Blog</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              value={head}
              onChange={(e) => setHead(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Image
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Content
            </label>
            <ReactQuill
              ref={quillRef}
              value={content}
              onChange={handleContentChange}
              placeholder="Write your blog content here..."
              modules={modules}
              className="mt-1 block w-full h-96 overflow-y-scroll border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>

      <div className="w-1/2 border p-4 quill-preview">
        <h2 className="text-2xl font-bold mb-2">Preview</h2>
        <hr />
        <div className="flex flex-col gap-4 mb-4 mt-2">
          <h3 className="text-2xl">{head}</h3>
          <p className="text-t-primary text-sm">By - {author}</p>
        </div>
        <div
          className="quill-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default CreateBlog;
