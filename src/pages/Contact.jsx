import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    team: "",
    topic: "",
    msg: "",
    mail: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    setSuccess("Your message has been successfully sent!");
  };

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setSuccess("");
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.team) {
      errors.team = "This field is required";
    }
    if (!values.mail) {
      errors.mail = "This field is required";
    } else if (!regEx.test(values.mail)) {
      errors.mail = "Please insert a valid email";
    }
    if (!values.msg) {
      errors.msg = "This field is required";
    }
    setTimeout(() => {
      setErrors({});
    }, 3000);
    return errors;
  };

  const handleChange = (e) => {
    const labels = document.querySelectorAll(".form-control label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join("");
    });
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className="call">
        <div className="success">{success}</div>
        <img src="/images/sata-star.png" className="contact-satastar" />
        <img src="/images/sata-star.png" className="contact-satastar2" />
        <img src="/images/gray-star.png" className="contact-graystar" />
        <img src="/images/white-star.png" className="contact-whitestar" />
        <div className="call__info">
          <Link to="/">
            <button className="call close-btn">
              <FaAngleLeft />
            </button>
          </Link>
          <h2>
            Questions or need assiatance?
            <br />
            Let us know about it
          </h2>
          <p>Email us below to any questions related to our event</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <input
              type="text"
              name="team"
              value={formData.team}
              onChange={handleChange}
            />
            <label htmlFor="name">Team Name</label>
            <small>{errors.team}</small>
          </div>
          <div className="form-control">
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
            />
            <label htmlFor="name">Topic</label>
            <small>{errors.topic}</small>
          </div>
          <div className="form-control">
            <input
              type="email"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
            />
            <label htmlFor="name">Email</label>
            <small>{errors.mail}</small>
          </div>
          <div className="form-control">
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="15"
              value={formData.msg}
              onChange={handleChange}
            />
            <label htmlFor="name">Message</label>
            <small>{errors.msg}</small>
          </div>
          <button className="mobile">Submit</button>
        </form>
        <div className="post">
          <div className="share">
            <h3>Share on</h3>
          </div>
          <div className="call-socials">
            <BsInstagram className="ig" />
            <BsTwitter className="x" />
            <BsFacebook className="fb" />
            <BsLinkedin className="ind" />
          </div>
        </div>
      </div>
      <div className="desktop-call">
        <img src="/images/sata-star.png" className="contact-satastar" />
        <img src="/images/sata-star.png" className="contact-satastar2" />
        <img src="/images/gray-star.png" className="contact-graystar" />
        <img src="/images/white-star.png" className="contact-whitestar" />
        <div className="call__info">
          <h2>Get in touch</h2>
          <p>
            Contact <br />
            Information
          </p>
          <p>
            27, Alara Street
            <br />
            Yaba 100012
            <br />
            Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>
            we are open from Monday-Friday
            <br />
            08:00am-05:00pm
          </p>
          <div className="post">
            <div className="share">
              <h6>Share on</h6>
            </div>
            <div className="call-socials">
              <li>
                <BsInstagram className="ig" />
              </li>
              <li>
                <BsTwitter className="x" />
              </li>
              <li>
                <BsFacebook className="fb" />
              </li>
              <li>
                <BsLinkedin className="ind" />
              </li>
            </div>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="success">{success}</div>
          <div className="form">
            <h2>
              Questions or need assiatance?
              <br />
              Let us know about it
            </h2>
            <form onSubmit={onSubmit}>
              <div className="form-control">
                <input
                  type="text"
                  name="team"
                  value={formData.team}
                  onChange={handleChange}
                />
                <label htmlFor="name">Team-Name</label>
                <small>{errors.team}</small>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                  className={errors.mail ? "error-input" : ""}
                />
                <label htmlFor="name">Email</label>
                <small>{errors.mail}</small>
              </div>
              <div className="form-control">
                <textarea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  value={formData.msg}
                  onChange={handleChange}
                />
                <label htmlFor="name">Message</label>
                <small>{errors.msg}</small>
              </div>
            </form>
            <button className="btn sub" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
