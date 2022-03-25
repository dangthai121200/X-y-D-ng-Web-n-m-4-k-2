/* eslint-disable react-hooks/rules-of-hooks */
// <?php
// include "../../controller/autoload.php";
// include "../../dao/ProductDAO.php";
// include "../../dao/AccessoryDAO.php";
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
import React, { useState,useEffect} from "react";
import { API_URL } from "../../redux/constants";
import {Link} from "react-router-dom";
import Props from "../props/tbLaptop";
import axios from "axios";

export default function quanlysanpham() {
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

 const [listSanPham,setListSanPham]= useState([]);

 useEffect(()=>{
    axios
    .get (`${API_URL}v1/laptop`)
    .then (res =>{
        setListSanPham(res.data);
    })
    .catch(err =>{
        console.log(err);
    })
 },[])

    return (
        <section>
            <div className="container d-flex flex-column justify-content-around">
                <div className="btnNav" id="btnNav" onClick={btnNavmenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="text-center mb-5">
                    <h1 className="title">QUẢN LÝ SẢN PHẨM</h1>
                </div>
                <div className="controller d-flex">
                    <Link to="/addproduct" className="btnThem">Thêm</Link>
                    {/* <!-- <form id = "filterForm" action="../controller/productController.php" method="get"> --> */}
                    <input type="text" id="productHidden" hidden />
                    <select name="action" id="filterCBO" className="cboSanPham" >
                        <option value="Laptop">LAPTOP</option>
                        <option value="Phukien">PHỤ KIỆN</option>
                    </select>
                    {/* <!-- </form> --> */}
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                {/* <table className="table .table-striped" id="showCase"> */}
                    {/* <thead>
                        <tr>
                            <th scope="col" className="ma">Mã SP</th>
                            <th scope="col" className="hinh">Hình</th>
                            <th scope="col" className="ten">Tên sản phẩm</th>
                            <th scope="col" className="gia">Giá</th>
                            <th scope="col" className="sl">Số lượng</th>
                            <th scope="col" className="tinhtrang">Tình trạng</th>
                            <th scope="col" className="hanhdong">Hành động</th>
                        </tr>
                    </thead> */}
                    <Props list = {listSanPham}/>                    
                {/* </table> */}
            </div>
        </section>
    );
}