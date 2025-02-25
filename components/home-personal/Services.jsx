import React from "react";

function Services() {
  return (
    <section className="services-clas pb-0" id="class">
      <div className="container section-padding pt-0 pb-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Обучение</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Мои <span className="fw-200">курсы.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <h5>Основы веб-разработки</h5>
              <div className="text mt-40 mb-40">
                <p>
                  Мы познакомимся с блочными инструментами, такими как Tilda, изучим HTML, CSS,
                  JavaScript, а также рассмотрим основные шаги создания сайта: от планирования и
                  дизайн-макета до верстки и разработки.
                </p>
              </div>
              <div className="price">
                <h5>
                  <span className="main-color">10-14</span> лет
                </h5>
              </div>
              <div className="vi-more mt-40">
                <a
                  target="_blank"
                  href="https://t.me/novms"
                  className="butn butn-sm butn-bord radius-30"
                >
                  <span>Записаться</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <h5>Фронтенд разработчик</h5>
              <div className="text mt-40 mb-40">
                <p>
                  Мы не просто учимся писать код, но и создавать стильные и удобные веб-приложения:
                  разрабатывать дизайн, продумывать пользовательские сценарии и размещать готовый
                  проект на сервере.
                </p>
              </div>
              <div className="price">
                <h5>
                  <span className="main-color">15-18</span> лет
                </h5>
              </div>
              <div className="vi-more mt-40">
                <a
                  target="_blank"
                  href="https://t.me/novms"
                  className="butn butn-sm butn-bord radius-30"
                >
                  <span>Записаться</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>Визуальное программирование</h5>
              <div className="text mt-40 mb-40">
                <p>
                  Осваиваем базовые принципы программирования с помощью детского языка Scratch и
                  разрабатываем креативные проекты — от элементарной анимации до полноценных игр и
                  мультфильмов.
                </p>
              </div>
              <div className="price">
                <h5>
                  <span className="main-color">8-10</span> лет
                </h5>
              </div>
              <div className="vi-more mt-40">
                <a
                  target="_blank"
                  href="https://t.me/novms"
                  className="butn butn-sm butn-bord radius-30"
                >
                  <span>Записаться</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
