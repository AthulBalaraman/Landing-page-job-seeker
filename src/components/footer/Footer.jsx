import React from 'react'
import './footer.css'
const Footer = () => {
  return (
   
    <section className="footer pt-5">
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="row pb-4">
              <div className="col-lg-3">
                <h3 className="py-5">ABOUT US</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum
                  dolor sit amet, consectetur adipiscing.
                </p>
              </div>
              <div className="col-lg-3">
                <h3 className="py-5">CONTACT INFO</h3>
                <p>Address : Chevayur, Calicut, India</p>
                <p className="link">Phone : 9633302217</p>
                <p className="link">Email : athul2522001@gmail.com</p>
              </div>
              <div className="col-lg-3">
                <h3 className="py-5">IMPORTANT LINK</h3>
                <p className="link">View Project</p>
                <p className="link">Contact Us</p>
                <p className="link">Testimonial</p>
                <p className="link">Properties</p>
                <p className="link">Support</p>
              </div>
              <div className="col-lg-3">
                <h3 className="py-5">NEWSLETTER</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum
                </p>
                <input type="text" placeholder="Enter Your Email" />
                <button>Go</button>
              </div>
            </div>
            <hr />
            <p className="py-4 text-center">
              Copyright @2023 All rights reserved | This template is made by 
              <span className="redText"> Athul Balaraman </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
