// @flow
import * as React from "react";

type Blog = {
  id:number,
  title:string,
  author:string
}
type Props = {
  blogs: array<Blog>,
  blogTitle: string,
  handleDelete: (id: number) => void
};

export const BlogList = ({ blogs, blogTitle, handleDelete }: Props): React.Node => {
    return (
      <div>
        <h1>{blogTitle}</h1>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <h5>{blog.body}</h5>
            <p>Written by {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}> delete post</button>
          </div>
        ))}
      </div>
    );
  };
  

export default BlogList;
