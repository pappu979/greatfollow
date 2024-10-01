import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./help/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./component/header";
import SignIn from "./signin";
import ForgotPassword from "./forgot";
import Service from "./service";
import Blog from "./blog";
import Signup from "./signup";
import About from "./about";
import SmmPanel from "./smmpanel";
import ContactPage from "./contact";
import FooterBottom from "./component/FooterBottom";



const App = () => {
    return (
       <Router>
        <ScrollToTop></ScrollToTop>
        <Header></Header>
        <Routes>
            <Route path="/" element={<SignIn></SignIn>}></Route>
            <Route path="/services" element={<Service></Service>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/forgot" element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path="/smmpanel" element={<SmmPanel></SmmPanel>}></Route>
             <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        </Routes>
        <FooterBottom></FooterBottom>
       </Router>

    )
}

export default App;