import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //navbar在scroll時的顯現及消失
  const [scrollNav, setScrollNav] = useState(true);

  window.addEventListener("scroll", () => {
    //console.log(window.scrollY);
    if (window.scrollY > 100) {
      setScrollNav(false);
    } else {
      setScrollNav(true);
    }
  });

  return (
    <div className="navImage">
      <nav className="navbar navbar-expand-lg p-3 firstNav">
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-mug-saucer"></i>
          </button>
          <Link to="/">
            <img src="images/mark.png" width="80" alt="標誌" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
              <li className="nav-item h5 topLink">
                <Link
                  className="nav-link active text-black fw-bold"
                  aria-current="page"
                  to="/about"
                >
                  關於我們
                </Link>
              </li>
              <li className="nav-item h5 topLink">
                <Link
                  className="nav-link active text-black fw-bold"
                  aria-current="page"
                  to="/meals"
                >
                  美味餐點
                </Link>
              </li>
              <li className="nav-item h5 topLink">
                <Link
                  className="nav-link active text-black fw-bold"
                  aria-current="page"
                  to="/store"
                >
                  門市據點
                </Link>
              </li>
              <li className="nav-item h5 topLink">
                <Link
                  className="nav-link active text-black fw-bold"
                  aria-current="page"
                  to="/contact"
                >
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {!scrollNav && (
        <nav className="navbar navbar-expand-lg shadow-lg p-3 fixed-top secNav">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-mug-saucer"></i>
            </button>
            <Link to="/">
              <img src="images/mark.png" width="80" alt="標誌" />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end align-items-end">
                <li className="nav-item h5 m-3">
                  <Link
                    className="nav-link active text-black fw-bold border border-3 rounded-3 border-success"
                    aria-current="page"
                    to="/about"
                  >
                    關於我們
                  </Link>
                </li>
                <li className="nav-item h5 m-3">
                  <Link
                    className="nav-link active text-black fw-bold border border-3 rounded-3 border-success"
                    aria-current="page"
                    to="/meals"
                  >
                    美味餐點
                  </Link>
                </li>
                <li className="nav-item h5 m-3">
                  <Link
                    className="nav-link active text-black fw-bold border border-3 rounded-3 border-success"
                    aria-current="page"
                    to="/store"
                  >
                    門市據點
                  </Link>
                </li>
                <li className="nav-item h5 m-3">
                  <Link
                    className="nav-link active text-black fw-bold border border-3 rounded-3 border-success"
                    aria-current="page"
                    to="/contact"
                  >
                    聯絡我們
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
