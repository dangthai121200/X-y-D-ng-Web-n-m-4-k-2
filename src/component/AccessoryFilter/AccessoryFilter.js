import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AccessoryFilter() {
  AOS.init();
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-delay="200"
      className="tool"
    >
      <h1 className="cateHeader text-center" id="categories__work">
        PHỤ KIỆN
      </h1>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="text">Bộ lọc:</div>
      <div className="filter">
        <div className="comboboxs">
          <select name="cboLoai" id="" className="cboSanPham">
            <option value="loai">Loại</option>
            <option value="tainghe">Tai Nghe</option>
            <option value="sac">Sạc</option>
          </select>
          <select name="cboHang" id="" className="cboSanPham">
            <option value="hang">Hãng</option>
            <option value="acer">Acer</option>
            <option value="dell">Dell</option>
          </select>
        </div>
      </div>
      <div className="text">Sắp xếp theo:</div>
      <div className="order">
        <div className="comboboxs">
          <select name="cboSanPham" id="" className="cboSanPham">
            <option value="giatang">Giá tăng</option>
            <option value="giagiam">Giá giảm</option>
          </select>
        </div>
      </div>
    </div>
  );
}
