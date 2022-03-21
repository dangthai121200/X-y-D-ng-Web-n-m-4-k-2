/* eslint-disable react-hooks/rules-of-hooks */
// <?php
// include "../../controller/autoload.php";
// include "../../dao/UserDAO.php";
// $users = UserDAO::getAllUser($conn);
// ?>

// <?php include "./adminheader.php" ?>
// <?php
// if(!empty($_SESSION['error'])){
//     $error = $_SESSION['error'];
//     echo "
//     <div className='modal' tabindex='-1'>
//     <div className='modal-dialog'>
//       <div className='modal-content'>
//         <div className='modal-header'>
//           <h5 className='modal-title'>Lỗi xóa</h5>
//           <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
//         </div>
//         <div className='modal-body'>
//           <p>$error</p>
//         </div>
//         <div className='modal-footer'>
//           <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
//         </div>
//       </div>
//     </div>
//   </div>
//     ";
//     unset($_SESSION['error']);
//   }
// ?>
// <?php include("./adminnav.php") ?>
import React, { useState, useEffect } from "react";
import { API_URL } from "../../redux/constants";
import { useSelector } from 'react-redux';
import Props from "../props/tbUser";
import axios from "axios";

export default function quanlykhachhang() {
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

const [listUser, setListUser] = useState([]);

    const username = useSelector((state) => state.User.userInfo.username);
    const password = useSelector((state) => state.User.userInfo.password);

    useEffect(() => {
        axios        
            .get(`${API_URL}v1/users`, {
                auth: {
                    username: username,
                    password: password
                }
            })
            .then(res => {
              setListUser(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    })

  return (
    <section>
      <div className="container d-flex flex-column justify-content-around">
        <div className="btnNav" id="btnNav" onClick={btnNavmenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="text-center mb-5">
          <h1 className="title">QUẢN LÝ KHÁCH HÀNG</h1>
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
              <th scope="col" className="ma">Mã KH</th>
              <th scope="col" className="ho">Họ Tên</th>
              <th scope="col" className="sdt">Sđt</th>
              <th scope="col" className="diachi">Địa chỉ</th>
              <th scope="col" className="email">Email</th>
              <th scope="col" className="username">Username</th>
              <th scope="col" className="action">Hành động</th>
            </tr>
          </thead>
          <Props list = {listUser}/>
        </table>
      </div>
    </section>
  );
}
