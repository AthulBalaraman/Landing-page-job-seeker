import React from 'react'
import './jobsection.css'
const Jobsection = () => {
  return (
    <section className="job py-5">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-7 pb-2">
            <p className="redText pt-5">WHAT ARE WE DOING</p>
            <h1>24k Talented people are gettig Jobs</h1>
            <p className="py-4" style={{fontWeight:700}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.Suspendisse <br />
              in felis in arcu suscipit cursus. Morbi lacinia niac posuere
              elementum. <br />
              Integer id lacus nibh. Morbi lacinia nisi ac posuere elementum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse in felis <br />
              in arcu suscipit cursus. Morbi lacinia nisi ac posuere elementum.
              Integer id <br />
              lacus nibh. Morbi lacinia nisi ac posuere elementum. Integer id
              lacus nibh. <br />
              Suspendisse in felis in arcu suscipit cursus. Morbi lacinia nisi
              ac posuere elementum.
            </p>
            <button className="btnPostJob mt-3">POST A JOB</button>
          </div>
          <div className="col-lg-5">
            <img
              src="./images/mens.jpg"
              className="image-fluid"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jobsection
