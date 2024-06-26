import React from "react";
import "../styles/Footer.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <a href="/" className="footer-logo">
            <Image
              src="https://c2zyebdn.cloudimg.io/s/cdn/x/https://divin2sy6ce0b.cloudfront.net/images/carelulu_logo_square_white.png"
              alt="CareLuLu Logo"
              width={122}
              height={105}
            />
          </a>
        </div>
        <div className="footer-column">
          <h4>FOR PARENTS</h4>
          <a href="#">Parent Resources</a>
          <a href="#">How It Works</a>
          <a href="#">Testimonials</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-column">
          <h4>FOR PROVIDERS</h4>
          <a href="#">Provider Resources</a>
          <a href="#">How It Works</a>
          <a href="#">Testimonials</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">List Your Program</a>
        </div>
        <div className="footer-column">
          <h4>MORE</h4>
          <a href="#">About Us</a>
          <a href="#">Press</a>
          <a href="#">Jobs</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-column">
          <div
            style={{
              marginLeft: "-18px"
            }}
          >
            <a
              href="https://www.facebook.com/carelulu"
              className="social-icon facebook"
            ></a>
            <a
              href="https://www.twitter.com/mycarelulu"
              className="social-icon twitter"
            ></a>
            <a
              href="https://instagram.com/mycarelulu"
              className="social-icon instagram"
            ></a>
          </div>
          <div className="footer-button-wrapper">
            <a
              href="https://carelulu.zendesk.com/hc/en-us"
              className="help-center-button"
            >
              Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
