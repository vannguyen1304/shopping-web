import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="container">
      <h3 className="text-center">Have Some Question?</h3>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="img-container">
            <img src="https://s3-us-west-1.amazonaws.com/files.delesign/assets/texting.svg"></img>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <form>
            <div class="form-group">
              <label htmlFor="exampleFormControlInput1">Name:</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Your name..."
              />
            </div>
            <div class="form-group">
              <label htmlFor="exampleFormControlInput2">Email:</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput2"
                placeholder="Your email..."
              />
            </div>

            <div class="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-outline-dark">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
