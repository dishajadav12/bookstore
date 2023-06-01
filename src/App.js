import './App.css';
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Components/Home';
import { Register } from './Components/Register.js';
import { Login } from './Components/Login/Login';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookStore } from './Components/Bookstore'
import { useEffect, useState } from 'react';
import { MainNavigation } from './Components/MainNavigation';
import { Footer } from './Components/Footer/Footer';
import { Headers } from './Components/Header/Headers';
const App = () => {
  // const [isLogin,setIsLogin] = useState(localStorage.getItem("isLogin"));
  const isLogin = localStorage.getItem("isLogin");
  useEffect(() => {
    // console.log(isLogin);
    localStorage.setItem("isLogin",false);
    console.log(localStorage.getItem("isLogin"));
  });
  return (
    <div>
      <BrowserRouter>
        <Headers/>
        <ToastContainer />
        <MainNavigation />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;