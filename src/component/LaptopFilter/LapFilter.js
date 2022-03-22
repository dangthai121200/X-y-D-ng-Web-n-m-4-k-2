import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LapFilter() {
  AOS.init();
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-delay="200"
      className="tool"
    >
      <h1 className="cateHeader text-center" id="categories__work">
        LAPTOP
      </h1>
      <form action="../controller/search.php" method="post">
        <div className="search">
          <input type="text" name="words" placeholder="Search..." />
          <button type="submit" name="action" value="searchLaptop">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
      <div className="text">Bộ lọc:</div>
      <div className="filter">
        <div className="comboboxs">
          <select name="cboLoaiMay" id="" className="cboSanPham">
            <option value="Tất cả">Tất cả</option>
            <option value="Văn phòng">Văn phòng</option>
            <option value="Đồ họa">Đồ họa</option>
            <option value="Cao cấp">Cao cấp</option>
          </select>
          <select name="cboCPU" id="" className="cboSanPham">
            <option value="cpu">CPU</option>
            <option value="intel">Intel</option>
            <option value="amd">Amd</option>
          </select>
          <select name="cboRAM" id="" className="cboSanPham">
            <option value="ram">RAM</option>
            <option value="4gb">4GB</option>
            <option value="8gb">8GB</option>
          </select>
          <select name="cboVGA" id="" className="cboSanPham">
            <option value="VGA">VGA</option>
            <option value="Onboard">Onboard</option>
            <option value="Nvidia MX330 2GB">Nvidia MX330 2GB</option>
          </select>
          <select name="cboHang" id="" className="cboSanPham">
            <option value="Hang">Hãng</option>
            <option value="acer">ACER</option>
            <option value="dell">DELL</option>
          </select>
          <select name="cboDisk" id="" className="cboSanPham">
            <option value="Disk">Ổ cứng</option>
            <option value="hdd">HDD</option>
            <option value="ssd">SSD</option>
          </select>
        </div>
      </div>
      <div className="text">Sắp xếp theo:</div>
      <div className="order">
        <div className="comboboxs">
          <select name="cboGia" id="" className="cboSanPham">
            <option value="giatang">Giá tăng</option>
            <option value="giagiam">Giá giảm</option>
          </select>
        </div>
      </div>
    </div>
  );
}
