import React from 'react';
import { useState } from 'react';
import {Link } from "react-router-dom";

function Navbar({isLoggedIn, setIsLoggedIn}) {


  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-shope</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" to="/products">Products</Link>
        <Link class="nav-link" to="/About">About</Link>
      </div>
    </div>
    <div class="collapse navbar-collapse text-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        { !isLoggedIn ? <Link class="nav-link active" aria-current="page" to="/login">Login</Link>: <button onClick={()=>{
            setIsLoggedIn(!isLoggedIn)
        }}>Logout</button> }
        <Link class="nav-link active" to="/register">Register</Link>
       
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar