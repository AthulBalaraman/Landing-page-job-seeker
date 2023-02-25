import React from 'react'
import './resume.css'
const Resume = () => {
  return (
    <section className="resume py-5 text-center text-white">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-10 m-auto">
            <p className="pb-3">FEATURES TOURS PACKAGES</p>
            <h1>Make a Difference With Your Online Resume!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 m-auto">
            <button className="buttonBrowseAndCv">UPLOAD YOUR CV</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
