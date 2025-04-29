import React from "react";

const navbarStyle = {
    backgroundSize: "cover",
};

const Navbar = () => {
    return (
        <nav style={navbarStyle} className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a 
                className="navbar-brand fs-1" href="#"><strong>The Best Vacation Agency</strong>
                </a>

                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav">
                        <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
                        <a className="nav-link fs-5" href="#">About</a>
                        <a className="nav-link fs-5" href="#">Services</a>
                        <a className="nav-link fs-5" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;