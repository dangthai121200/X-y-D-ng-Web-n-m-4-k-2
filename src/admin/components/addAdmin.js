// <?php
// include "../../controller/autoload.php";
// include "../../dao/AdminDAO.php";
// ?>
// <?php include "./adminheader.php" ?>
// <?php include("./adminnav.php") ?>

import React from 'react';

export default function addAdmin() {
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
                    <h1 className="title">THÊM NHÂN VIÊN</h1>
                </div>
                <div className="container rounded bg-white mt-5 mb-5">
                    {/* <form action="../controller/adminController.php" method="post"> */}
                    <form>
                        <table className="table .table-striped" style={{ border: "0" }}>
                            <tr>
                                <th>Mã</th>
                                <input className="form-control" id="editth" type="text" hidden name="ma" value="" />
                                <th><input className="form-control" id="editth" type="text" disabled name="ma" value="" /></th>
                            </tr>
                            <tr>
                                <th>Họ</th>
                                <th><input className="form-control" type="text" id="editth" name="ho" value="" /></th>
                            </tr>
                            <tr>
                                <th>Tên</th>
                                <th><input className="form-control" type="text" id="editth" name="ten" value="" /></th>
                            </tr>
                            <tr>
                                <th>Sđt</th>
                                <th><input className="form-control" type="text" id="editth" name="sdt" value="" /></th>
                            </tr>
                            <tr>
                                <th>Địa chỉ</th>
                                <th><input className="form-control" type="text" id="editth" name="diachi" value="" /></th>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <th><input className="form-control" type="text" id="editth" name="email" value="" /></th>
                            </tr>

                            <tr>
                                <th>Username</th>
                                <th><input className="form-control" type="text" id="editth" name="username" value="" /></th>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <th><input className="form-control" type="text" id="editth" name="password" value="" /></th>
                            </tr>
                            <tr>
                                <th colspan="2">
                                    <div className="mt-5 text-center" style={{ textAlign: "center" }}>
                                        <button name="action" value="insertAdmin" className="btn btn-primary" id="btn-luu" type="submit">Lưu</button>
                                    </div>
                                </th>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </section>
    );
}
