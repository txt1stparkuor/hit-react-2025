import "./styles/index.scss";
import Home from "./pages/Home/Home";
import { useRoutes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
function App() {
  const elements = useRoutes([
    { path: "/", element: <Home></Home> },
    { path: "/about-us", element: <AboutUs></AboutUs> },
    { path: "contact", element: <Contact></Contact> },
    { path: "login", element: <Login></Login> },
    { path: "register", element: <Register></Register> },
  ]);
  return elements;
}

export default App;
