import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'


export default function Contact() {
  AOS.init();
  return (
    <section className="contact">
      <div className="container container__contact">
        <h1 data-aos='fade-down' data-aos-duration='2000' data-aos-delay='200' className="contact__content__header">Contact us</h1>
        <div data-aos='fade-right' data-aos-duration='2000' data-aos-delay='400' className="contact__content ">
          <div className="content__info">
            <h2 className="content__header">
              Chúng tôi rất hân hạnh được lắng nghe các bạn
            </h2>
            <p
              className="contact__description
                    contact__description--request"
            >
              Nếu bạn có nhu cầu hợp tác hay quảng cáo trên website của chúng
              tôi hay điền thông tin và gửi qua form này. Xin cám ơn
            </p>
            <p className="contact__description contact__description--location">
              <i className="fa-solid fa-location-dot"></i>300 Đường 3/2, Phường
              12, Quận 10, Thành phố Hồ Chí Minh
            </p>
            <p className="contact__description">
              <i className="fa-solid fa-phone"></i>0903356879
            </p>
            <p className="contact__description">
              <i className="fa-solid fa-envelope"></i>atlaptop@gmail.com
            </p>
          </div>
          <div data-aos='fade-left' data-aos-duration='2000' data-aos-delay='600' className="content__form ">
            <input type="text" placeholder="Type your email..." />
            <input type="text" placeholder="Type title..." />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type description...."
            ></textarea>
            <button className="contact__button">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}
