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
                      “Долго искала курсы, которые помогут мне не просто выучить теорию, но и начать
                      писать полноценные проекты. Здесь нашла всё, что нужно! Максим отлично
                      объясняет сложные темы простыми словами, а работа над реальными задачами дала
                      уверенность в своих силах. Спасибо за крутой старт в разработке!”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/1.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <span className="p-color opacity-8 fz-15 mt-5">Игорь С.</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p className="fz-15">
                      “Проходил курс для улучшения навыков JavaScript и React. Очень понравилось,
                      как подробно разбираются кейсы и как преподаватель помогал с реальными
                      проблемами из моей работы. После курса я стал быстрее решать задачи и
                      увереннее чувствую себя в команде. Всем рекомендую!”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/1.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <span className="p-color opacity-8 fz-15 mt-5">Мария Л.</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p className="fz-15">
                      “Вместе с подругой записались на занятия в паре, и это был супер-опыт! Мы не
                      только выучили основы веб-разработки, но и сделали свой первый сайт. Максим
                      отлично организует процесс, помогает каждому, и атмосфера на занятиях всегда
                      дружелюбная. Спасибо за вдохновение!”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/1.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <span className="p-color opacity-8 fz-15 mt-5">Ольга П.</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p className="fz-15">
                      “Я всегда думала, что программирование — это сложно и непонятно. Но благодаря
                      этим курсам смогла создать свой первый сайт с нуля! Наставник невероятно
                      терпеливый и всегда готов помочь, даже если задаёшь самые базовые вопросы.
                      Теперь я уверена, что смогу развиваться в этой сфере.”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/1.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <span className="p-color opacity-8 fz-15 mt-5">Екатерина В.</span>
                    </div>
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
