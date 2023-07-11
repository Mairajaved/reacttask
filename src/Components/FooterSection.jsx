// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../Images/payments.png";
import "../App.css";

function FooterSection() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              ducimus earum eligendi ex, eveniet animi soluta veritatis
              reiciendis mollitia, dolores architecto molestias saepe, magnam
              delectus dolorem dolor dolorum sequi modi? Aspernatur temporibus
            </div>
          </div>
          <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
              <FaLocationArrow />
              <div className="text">Karachi ,Pakistan</div>
            </div>
            <div className="c-item">
              <FaMobileAlt />
              <div className="text">Phone: 0471 272 0261</div>
            </div>
            <div className="c-item">
              <FaEnvelope />
              <div className="text">Email: store@mairajaveddev.com</div>
            </div>
          </div>
          <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">Login</span>
            <span className="text">Signup</span>
            <span className="text">Products</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <span className="text">
              MEGASTORE 2023 CREATED BY MAIRA JAVED E-COMMERCE SOLUTIONS.
            </span>
            <img src={Payment} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
