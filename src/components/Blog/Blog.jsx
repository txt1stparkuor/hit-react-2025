import React, { useState } from "react";
import "./styles.scss";
import InputForm from "../InputForm/InputForm";
function Blog({ blog, handleDeleteBlogs, formik }) {
  const [displayInput, setDisplayInput] = useState(false);
  return (
    <tr className="blog">
      <td>{blog.id}</td>
      <td>
        <img src={blog.image} alt={blog.name} />
      </td>
      <td>{blog.name}</td>
      <td>{blog.desc}</td>
      <td className="blog__actions">
        <button
          className="blog__action"
          onClick={() => handleDeleteBlogs(blog.id)}
        >
          Xóa
        </button>
        <button
          className="blog__action"
          onClick={() => setDisplayInput(!displayInput)}
        >
          {!displayInput && "Sửa"}
        </button>
        {displayInput && <InputForm formik={formik}></InputForm>}
      </td>
    </tr>
  );
}

export default Blog;
