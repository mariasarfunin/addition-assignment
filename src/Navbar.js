import React from 'react';

const Navbar = () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              All Types
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" >Clothes</a></li>
              <li><a class="dropdown-item" >Electronic</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" >Something else here</a></li>
            </ul>

            <div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page">Popular Products </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" >Low Price</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" >High Price</a>
                </li>
                </ul>
                </div>

            <div>
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Price
              </a>
            </div>
      </div>
  </nav>
  );
}

export default Navbar;