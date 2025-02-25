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
              <a className="nav-link" href="#about" onClick={handleToggleNav}>
                <span className="rolling-text">Обо мне</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how" onClick={handleToggleNav}>
                <span className="rolling-text">Как проходит</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#when" onClick={handleToggleNav}>
                <span className="rolling-text">Когда</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project" onClick={handleToggleNav}>
                <span className="rolling-text">Проекты</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#class" onClick={handleToggleNav}>
                <span className="rolling-text">Курсы</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#review" onClick={handleToggleNav}>
                <span className="rolling-text">Отзывы</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts" onClick={handleToggleNav}>
                <span className="rolling-text">Контакты</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            target="_blank"
            href="https://t.me/novms"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Написать</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
