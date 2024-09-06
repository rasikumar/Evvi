import { Blogs } from "../../../constant"

const BlogPage = () => {
  return (
    <div>
      {Blogs.map((blog, index) => (
        <div key={index}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogPage
