import React from "react";
import laptest from "../../images/lap1.jpg";

export default function Card({img,name,cpu,ram,vga,ocung,manhinh,gia}) {
  return (
    <div className="item">
      <div className="item__image">
        <img src={img} alt="" />
        <a href="#" className="image__more">
          Xem thêm
        </a>
      </div>
      <h3 className="item__name">{name}</h3>
      <div className="item__detail">
        <table>
          <tbody>
            <tr>
              <th>CPU:</th>
              <td>{cpu}</td>
            </tr>
            <tr>
              <th>RAM:</th>
              <td>{ram}</td>
            </tr>
            <tr>
              <th>VGA:</th>
              <td>{vga}</td>
            </tr>
            <tr>
              <th>Ổ cứng:</th>
              <td>{ocung}</td>
            </tr>
            <tr>
              <th>Màn hình:</th>
              <td>{manhinh}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="item__button">
        <form action="" method="post">
          <input type="hidden" name="masp" value="" />
          <button className="cart">
            <i className="fa-solid fa-cart-arrow-down"></i>
          </button>
        </form>
        <div className="price">{gia.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
      </div>
    </div>
  );
}
