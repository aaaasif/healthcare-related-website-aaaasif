import React from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    const heartIcon = <FontAwesomeIcon icon={faHeartbeat} />
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light header">
              <div class="container-fluid">
               <div>
                    <Link class="navbar-brand logo text-info" href="#">{heartIcon}Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
               </div>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="#">services</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="#">doctors</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="#">book</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="#">review</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="#">blogs</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="#">Login</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="#">SignUp</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    );
};

export default Header;

// {/* <header className="header ">
//                 <Link href="#home" className="logo">{heartIcon} <span className=".text-dark">MediLab.</span></Link>
    
//                 <nav className="navbar">
//                     <a href="#home">home</a>
//                     <a href="#services">services</a>
//                     <a href="#about">about</a>
//                     <a href="#doctors">doctors</a>
//                     <a href="#book">book</a>
//                     <a href="#review">review</a>
//                     <a href="#blogs">blogs</a>
//                 </nav>
    
//                 <div id="menu-btn" className="fas fa-bars"></div>
//             </header> */}