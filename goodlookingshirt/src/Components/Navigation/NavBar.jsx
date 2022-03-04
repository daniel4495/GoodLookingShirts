import React from 'react'
import CartWidget from '../Cart/CartWidget'
<link rel="stylesheet" href="/NavBar.css" />

const NavBar = () => {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src="/logo.png" width="50" alt="logo de la pagina"/>
        </a>
        <a className="navbar-brand" href="#">GoodLooking Shirts</a>
        <nav className="navbar navbar-light bg-light">
        </nav>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Coleccion</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Accesorios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Rebajas</a>
                </li>
                <li className="nav-img-right">
                    <a className="nav-link active" aria-current="page" href="#"><CartWidget></CartWidget></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}

export default NavBar