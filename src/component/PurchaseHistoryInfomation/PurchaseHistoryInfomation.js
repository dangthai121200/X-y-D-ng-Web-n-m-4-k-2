import React from "react";
import { Link } from "react-router-dom";


export default function PurchaseHistoryInfomation() {
    return (
        <section className="giohang">
            <div className="container">
                <h1 className="cateHeader text-center event__header animate-top" id="categories__work">LỊCH SỬ MUA HÀNG</h1>
                <table className="table .table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="madh">Mã đơn hàng</th>
                            <th scope="col" className="ngaytao">Ngày tạo</th>
                            <th scope="col" className="nguoinhan">Người nhận</th>
                            <th scope="col" className="sdt">Sđt</th>
                            <th scope="col" className="tinhtrang">Tình trạng</th>
                            <th scope="col" className="diachi">Địa chỉ giao</th>
                            <th scope="col" className="makhuyenmai">Mã KM</th>
                            <th scope="col" className="xemdonhang"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="xem">Xem</Link>
                                <Link to="/" className="sua">FBack</Link>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </section>
    );
  }