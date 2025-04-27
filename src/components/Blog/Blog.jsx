import React, { useState } from "react";
import "./styles.scss";
import InputForm from "../InputForm/InputForm";
function Blog({ blog, handleDeleteBlogs, handleEditBlogs }) {
  const [displayInput, setDisplayInput] = useState(false);
  const handleDisplayInput = () => {
    setDisplayInput(!displayInput);
  };
  return (
    <tr className="blog">
      <td>{blog.id}</td>
      <td className="blog__img">
        <img src={blog.image} alt={blog.name} />
      </td>
      <td>{blog.name}</td>
      <td>{blog.desc}</td>
      <td className="blog__actions">
        {!displayInput && (
          <button
            className="blog__action"
            onClick={() => handleDeleteBlogs(blog.id)}
          >
            Xóa
          </button>
        )}
        <button className="blog__action" onClick={handleDisplayInput}>
          {!displayInput && "Sửa"}
        </button>
        {displayInput && (
          <InputForm
            formType="edit"
            handleEditBlogs={handleEditBlogs}
            blogId={blog.id}
            handleDisplayInput={handleDisplayInput}
          ></InputForm>
        )}
      </td>
    </tr>
  );
}

export default Blog;
