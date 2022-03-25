import React from 'react';
import { API_URL } from "../../redux/constants";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
ListLaptop.propTypes = {
    list: PropTypes.array,
};

ListLaptop.defaultProps = {
    list: [],
};
export default function ListLaptop(props) {

    const { list } = props;
    return (

        <div className="swiper-slide swiper-slide-active controller">
            {list.map(list => (
                // <tr>
                //     <th scope="row">{list.maSp}</th>
                //     <td><img src={`https://laptopso1vn.herokuapp.com/${list.hinh}`} alt="" /></td>
                //     <td>{list.tenSp}</td>
                //     <td> {list.gia.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
                //     <td>{list.soLuong}</td>
                //     <td>{list.tinhTrang}</td>
                //     <td className="action d-flex justify-content-around align-items-center">
                //         <Link to="/editlaptop" className="sua">Sửa</Link>
                //         <Link to="/manageproduct" className="xoa">Xóa</Link>
                //     </td>
                // </tr>

                <div className="item">
      <div className="item__image">
        <img src={`https://laptopso1vn.herokuapp.com/${list.hinh}`} alt="" />        
      </div>
      <h3 className="item__name">{list.tenSp}</h3>
      <div className="item__detail">
        <table>
          <tbody>
            <tr>
              <th>CPU:</th>
              <td>{list.cpu}</td>
            </tr>
            <tr>
              <th>RAM:</th>
              <td>{list.ram}</td>
            </tr>
            <tr>
              <th>VGA:</th>
              <td>{list.vga}</td>
            </tr>
            <tr>
              <th>Ổ cứng:</th>
              <td>{list.ocung}</td>
            </tr>
            <tr>
              <th>Màn hình:</th>
              <td>{list.manhinh}</td>
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
        <div className="price">{list.gia.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
      </div>
    </div>
            ))}
        </div>
        
    );
}

