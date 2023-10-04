import React, { useState, useEffect } from "react";
import Confirmation from "./Confirmation";

const Register = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [Submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    team: "",
    topic: "",
    mail: "",
    phone: "",
    agree: false,
    category: "",
    size: ""
  });

  
  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      setSubmit(true)
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    const mailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const numRegex = /^\+?[1-9][0-9]{7,14}$/;
    if (!values.team) {
      errors.team = "This field is required!";
    }
    if (!values.mail) {
      errors.mail = "This field is required!";
    } else if (!mailRegEx.test(values.mail)) {
      errors.mail = "Please insert a valid email!";
    }
    if (!values.phone) {
      errors.phone = "This field is required!";
    } else if (!numRegex.test(values.phone)) {
      errors.phone = "Please insert a valid phone number!";
    }
    if (!values.agree) {
      errors.agree = "You must agree to the terms and conditions!";
    }
    if (!values.category) {
      errors.category = "You must select a category!"
    }
    if (!values.size) {
      errors.size = "You must select a size!"
    }
    return errors;
  };
  

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
      {!Submit ? <div className="register">
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
          <form className="ctl" onSubmit={onSubmit}>
            <h2 className="regis">Register</h2>
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
                <small>{errors.team}</small>
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
                <small>{errors.phone}</small>
              </div>
            </div>
            <div className="form-mid">
              <div className="form-control ctrl">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="mail"
                  placeholder="Enter your email address"
                  value={formData.mail}
                  onChange={handleChange}
                />
                <small>{errors.mail}</small>
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
                  <select
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option hidden value="">
                      Select your category
                    </option>
                    <option>Beginner</option>
                    <option>Amateur</option>
                    <option>Intermediate</option>
                    <option>Expert</option>
                    <option>Guru</option>
                  </select>
                  <small>{errors.category}</small>
                </div>
                <div className="down-select">
                  <label htmlFor="size">Group Size</label>
                  <select
                    name="size"
                    id="size"
                    value={formData.size}
                    onChange={handleChange}
                  >
                    <option hidden value="">
                      Select
                    </option>
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                  <small>{errors.size}</small>
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
            <small>{errors.agree}</small>

            <button className="mobile click" type="submit" >
              Submit
            </button>
            <button className="btn reg">
              Register Now
            </button>
          </form>
        </div>
      </div> : <Confirmation />}
    </>
  );
};

export default Register;
