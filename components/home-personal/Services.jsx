import React from "react";

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Прайс</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Сколько стоит <span className="fw-200">Обучение.</span>
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
              <h5>Индивидуальное занятие</h5>
              <div className="text mt-40 mb-40">
                <p>
                  Программа занятий адаптируется под ваши цели и уровень знаний — от новичков до
                  тех, кто хочет углубиться в разработку или освоить новую технологию. Станьте
                  уверенным разработчиком под моим руководством
                </p>
              </div>
              <div className="price">
                <h5>
                  <span className="main-color">2500 ₽</span> / 1,5 часа
                </h5>
              </div>
              <div className="vi-more mt-40">
                <a href="/page-services" className="butn butn-sm butn-bord radius-30">
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
              <h5>Занятие в паре</h5>
              <div className="text mt-40 mb-40">
                <p>
                  Заниматься вдвоем — это не только весело, но и полезно! Приходите с другом и
                  окунитесь в мир веб-разработки вместе. Занимаясь в паре, вы получите не только
                  знания, но и опыт командной работы — важный навык для каждого разработчика
                </p>
              </div>
              <div className="price">
                <h5>
                  <span className="main-color">4500 ₽</span> / 1,5 часа
                </h5>
              </div>
              <div className="vi-more mt-40">
                <a href="/page-services" className="butn butn-sm butn-bord radius-30">
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
              <h5>Консультация</h5>
              <div className="text mt-40 mb-40">
                <p>
                  У вас есть сложные задачи на работе, и требуется взгляд со стороны? Индивидуальная
                  консультация поможет разобраться с любыми профессиональными вызовами
                </p>
              </div>
              <div className="price">
                <h5>
                  <span className="main-color">2500 ₽</span> / 1 час
                </h5>
              </div>
              <div className="vi-more mt-40">
                <a href="/page-services" className="butn butn-sm butn-bord radius-30">
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
