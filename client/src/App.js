import "./App.css";
// import Login from './components/Login';
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/blog" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
