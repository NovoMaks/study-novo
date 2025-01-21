"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0",
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/p0.jpg"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <p className="mb-15 text">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/header/hi.png" alt="" />
                </span>{" "}
                Всем привет, меня зовут
              </p>
              <h1 className="fw-700 mb-10">
                Максим <span className="main-color">Новосельцев</span>
              </h1>
              <h3>Веб-разработчик и наставник</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>Стану вашим проводником в мир веб-разработки</p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      target="_blank"
                      href="https://t.me/novms"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Написать</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img src="/assets/imgs/icon-img/arrow-down-big.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
