import React from 'react';
import laptest from '../../images/lap1.jpg'

export default function Card(){
    return (
        <div className="item">
        <div className="item__image">
            <img src={laptest} alt=""/>
            <a href="#" className="image__more">Xem thêm</a>
        </div>
        <h3 className="item__name">Laptop HP</h3>
        <div className="item__detail">
            <table>
                <tr>
                    <th>CPU:</th>
                    <td>Intel Core</td>
                </tr>
                <tr>
                    <th>RAM:</th>
                    <td>4gb</td>
                </tr>
                <tr>
                    <th>VGA</th>
                    <td>Intel UHD</td>
                </tr>
                <tr>
                    <th>Ổ cứng:</th>
                    <td>256gb</td>
                </tr>
                <tr>
                    <th>Màn hình:</th>
                    <td>14 inches</td>
                </tr>
            </table>
        </div>
        <div className="item__button">
            <form action="" method="post">
                <input type="hidden" name="masp" value=""/>
                <button className="cart"><i className="fa-solid fa-cart-arrow-down"></i></button>
            </form>
            <div className="price">12.490.000 VND</div>
        </div>
    </div>
    )
}