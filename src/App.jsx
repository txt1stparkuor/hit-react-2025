import React, { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import { useFormik } from "formik";
import "./styles/index.scss";
import "./App.scss";
import InputForm from "./components/InputForm/InputForm";
function App() {
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      image: "",
      desc: "",
    },
    onSubmit: (values) => {
      setBlogs(b=> [...b,values])
    },
  });
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      name: "Cooking with magic",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
      desc: "nau an",
    },
  ]);
  const handleDeleteBlogs=(id) => {
    const updatedBlogs= blogs.filter((blog) => blog.id!==id);
    setBlogs(updatedBlogs);
  }
  const handleEditBlogs=(id, updated) => {
    const updatedBlogs= blogs.map((blog) => {
      if (blog.id === id) return {...blog, ...updated }
      else return blog;
    })
    setBlogs(updatedBlogs)
  }
  return (
    <div className="container">
      <div className="wrapper">
        <h1>Quản lý Blog</h1>
      </div>
      <InputForm formik={formik}></InputForm>
      <Blogs blogs={blogs} handleDeleteBlogs={handleDeleteBlogs} formik={formik}></Blogs>
    </div>
  );
}

export default App;
