import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
import Sidebar from "./components/SideBar";
import PricingPlan from "./routes/PricingPlan";
import Header from "./components/Header";
import Help from "./routes/Help";
import TermsOfService from "./routes/TermsOfService";
import TrustAndSafety from "./routes/TrustAndSafety";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import FAQ from "./routes/FAQ";
import { setUser } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";
import PropertyDetails from "./routes/PropertyDetails";

// function App() {
//   const [properties, setProperties] = useState([]);
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const properties = await fetch(
//         "http://localhost:3003/properties/all"
//       ).then((res) => res.json());

//       const blogs = await fetch("http://localhost:3003/blogs/all").then(
//         (res) => res.json
//       );

//       setProperties(properties);
//       setBlogs(blogs);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div
//       style={{
//         margin: 0,
//         padding: 0,
//         border: 0,
//         boxSizing: "border-box",
//       }}
//     >
//       <BrowserRouter>
//         <Navbar />
//         <Sidebar />
//         <div style={{ marginLeft: "4rem" }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/show-properties"
//               element={<ShowProperties type={"all"} />}
//             />
//             <Route
//               path="/show-properties/rent"
//               element={<ShowProperties type={"rent"} />}
//             />
//             <Route
//               path="/show-properties/sale"
//               element={<ShowProperties type={"sale"} />}
//             />
//             <Route path="/about-us" element={<About />} />
//             <Route path="/login" element={<SignIn />} />
//             <Route path="/register" element={<SignUp />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/adminControl" element={<AdminControl />} />
//             <Route path="/list-property" element={<ListProperty />} />
//             <Route path="/blogs" element={<Blogs blogs={blogs} />} />
//             <Route path="/compose-blog" element={<ComposeBlog />} />
//             <Route path="/pricing-plans" element={<PricingPlan />} />
//             <Route path="/help" element={<Help />} />
//             <Route path="/FAQ" element={<FAQ />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/trust-and-safety" element={<TrustAndSafety />} />
//             <Route path="/terms-of-service" element={<TermsOfService />} />
//             <Route path="/admin-control" element={<AdminControl />} />
//             <Route path="/*" element={<h1>Error - Page not found</h1>} />
//           </Routes>
//           <Footer />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }

const propertiesLoader = async () => {
  const properties = await fetch("http://localhost:3003/properties/all").then(
    (res) => res.json()
  );

  return properties;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <Home />
          <Footer />
        </div>
      </>
    ),
    loader: propertiesLoader,
  },
  {
    path: "/show-properties",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <ShowProperties type={"all"} />
          <Footer />
        </div>
      </>
    ),
    loader: propertiesLoader,
  },
  {
    path: "/show-properties/rent",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <ShowProperties type={"rent"} />
          <Footer />
        </div>
      </>
    ),
    loader: propertiesLoader,
  },
  {
    path: "/show-properties/sale",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <ShowProperties type={"sale"} />
          <Footer />
        </div>
      </>
    ),
    loader: propertiesLoader,
  },
  {
    path: "/about-us",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <About />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <SignIn />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <SignUp />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <Profile />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/list-property",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <ListProperty />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <Blogs />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/compose-blog",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <ComposeBlog />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/pricing-plans",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <PricingPlan />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/help",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <Help />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/FAQ",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <FAQ />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <PrivacyPolicy />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/trust-and-safety",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <TrustAndSafety />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/terms-of-service",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <TermsOfService />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/admin-control",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <AdminControl />
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/propertyDetails",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <PropertyDetails />
          <Footer />
        </div>
      </>
    ),
    loader: propertiesLoader,
  },
  {
    path: "/*",
    element: (
      <>
        <Navbar />
        <Sidebar />
        <div style={{ marginLeft: "4rem" }}>
          <h1 style={{ padding: "20rem", fontSize: "4rem" }}>
            404 : Page not found
          </h1>
          <Footer />
        </div>
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
