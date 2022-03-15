import React from "react";
import { Link } from "react-router-dom";

export default function PayInfo() {
    return (
    <section className="buy">
        <div className="container">
            <h1 className="cateHeader text-center event__header animate-top" id="categories__work">THANH TOÁN</h1>
            <form action="" method="post">
                <div class="row gx-5">
                    <div class="col-5 animate-left">
                        <h3>Người nhận: </h3>
                        <input name="nguoinhan" type="text" value=""/>
                        <h3>SĐT: </h3>
                        <input name="sdt" type="text" value=""/>
                        <h3>Địa chỉ:</h3>
                        <input name="diachi" type="text" class="input--diachi" value=""/>
                        <h3>Phương thức thanh toán</h3>
                        <select name="phuongthuc" class="cboSanPham" id="">
                            <option value="Internet Banking">Internet Banking</option>
                            <option value="Thanh toán trực tiếp">
                                Thanh toán trực tiếp
                            </option>
                        </select>
                        <h3>Mã khuyến mãi: </h3>
                        <div class="position-relative">
                            <input name="makm" type="text" class="input--khuyenmai"
                            value=""/>
                            <button type="submit" name="action" value="apdungkm" class="makm">
                                Áp dụng
                            </button>
                        </div>
                        <div class="d-flex justify-content-end">
                            <Link to="/Cart" class="chontiep">Quay lại giỏ</Link>
                            <button type="submit" class="thanhtoan--button" name="action" value="dathang">
                                Đặt hàng
                            </button>
                        </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-6 animate-right donhang">
                        <h2 class="text-center">ĐƠN HÀNG</h2>
                        <div class="tablewrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr></hr>
                        <div class="tongtien">
                            <div class="tong d-flex justify-content-around">
                                <h3>Tổng tiền</h3>
                                <p>0</p>
                            </div>
                            <div class="giam d-flex justify-content-around">
                                <h3>Giảm</h3>
                                <p>
                                0
                                </p>
                            </div>
                        </div>
                        <hr></hr>
                        <div class="thanhtien">
                            <div class="tong d-flex justify-content-around">
                                <h3>Thành tiền</h3>
                                <p>
                                    0
                                </p>
                                <input name="thanhtien" type="text" hidden value=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
    );
  }