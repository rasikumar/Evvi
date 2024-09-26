/* eslint-disable react/prop-types */
const BlogPost = ({ blog }) => {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-semibold underline">{blog.blog_title}</h2>
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
    );
  };
  
  export default BlogPost;
  