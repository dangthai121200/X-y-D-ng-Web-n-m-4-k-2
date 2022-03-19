import React from "react";

export default function OrderDetail() {
    return (
      <section>
            <div class="container d-flex flex-column justify-content-around">
                <div class="btnNav" id="btnNav">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class="text-center mb-5">
                    <h1 class="title">THÔNG TIN ĐƠN HÀNG</h1>
                </div>
                <div class="container rounded bg-white mt-5 mb-5">
                    <form action="" method="post">
                        <table class="table .table-striped" style={{border:"0"}}>
                            <tr>
                                <th>Mã đơn:</th>
                                <input class="form-control" id="editth" type="text" hidden name="madon" value=""/>
                                <th><input class="form-control" id="editth" type="text" disabled name="ma" value=""/></th>
                            </tr>
                            <tr>
                                <th>Người nhận:</th>
                                <th><input class="form-control" type="text" id="editth" name="nguoinhan" disabled value=""/></th>
                            </tr>
                            <tr>
                                <th>SĐT:</th>
                                <th><input class="form-control" type="text" id="editth" name="sdt" disabled value=""/></th>
                            </tr>
                            <tr>
                                <th>Địa chỉ giao:</th>
                                <th><input class="form-control" type="text" id="editth" name="diachigiao" disabled value=""/></th>
                            </tr>
                            <tr>
                                <th>PT thanh toán</th>
                                <th><input class="form-control" disabled type="text" id="editth" name="ptthanhtoan" value=""/></th>
                            </tr>
                            <tr>
                                <th>Ngày tạo:</th>
                                <th><input class="form-control" type="text" id="editth" disabled name="ngaytao" value=""/></th>
                            </tr>
                            <tr>
                                <th>Tình trạng:</th>
                                <th><input class="form-control" type="text" id="editth" disabled name="tinhtrang" value=""/></th>
                            </tr>
                        </table>    
                    </form>
                </div>
                <div class="text-center mb-5">
                    <h1 class="title">CHI TIẾT ĐƠN HÀNG</h1>
                </div>
                <table class="table .table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class="ma">Mã SP</th>
                            <th scope="col" class="hinh">Hình</th>
                            <th scope="col" class="ten">Tên sản phẩm</th>
                            <th scope="col" class="gia">Giá</th>
                            <th scope="col" class="sl">Số lượng</th>
                            <th scope="col" class="thanhtien">Thành tiền</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td><img src="" alt=""/></td>
                            <td></td>
                            <td></td>
                            <td>
                               
                            </td>
                            <td></td>
                        </tr>
                        <tr class="tongtientitle">
                            <th scope="col" colspan="2">Mã khuyến mãi:</th>
                            <th scope="col" class="tongtien">
                            </th>
                            <th scope="col" colspan="2">Tiền giảm:</th>
                            <th scope="col" class="tongtien">
                            </th>
                        </tr>
                        <tr class="tongtientitle">
                            <th scope="col" colspan="5">Tổng tiền:</th>
                            <th scope="col" class="tongtien">
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
      </section>
    );
  }