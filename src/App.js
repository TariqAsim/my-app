import "./App.css";
import NavBar from "./Components/Pages/NavBar";
import HomePage from "./Components/Pages/homePage";
import Contact from "./Components/Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Pages/Layout";
import Cart from "./Components/Pages/Cart";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
