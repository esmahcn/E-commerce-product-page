import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home"; // ✅ You should create this

import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      
        <Route path="/contact" element={<Contact />} />
         <Route path="/Blog" element={<Blog />} />
    
        <Route path="/Shop" element={<ProtectedRoute>{<Shop />}</ProtectedRoute>} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;