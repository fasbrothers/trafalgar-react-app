import React from "react";
import "./Services.scss";

function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="services__main">
          <h2>Our services</h2>
          <div className="line"></div>
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className="services__desc">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <img src="/image/Frameicon_1.png" alt="" />
              <h3>Search Doctor</h3>
              <p>
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
            <div className="col-lg-3 col-md-6 info">
              <img src="/image/Frameicon_2.png" alt="" />
              <h3>Online pharmacy</h3>
              <p>
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
            <div className="col-lg-3 col-md-6 info">
              <img src="/image/Frameicon_3.png" alt="" />
              <h3>Consultation</h3>
              <p>
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-3 col-md-6 info">
              <img src="/image/Frameicon_4.png" alt="" />
              <h3>Details info</h3>
              <p>
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
            <div className="col-lg-3 col-md-6 info">
              <img src="/image/Frameicon_5.png" alt="" />
              <h3>Emergency care</h3>
              <p>
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </p>
            </div>
            <div className="col-lg-3 col-md-6 info">
              <img src="/image/Groupicon_6.png" alt="" />
              <h3>Tracking</h3>
              <p>Track and save your medical history and health data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
