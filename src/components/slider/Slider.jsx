import React from 'react'
import './slider.css'
const Slider = () => {
  return (
  
    <section className="slider py-5">
      <div className="container text-center py-5">
        <div className="row">
          <div className="col-lg-9 m-auto">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="./images//Capture.JPG"
                    className="img-fluid mb-4 avatar"
                    alt="..."
                  />
                  <h4>Athul Balaraman</h4>
                  <p>Creative Director</p>
                  <p className="comments py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse in felis in arcu suscipit cursus. Morbi lacinia
                    nisi ac posuere elementum.
                  </p>
                  <button className="btnContact mt-3">Contact</button>
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/car2.JPG"
                    className="image-fluid mb-4 avatar"
                    alt="..."
                  />
                  <h4>Athul Balaraman</h4>
                  <p>Creative Director</p>
                  <p className="comments py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse in felis in arcu suscipit cursus. Morbi lacinia
                    nisi ac posuere elementum.
                  </p>
                  <button className="btnContact mt-3">Contact</button>
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/car2.JPG"
                    className="image-fluid mb-4 avatar"
                    alt="..."
                  />
                  <h4>Athul Balaraman</h4>
                  <p>Creative Director</p>
                  <p className="comments py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse in felis in arcu suscipit cursus. Morbi lacinia
                    nisi ac posuere elementum.
                  </p>
                  <button className="btnContact mt-3">Contact</button>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Slider
