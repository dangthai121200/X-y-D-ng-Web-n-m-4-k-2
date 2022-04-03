import React from "react";
import { Link } from "react-router-dom";
import CartItemRow from './../CartItemRow/CartItemRow';


 
export default function CartInfo() {
  return (
     <section className="giohang">
            <div className="container">
                <h1 className="cateHeader text-center event__header animate-top" id="categories__work">GIỎ HÀNG CỦA BẠN</h1>
                <table className="table .table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="ma">Mã SP</th>
                            <th scope="col" className="hinh">Hình</th>
                            <th scope="col" className="ten">Tên sản phẩm</th>
                            <th scope="col" className="gia">Giá</th>
                            <th scope="col" className="sl">Số lượng</th>
                            <th scope="col" className="thanhtien">Thành tiền</th>
                            <th scope="col" className="hanhdong">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="tongtientitle">
                        <th scope="col" colspan="6">Tổng tiền:</th>
                        <th scope="col" class="tongtien">0</th>
                    </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                <Link to="/" className="chontiep">Chọn tiếp</Link>
                <Link to="/Pay" className="thanhtoan">Thanh toán</Link>
                </div>
            </div>
        </section>
  );
}