import "../style/Banner.css";
import BannerImg from "../Images/banner-img.png";
import { Link } from "react-router-dom";

function HeaderSection() {
  return (
    <>
      <div className="hero-banner">
        <div className="content">
          <div className="text-content">
            <h1>SALES</h1>
            <p>
              Convallis interdum purus adipiscing dis parturient posuere ac a
              quam a eleifend montes parturient posuere curae tempor
            </p>
            <div className="ctas">
              <div className="banner-cta">Read More</div>
              <Link
                to="/products"
                className="text-decoration-none banner-cta v2"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <img className="banner-img" src={BannerImg} />
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
