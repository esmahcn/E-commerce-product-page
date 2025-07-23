import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home"; // ✅ You should create this
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Women from "./pages/Women";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/women" element={<Women />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;