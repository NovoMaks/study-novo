"use client";
import React, { useEffect } from "react";

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleToggleNav() {
    if (document.querySelector(".navbar .navbar-collapse").classList.contains("show")) {
      document.querySelector(".navbar .navbar-collapse").classList.remove("show");
    } else if (!document.querySelector(".navbar .navbar-collapse").classList.contains("show")) {
      document.querySelector(".navbar .navbar-collapse").classList.add("show");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="#">
          <img src="/assets/imgs/logo-light.svg" alt="Novo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Обо мне</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">План обучения</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Для кого</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Стоимость</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Образование</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Отзывы</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Запись</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a href="/page-contact" className="butn butn-sm butn-bg main-colorbg radius-5">
            <span className="text">Написать мне</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
