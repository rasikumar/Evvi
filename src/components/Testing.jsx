// import { useState, useEffect } from "react";
// import Instance from "../../Admin/Instance";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await Instance.post("/getAllBlogs");
//         setBlogs(response.data.blogs);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load blogs");
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

// font-normal leading-tight text-xs text-justify