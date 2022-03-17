// <?php
// include "../../controller/autoload.php";
// include "../../dao/AdminDAO.php";
// $admins = AdminDAO::getAllAdmin($conn);
// ?>

// <?php include "./adminheader.php" ?>
// <?php include("./adminnav.php") ?>
import React from "react";
import {Link} from "react-router-dom";

export default function quanlynhanvien(){
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
    return(
<section>
    <div className="container d-flex flex-column justify-content-around">
        <div className="btnNav" id="btnNav" onClick={btnNavmenu}>
            <i className="fa-solid fa-bars"></i>
        </div>
        <div className="text-center mb-5">
            <h1 className="title">QUẢN LÝ NHÂN VIÊN</h1>
        </div>
        <div className="controller d-flex">
        <Link to="/addadmin" className="btnThem">Thêm</Link>
            <select name="cboSanPham" id="" className="cboSanPham">
                <option value="tangdan">Tăng dần</option>
                <option value="giamdan">Giảm dần</option>
            </select>
            <div className="search">
                <input type="text" placeholder="Search..."/>
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <table className="table .table-striped">
            <thead>
                <tr>
                    <th scope="col" className="ma">Mã NV</th>
                    <th scope="col" className="ho">Họ</th>
                    <th scope="col" className="ten">Tên</th>
                    <th scope="col" className="diachi">Địa chỉ</th>
                    <th scope="col" className="sdt">Sdt</th>
                    <th scope="col" className="email">Email</th>
                    <th scope="col" className="action">Hành động</th>
                </tr>
            </thead>
            <tbody>
                {/* <?php foreach ($admins as $admin) : ?>
                    <?php if($admin["username"] != "master"){ ?>
                    <tr>
                        <th scope="row"><?php echo $admin['maad'] ?></th>
                        <td><?php echo $admin['ho'] ?></td>
                        <td><?php echo $admin['ten'] ?></td>
                        <td><?php echo $admin['diachi'] ?> </td>
                        <td><?php echo $admin['sdt'] ?></td>
                        <td><?php echo $admin['email'] ?></td>
                        <!-- <td><?php echo $admin['username'] ?></td>
                        <td><?php echo $admin['password'] ?></td> -->
                        <td className="action d-flex justify-content-around align-items-center">
                            <a href="./editthongtinadmin.php?maad=<?php echo $admin['maad'] ?>" className="sua">Sửa</a>
                            <a href="../controller/adminController.php?action=delete&maad=<?php echo $admin['maad'] ?>" className="xoa">Xóa</a>
                        </td>
                    </tr>
                    <?php } ?>
                <?php endforeach; ?> */}
                
            </tbody>
        </table>
    </div>
</section>
);
}
