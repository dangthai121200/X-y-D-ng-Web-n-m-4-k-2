// <?php
// include "../../controller/autoload.php";
// include "../../dao/FeedBackDAO.php";
// $feedbacks = FeedBackDAO::getAllFeedBack($conn);
// // $tenkh = FeedBackDAO::getTenKhachHang($feedbacks['makh'], $conn);
// ?>
// <?php include "./adminheader.php" ?>
// <?php include("./adminnav.php") ?>
import React from "react";

export default function quanlyfeedback() {
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
                    <h1 className="title">QUẢN LÝ FEEDBACK</h1>
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
                            <th scope="col" className="ma">Mã fb</th>
                            <th scope="col" className="tengui">Tên người gửi</th>
                            <th scope="col" className="sanpham">Sản phẩm</th>
                            <th scope="col" className="noidung">Nội dung</th>
                            <th scope="col" className="thoigian">Thời gian</th>
                            <th scope="col" className="action">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <?php foreach ($feedbacks as $feedback): ?>
                        <?php $makh = $feedback['makh'];
                    $ten = FeedBackDAO::getTenKhachHang($makh, $conn); ?>
                        <tr>
                            <th scope="row"><?php echo $feedback['mafb'] ?></th>
                            <td><?php echo $ten['ten'] ?></td>
                            <td><?php echo $feedback['masp'] ?></td>
                            <td><?php echo $feedback['mota'] ?></td>
                            <td><?php echo $feedback['thoigian'] ?> </td>
                            <td className="action d-flex justify-content-around align-items-center">
                                <a href="../controller/feedbackController.php?action=delete&mafb=<?php echo $feedback['mafb'] ?>" className="xoa">Xóa</a>
                            </td>
                        </tr>
                        <?php endforeach; ?> */}

                    </tbody>
                </table>
            </div>
        </section>
    );
}
