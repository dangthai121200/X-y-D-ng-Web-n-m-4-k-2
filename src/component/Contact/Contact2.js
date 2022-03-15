import React from "react";
import './Contact.css';
import Map from '../Map/Map';

export default function Contact2() {
  return (
    <section className="contact contact--page">
      <div className="container container__contact">
        <h1 className="contact__content__header animate-top">Contact us</h1>
        <div className="contact__content animate-left">
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
          <div className="content__form animate-right">
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
      <Map/>
    </section>
  );
}
