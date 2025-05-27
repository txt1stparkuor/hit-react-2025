import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import { useRoutes, Navigate, useNavigate } from "react-router-dom";
import "./styles/index.scss";
import Profile from "./pages/Profile/Profile";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const navigate=useNavigate()
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setIsAuthenticated(true);
      setAuthToken(storedToken);
    }
  }, []);

  const handleLoginSuccess = (token) => {
    setIsAuthenticated(true);
    setAuthToken(token);
    localStorage.setItem("authToken", token);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthToken(null);
    localStorage.removeItem("authToken");
    navigate("/")
  };

  let element = useRoutes([
    {
      path: "/",
      element: (
        <Home isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      ),
    },
    {
      path: "/signin",
      element: isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <SignIn onLoginSuccess={handleLoginSuccess} />
      ),
    },
    {
      path: "/profile",
      element: <Profile  onLogout={handleLogout}/>,
    },
  ]);

  return <>{element}</>;
}

export default App;
