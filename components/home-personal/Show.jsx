import React from "react";

function Show() {
  return (
    <section className="respo section-padding main-bg bord-bottom-grd">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/imgs/diplom.png" alt="Диплом" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="cont">
              <h6 className="sub-title mb-15 main-color">Диплом</h6>
              <h2 className="mb-30 fz-60">Профильное образование</h2>
              <p>
                В 2020 году успешно закончил{" "}
                <span className="main-color">Российский университет дружбы народов</span> по
                направлению "Прикладная информатика"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Show;
