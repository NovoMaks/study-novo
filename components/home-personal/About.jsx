import React from "react";

function About() {
  return (
    <section className="about-author section-padding" id="about">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/header/p2.jpg" alt="" />
              </div>
              <span className="icon">
                <img src="/assets/imgs/resume/s2.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon1.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon2.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon3.png" alt="" />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">Обо мне</h6>
              <div className="text">
                <h4 className="mb-30">
                  Знания и <span className="main-color">опыт</span>
                </h4>
                <p>
                  Я являюсь <span className="main-color">руководителем</span> сектора разработки
                  web-приложений в <span className="main-color">КонсультантПлюс</span>.<br />
                  Также работал на позициях разработчика и тимлида в таких команиях, как{" "}
                  <span className="main-color">Касперский</span> и{" "}
                  <span className="main-color">СбербанкТехнологии</span>.
                </p>
                <p>
                  Вместе с этим совмещаю работу с преподаванием.
                  <br />
                  <span className="main-color">Два года</span> работал в частной школе
                  программирования для детей и подростков{" "}
                  <span className="main-color">Кодабра</span>, где вел курсы по web-разработке и
                  Scratch. А теперь, опираясь на весь свой опыт, решил вести свои{" "}
                  <span className="main-color">собственные курсы</span>.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">3 года</h3>
                          <h6 className="p-color sub-title">Опыт преподавания</h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">6 лет</h3>
                          <h6 className="p-color sub-title">Коммерческий опыт</h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
