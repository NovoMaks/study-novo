"use client";
import React, { useEffect } from "react";
import initIsotope2 from "@/common/initIsotope2";
function Projects() {
  useEffect(() => {
    initIsotope2();
  }, []);
  return (
    <section className="work-minimal section-padding pt-40 pb-0" id="project">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">Примеры проектов</h6>
              <h3>Это сделали мы</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="gallery2  row sm-marg">
          <div className="col-lg-6 items design">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/11.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>Сайт на Тильда</h5>
                  </div>
                  <div className="ml-auto">
                    <p>Веб-разработка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 marketing">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/22.jpg" alt="" />
                <div className="cont">
                  <h5>Игра Flappy Bird</h5>
                  <p>Scratch</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 design">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/33.jpg" alt="" />
                <div className="cont">
                  <h5>Сайт на HTML/CSS/JS</h5>
                  <p>Веб-разработка</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 design">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/44.png" alt="" />
                <div className="cont">
                  <h5>Сайт на HTML/CSS/JS</h5>
                  <p>Веб-разработка</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 marketing">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/55.jpg" alt="" />
                <div className="cont">
                  <h5>Игра Танчики</h5>
                  <p>Scratch</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items marketing">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/66.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>Сайт на HTML/CSS/JS</h5>
                  </div>
                  <div className="ml-auto">
                    <p>Веб-разработка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items design">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/88.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>Сайт на HTML/CSS/JS</h5>
                  </div>
                  <div className="ml-auto">
                    <p>Веб-разработка</p>
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

export default Projects;
