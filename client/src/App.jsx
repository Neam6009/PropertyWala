import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Profile from "./routes/Profile";
import AdminControl from "./routes/AdminControl";
import Footer from "./components/Footer";
import ShowProperties from "./routes/ShowProperties";
import ListProperty from "./routes/ListProperty";
import Blogs from "./routes/Blogs";
import ComposeBlog from "./routes/ComposeBlog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/show-properties"
          element={<ShowProperties type={"all"} />}
        />
        <Route
          path="/show-properties/rent"
          element={<ShowProperties type={"rent"} />}
        />
        <Route
          path="/show-properties/sale"
          element={<ShowProperties type={"sale"} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/adminControl" element={<AdminControl />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/compose-blog" element={<ComposeBlog />} />
        <Route path="/*" element={<h1>Error - Page not found</h1>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
