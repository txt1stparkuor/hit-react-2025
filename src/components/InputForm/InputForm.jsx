import React from "react";
import { useFormik } from "formik";
function InputForm(props) {
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      image: "",
      desc: "",
    },
    onSubmit: (values) => {
      if (props.formType === "add") props.handleAddBlogs(values);
      else if (props.formType === "edit")
        props.handleEditBlogs(props.blogId, values);
    },
  });
  return (
    <form className="input" onSubmit={formik.handleSubmit}>
      <div className="input-wrap">
        <label htmlFor="id">id:</label>
        <input
          type="text"
          id="id"
          name="id"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
      </div>
      <div className="input-wrap">
        <label htmlFor="image">image:</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
      </div>
      <div className="input-wrap">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div className="input-wrap">
        <label htmlFor="desc">Description:</label>
        <input
          type="text"
          id="desc"
          name="desc"
          onChange={formik.handleChange}
          value={formik.values.desc}
        />
      </div>
      {props.formType === "add" ? (
        <button type="submit">Thêm mới</button>
      ) : (
        <button type="submit">Lưu thay đổi</button>
      )}
      {props.formType === "edit" && props.handleDisplayInput && (
        <button type="button" onClick={props.handleDisplayInput}>
          Hủy
        </button>
      )}
    </form>
  );
}

export default InputForm;
