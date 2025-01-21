"use client";
import React, { useEffect } from "react";

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll(".cards .card-item");
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center",
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "bottom bottom",
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: "50% " + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pt-0" id="included">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Наш план</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Что входит в <span className="fw-200">обучение.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <span className="tag">Бесплатно</span>
                    </div>
                    <h4>Знакомство</h4>
                  </div>
                  <div>
                    <p>
                      На первой встрече мы пообщаемся и определимся с{" "}
                      <span className="main-color">целями</span>. После этого я составлю{" "}
                      <span className="main-color">план обучения</span> и согласую{" "}
                      <span className="main-color">расписание</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <span className="tag">Теория</span>
                      <span className="tag">Свой проект</span>
                    </div>
                    <h4>Онлайн занятия</h4>
                  </div>
                  <div>
                    <p>
                      Каждый блок будет включать занятия с{" "}
                      <span className="main-color">теоретической частью</span> и написание
                      <span className="main-color">собственного проекта</span> по техническому
                      заданию и дизайну.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <span className="tag">Бесплатно</span>
                      <span className="tag">24/7</span>
                    </div>
                    <h4>Общение в чате</h4>
                  </div>
                  <div>
                    <p>
                      Всегда можешь написать мне{" "}
                      <span className="main-color">по вопросам разработки</span>, или чтобы{" "}
                      <span className="main-color">просто пообщаться</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <span className="tag">Актуально</span>
                    </div>
                    <h4>Регулярный разбор новостей в мире IT</h4>
                  </div>
                  <div>
                    <p>
                      Уследить за всеми новостями самостоятельно и выделить важное в такой{" "}
                      динамической сфере очень сложно, когда не имеешь достаточно опыта.{" "}
                      <span className="main-color">На каждом занятии</span> мы будем обсуждать все{" "}
                      <span className="main-color">новые технологии</span> и их{" "}
                      <span className="main-color">плюсы и минусы</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <span className="tag">Бесплатно</span>
                    </div>
                    <h4>Наставничество после обучения</h4>
                  </div>
                  <div>
                    <p>
                      После окончания блока обучения ты можешь рассчитывать на мою{" "}
                      <span className="main-color">поддержку</span>, я{" "}
                      <span className="main-color">всегда на связи</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">И еще много других приятных мелочей</h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
