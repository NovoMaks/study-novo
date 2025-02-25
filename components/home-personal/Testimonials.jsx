"use client";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: "auto",

    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: "auto",
      },
    },

    navigation: {
      nextEl: ".testim-modern .swiper-button-next",
      prevEl: ".testim-modern .swiper-button-prev",
    },
  };
  return (
    <section
      className="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd"
      id="review"
    >
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Отзывы</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Мне <span className="fw-200">доверяют.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper3 out-right"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
          >
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p className="fz-15">
                      “Очень довольны курсами по Scratch! Ребёнок с радостью бежал на занятия, а
                      дома продолжал увлечённо создавать свои проекты. Максим находит подход к
                      каждому, объясняет доступно и интересно. Рекомендую всем, кто хочет, чтобы
                      ребёнок развивал логику и творческое мышление!”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p className="fz-15">
                      “Ребёнок с нуля начал изучать программирование, и уже через месяц показывал
                      нам свои проекты. Очень нравится, что занятия проходят в игровой форме, но при
                      этом дети учатся серьёзным вещам. Спасибо за такой подход!”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p className="fz-15">
                      “Курсы веб-разработки просто супер! Видно, что программа продумана. Ребёнок не
                      только учится, но и получает огромное удовольствие от процесса”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p className="fz-15">
                      “Сын начал с нуля, а сейчас уже самостоятельно создаёт простые сайты. Максим
                      объясняют всё очень доступно, а главное — ребёнок действительно увлечён.
                      Спасибо за такие интересные и полезные занятия”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
