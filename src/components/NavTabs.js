import React from "react";


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="d-flex flex-md-row align-items-center border-bottom nav">
      <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
        <span className="name">Braulio's Portfolio</span>
      </a>

      <ul className="d-inline-flex mt-2 mt-md-0 ms-md-auto nav-pills">
        <li className="nav-item me-3 py-2  text-decoration-none">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link  active" : "nav-link"}
          >
            About Me
          </a>
        </li>
        <li className="nav-item me-3 py-2  text-decoration-none">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item me-3 py-2  text-decoration-none">
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item me-3 py-2  text-decoration-none">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
