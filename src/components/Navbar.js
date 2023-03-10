import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Online E-Commerce Site</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active"  aria-current="page"><Link to="/home">Home</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><Link to="/">Link</Link></a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
