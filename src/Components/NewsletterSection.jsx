/* eslint-disable no-unused-vars */
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";
import "../Newsletter.css";
import Swal from "sweetalert2";

import newsletterImg from "../Images/newsletter-bg.jpeg";

function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleEmailInput = async () => {
    const { value } = await Swal.fire({
      title: "For subscribe Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
      showCancelButton: true,
      confirmButtonText: "Subscribe",
      cancelButtonText: "Cancel",
      showLoaderOnConfirm: true,
    });

    if (value) {
      Swal.fire({
        title: "Subscribed",
        text: value,
        icon: "success",
      });
      setEmail(value);
    }
  };

  return (
    <div
      className="newsletter-section"
      style={{ backgroundImage: `url(${newsletterImg})` }}
    >
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">
          Sign up for the latest updates and offers
        </span>
        <div>
          <button
            onClick={handleEmailInput}
            className="btn btn-dark rounded-pill m-2 h-15 p-2"
          >
            Subscribe
          </button>
          <p>Email: {email}</p>
        </div>
        <span className="text">
          Will be used in accordance with our Privacy Policy
        </span>
        <div className="social-icons">
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
