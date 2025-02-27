"use client";
import isInView from "@/common/isInView";
import React, { useEffect } from "react";

function Intro() {
  function handleShowProgressValues() {
    isInView({
      selector: ".skill-progress .progres",
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute("data-value");
      },
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", handleShowProgressValues);
    return () => window.removeEventListener("scroll", handleShowProgressValues);
  }, []);
  return (
    <section className="team-single section-padding pt-0" id="when">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Где сейчас</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Ближайший <span className="fw-200">курс.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg justify-content-around bord">
          <div className="col-lg-5">
            <div className="img md-mb50">
              <img src="/assets/imgs/team/11.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h2>Основы веб-разработки</h2>
              <h6 className="sub-title main-color mt-10">
                Коломна <span className="p-color">(свой ноутбук)</span>
              </h6>
              <div className="text mt-15">
                <p>
                  В наше время сайт нужен всем, кто хочет заявить о себе, своем деле или увлечениях.
                  Какую бы профессию ребенок ни выбрал в будущем, умение создавать сайты станет для
                  него серьезным плюсом и поможет выделиться среди других.
                </p>
              </div>
              <div className="info mt-30">
                <ul className="rest">
                  <li className="mb-25 fz-18">
                    <span className="sub-title mr-15">Возраст :</span> 12-14 лет
                  </li>
                  <li className="mb-25 fz-18">
                    <span className="sub-title mr-15">Количество занятий :</span> 10
                  </li>
                  <li className="mb-25 fz-18">
                    <span className="sub-title mr-15">Длит. занятия :</span> 90 мин
                  </li>
                  <li className="mb-25 fz-18">
                    <span className="sub-title mr-15">Старт :</span> 01.05.2025
                  </li>
                  <li className="fz-18">
                    <span className="main-color">1000 ₽</span> / занятие
                  </li>
                </ul>
                <p className="text fz-14">Скидка на оплату всех занятий разом</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg justify-content-around mt-80">
          <div className="col-lg-6 valign">
            <div className="text md-mb50">
              <h4 className="mb-15">Где и когда проходит</h4>
              <p>Коломна, ул.Октябрьской революции, 366/2 (просторное офисное помещение).</p>
              <p>Занятия будут проходить в субботу и воскресенье.</p>
              <h4 className="mb-15 mt-15">Чему научимся</h4>
              <p>
                <span className="main-color">-</span> Мы изучим основы HTML, CSS, JavaScript, а
                также рассмотрим основные шаги создания сайта: от планирования и дизайн-макета до
                верстки и разработки. Познакомимся с блочными инструментами, такими как Tilda.
              </p>
              <p>
                <span className="main-color">-</span> Разработаем полноценный проект, который ляжет
                в основу портфолио веб-дизайнера и веб-разработчика
              </p>
              <div className="vi-more mt-20">
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
          <div className="col-lg-5">
            <div className="skills-box">
              <div className="skill-item mb-30">
                <h5 className="sub-title mb-15">HTML/CSS</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="60%"></div>
                </div>
              </div>
              <div className="skill-item mb-30">
                <h5 className="sub-title mb-15">JavaScript</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="30%"></div>
                </div>
              </div>
              <div className="skill-item mb-30">
                <h5 className="sub-title mb-15">Figma</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="30%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h5 className="sub-title mb-15">Tilda</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="25%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
