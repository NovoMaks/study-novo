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
                  Как проходит <span className="fw-200">обучение.</span>
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
                    <h4>Онлайн знакомство</h4>
                  </div>
                  <div>
                    <p>
                      Первая встреча со всеми учениками проходит{" "}
                      <span className="main-color">индивидуально</span> онлайн. Эта встреча{" "}
                      <span className="main-color">бесплатна</span> и нужна, чтобы мы познакомились
                      получше.
                      <br />
                      Уже на первой встрече мы напишем{" "}
                      <span className="main-color">свой мини-проект</span>, который поможет понять
                      ребенку интересен ли ему формат обучения, а мне оценить уровень знаний
                      ученика.
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
                      <span className="tag">Индивидуально</span>
                    </div>
                    <h4>Формирование группы</h4>
                  </div>
                  <div>
                    <p>
                      Группа формируется{" "}
                      <span className="main-color">на основании тех результатов</span>, которые были
                      получены на пробном онлайн-занятии. В среднем в группе учатся{" "}
                      <span className="main-color">5-7 человек</span>, что позволяет уделить
                      необходимое время каждому и ответить на все вопросы.
                      <br />
                      Расписание состовляется в зависимости от{" "}
                      <span className="main-color">пожеланий всех учеников</span>. И только после
                      этого заключается{" "}
                      <span className="main-color">договор и производится оплата</span>.
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
                      <span className="tag">Командная работа</span>
                    </div>
                    <h4>Обучение</h4>
                  </div>
                  <div>
                    <p>
                      Моя цель - это не только научить программировать, но и познакомить ученика со
                      всеми <span className="main-color">этапами проектной деятельности</span>.
                      <br />
                      Работа над каждым проектом максимально приближена к тому, как это проходит на
                      <span className="main-color">реальной работе разработчика</span>. Большое
                      внимание уделяется <span className="main-color">работе в команде</span>, а
                      результатом станет{" "}
                      <span className="main-color">собственная игра, приложение или сайт</span>.
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
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <span className="tag">24/7</span>
                    </div>
                    <h4>Общение в чате</h4>
                  </div>
                  <div>
                    <p>
                      У нас будет общий чат на всю команду, где мы сможем обсуждать свой проект,
                      делиться своими{" "}
                      <span className="main-color">предложениями и наработками</span>, задавать{" "}
                      <span className="main-color">любые вопросы</span> по разработке.
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
                      <span className="tag">Есть чем гордиться</span>
                    </div>
                    <h4>Защита своего проекта</h4>
                  </div>
                  <div>
                    <p>
                      В конце каждого курса мы делаем{" "}
                      <span className="main-color">презентацию нашего продукта</span>, где каждый
                      ученик расскажет о своей работе и продемонстрирует ее в реальном времени. Это
                      развивает привычку{" "}
                      <span className="main-color">доводить дела до завершения</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/7.jpg" alt="" />
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
