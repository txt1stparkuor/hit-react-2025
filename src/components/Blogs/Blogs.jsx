import React from "react";
import "./styles.scss";
import Blog from "../Blog/Blog";

function Blogs({blogs, handleDeleteBlogs, handleEditBlogs}) {
  return (
    <table className="blogs" border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>ảnh</th>
          <th>tên blogs</th>  
          <th>mô tả</th>  
          <th>action</th>  
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog)=> {
            return <Blog blog={blog} key={blog.id} handleDeleteBlogs={handleDeleteBlogs} handleEditBlogs={handleEditBlogs}></Blog>
        })}
      </tbody>
    </table>
  );
}

export default Blogs;
