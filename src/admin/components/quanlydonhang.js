// <?php include "../../dao/OrderDAO.php" ?>
// <?php
// $orders = OrderDAO::getOrders($conn);
// ?>
// <?php include "./adminheader.php" ?>
// <?php include("./adminnav.php") ?>
import React from "react";

export default function quanlydonhang() {
    function  btnNavmenu(){        
        const nav = document.getElementById("nav");
        const header = document.getElementsByTagName("header");
        const section = document.getElementsByTagName("section");
 
     if(nav.style.transform=="translateX(-100%)" && header[0].style.width=="0%" && section[0].style.width=="80%"){
         nav.style.transform="translateX(0)";
         header[0].style.width="20%";
         section[0].style.width="60%";
     }
     else{
         nav.style.transform="translateX(-100%)";
         header[0].style.width="0%";
         section[0].style.width="80%";
     }   
 }
    return (
        <section>
            <div className="container d-flex flex-column justify-content-around">
                <div className="btnNav" id="btnNav" onClick={btnNavmenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="text-center mb-5">
                    <h1 className="title">QUẢN LÝ ĐƠN HÀNG</h1>
                </div>
                <div className="controller d-flex">
                    <select name="cboSanPham" id="" className="cboSanPham">
                        <option value="tangdan">Tăng dần</option>
                        <option value="giamdan">Giảm dần</option>
                    </select>
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <table className="table .table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="ma">Mã đơn</th>
                            <th scope="col" className="ngaytao">Ngày tạo</th>
                            <th scope="col" className="nguoinhan">Người nhận</th>
                            <th scope="col" className="sdt">SĐT</th>
                            <th scope="col" className="diachi">Địa chỉ</th>
                            <th scope="col" className="tonggia">Tổng tiền</th>
                            <th scope="col" className="tinhtrang">Tình trạng</th>
                            <th scope="col" className="action">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <?php foreach ($orders as $order):?>
                <tr>
                    <th scope="row"><?php echo $order['madon']?></th>
                    <td><?php echo $order['ngaytao']?></td>
                    <td><?php echo $order['nguoinhan']?></td>
                    <td><?php echo $order['sdt']?></td>
                    <td><?php echo $order['diachigiao']?></td>
                    <td><?php echo number_format( $order['tongtien'],0,",",".")." VND"?></td>
                    <td><?php echo $order['tinhtrang']?></td>
                    <td className="action d-flex justify-content-evenly align-items-center">
                        <a href="./chitietdonhang.php?madon=<?php echo $order['madon']?>" className="sua">Xem</a>
                        <a href="../controller/orderController.php?madon=<?php echo $order['madon']?>&action=xoa" className="xoa">Xóa</a>
                        <?php if($order['tinhtrang']=="Chưa giao"): ?>
                        <a href="../controller/orderController.php?madon=<?php echo $order['madon']?>&action=duyet" className="duyet">Duyệt</a>
                        <?php endif; ?>
                    </td>
                </tr>
                <?php endforeach; ?> */}
                    </tbody>
                </table>
            </div>
        </section>
    );
}