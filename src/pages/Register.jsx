import React, { useState } from "react";
import { Link } from "react-router-dom"

const Register = () => {
  const [formData, setFormData] = useState({
    team: "",
    topic: "",
    msg: "",
    mail: "",
    phone: "",
    agree: false,
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  return (
    <>
      <div className="register">
        <img src="/images/sata-star.png" className="reg-satastar" />
        <img src="/images/sata-star.png" className="reg-satastar2" />
        <img src="/images/gray-star.png" className="reg-graystar" />
        <img src="/images/gray-star.png" className="reg-graystar2" />
        <img src="/images/white-star.png" className="reg-whitestar" />
        <img src="/images/woman-walking.png" alt="woaman" className="woman" />
        <img src="/images/man-walking.png" alt="man" className="man" />
        <img src="/images/line.png" alt="line" className="line" />
        <h2 className="mob">Register</h2>
        <div className="reg__img">
          <picture>
            <source
              media="(min-width:770px)"
              srcSet="/images/designer-thumbs-up-desktop.png"
            />
            <img
              src="/images/designer-thumbs-up-mobile.png"
              alt="designer"
              className="designer"
            />
          </picture>
        </div>
        <div className="reg-form">
          <form className="ctl">
            <h2>Register</h2>
            <p>Be part of this movement!</p>
            <h1>create your account</h1>
            <div className="form-top">
              <div className="form-control ctrl">
                <label htmlFor="name">Team's Name</label>
                <input
                  type="text"
                  name="team"
                  placeholder="Enter the name of your group"
                  value={formData.team}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control ctrl">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-mid">
              <div className="form-control ctrl">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  mame="mail"
                  placeholder="Enter your email address"
                  value={formData.mail}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control ctrl">
                <label htmlFor="topic">Project Topic</label>
                <input
                  type="text"
                  name="topic"
                  placeholder="What is your group project topic"
                  value={formData.topic}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-bottom">
              <div className="control">
                <div className="top-select">
                  <label htmlFor="category">Category</label>
                  <select name="category" id="category">
                    <option hidden value="">
                      Select your category
                    </option>
                    <option>Beginner</option>
                    <option>Amateur</option>
                    <option>Intermediate</option>
                    <option>Expert</option>
                    <option>Guru</option>
                  </select>
                </div>
                <div className="down-select">
                  <label htmlFor="size">Group Size</label>
                  <select name="size" id="size">
                    <option hidden value="">
                      Select
                    </option>
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="reg-p">
              Please review your registration details before submitting
            </p>
            <div className="check">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree">
                I agree with the event terms and conditions and privacy policy
              </label>
            </div>
            <Link to="/confirmation"><button className="mobile click">Submit</button></Link>
            <Link to="/confirmation"><button className="btn reg">Register Now</button></Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
