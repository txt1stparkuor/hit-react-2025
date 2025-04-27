import React from "react";
import "./styles.scss";
import Blog from "../Blog/Blog";

function Blogs({blogs, handleDeleteBlogs, formik}) {
  return (
    <table className="blogs">
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
            return <Blog blog={blog} key={blog.id} handleDeleteBlogs={handleDeleteBlogs} formik={formik}></Blog>
        })}
      </tbody>
    </table>
  );
}

export default Blogs;
