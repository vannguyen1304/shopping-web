import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div id="about" className="row">
        <div className="col-12 col-sm-6 about-info">
          <h3> About Us</h3>
          <p>
            Apple Inc. is an American multinational technology company that
            specializes in consumer electronics, software and online services.
            Apple is the largest information technology company by revenue,
            totaling US$365.8 billion in 2021 and, as of January 2021, it is the
            world's most valuable company, the fourth-largest personal computer
            vendor by unit sales and second-largest mobile phone manufacturer.
            It is one of the Big Five American information technology companies,
            alongside Alphabet, Amazon, Meta, and Microsoft.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="btn btn-outline-dark"
          >
            Contact Us
          </button>
        </div>
        <div className="col-12 col-sm-6 about-img">
          <div className="img-container">
            <img src="https://s3-us-west-1.amazonaws.com/files.delesign/assets/remote-team-1.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
