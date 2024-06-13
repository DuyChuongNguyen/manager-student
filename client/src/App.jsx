import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CreateStudent from "./pages/CreateStudent";
import UpdateStudent from "./pages/UpdateStudent";
import DeleteStudent from "./pages/DeleteStudent";
import ShowStudent from "./pages/ShowStudent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
const App = () => {
  const location = useLocation();
  const showNavbarAndFooter = !["/login", "/register"].includes(
    location.pathname
  );
  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students/details/:id" element={<ShowStudent />} />
        <Route path="/students/create" element={<CreateStudent />} />
        <Route path="/students/update/:id" element={<UpdateStudent />} />
        <Route path="/students/delete/:id" element={<DeleteStudent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

export default App;
