import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  AOS.init();
  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
          <a href="#nav">
            <i className="fas fa-chevron-up"></i>
          </a>
        </div>
        <div className="footer-content">
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="200"
            className="footer-content-about"
          >
            <h4>ABOUT ATLAPTOP</h4>
            <div className="asterisk">
              <i className="fa-solid fa-laptop fa-2xl"></i>
            </div>
            <p>
              Cửa hàng laptop uy tín - thân thiện - nhiệt tình tại Hồ Chí Minh
              Đến với chúng tôi bạn sẽ tìm được những sản phẩm chất lượng và
              dịch vụ tốt nhất
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="400"
            className="footer-content-divider"
          >
            <div className="social-media">
              <h4>Follow along</h4>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-tripadvisor"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="600"
              className="newsletter-container"
            >
              <h4>Newsletter</h4>
              <form action="" className="newsletter-form">
                <input
                  type="text"
                  className="newsletter-input"
                  placeholder="Your email address..."
                />
                <button className="newsletter-btn" type="submit">
                  <i className="fas fa-envelope"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
