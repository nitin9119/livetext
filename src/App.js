import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import {Products} from './Components/Products';
import ProductsDetail from './Components/ProductsDetail';
import Login from './Components/Features/FormSecond';
import Register from './Components/Features/Register';



function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        
        <Route path = "/" element={isLoggedIn ? <Home/> : <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path = "/About" element={<About />}></Route>        
        <Route path="/products" element={isLoggedIn ? <Products/> : <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/products/:prod_id" element={<ProductsDetail/>}></Route>
        <Route path = "*" element = {<div>page not found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
