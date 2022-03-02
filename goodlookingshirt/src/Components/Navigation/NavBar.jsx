import React from 'react'


const NavBar = () => {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="/logo.png" width="50" alt=""/>
        </a>
        <a className="navbar-brand" href="#">GoodLooking Shirts</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <nav class="navbar navbar-light bg-light">
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
            </ul>
        </div>
    </div>
</nav>
)
}

export default NavBar