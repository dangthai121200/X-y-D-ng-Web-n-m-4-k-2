import AOS from 'aos';
import 'aos/dist/aos.css';

import ImageHero from "../../images/laptop-mong-nhe-gia-re-1-removebg-preview.png";
export default function Hero() {

  AOS.init();

  return (
    // <!-- Hero -->
    <div>
      <section className="hero" id="hero">
        <div className="container d-flex align-items-center justify-content-center hero__container">
          <div className="slogan ">
            <h1 data-aos="fade-right"  data-aos-duration="2000"  data-aos-delay="200" className="hero_header">
              Chào mừng bạn đến với website của ATLAPTOP
            </h1>
            <h4 className="hero_sub" data-aos="fade-right"  data-aos-duration="2000" data-aos-delay="450">
              Chúng tôi là cửa hàng chuyên cung cấp các loại laptop chính hãng,
              đáp ứng mọi cấu hình và nhu cầu sử dụng của bạn.
            </h4>
            <a href="#categories" className="btnHero" data-aos="fade"  data-aos-duration="2000" data-aos-delay="500">
              Xem Ngay
            </a>
          </div>
          <div data-aos="fade-left"  data-aos-duration="2000" data-aos-delay="400" className="image ">
            <img src={ImageHero} alt="Image Hero" />
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="183.039"
        viewBox="0 0 1919.931 183.039"
      >
        <path
          id="Path_19"
          data-name="Path 19"
          d="M0,904.095s382.632,42.327,936.263,0,983.669,0,983.669,0v164.227H0Z"
          transform="translate(0 -885.283)"
          fill="#a3e0ff"
        />
      </svg>
    </div>
  );
}
