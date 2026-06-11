import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Address from "./pages/Address";
import Blog from "./pages/blog";


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
         <Route path="/address" element={<Address />} />
      </Routes>
    </Router>
  );
}

export default App;