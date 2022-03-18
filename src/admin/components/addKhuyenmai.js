// <?php
// include "../../controller/autoload.php";
// include "../../dao/KhuyenMaiDAO.php";
// ?>

// <?php include "./adminheader.php" ?>

// <?php
// if (!empty($_SESSION['error'])) {
//     $error = $_SESSION['error'];
//     echo "
//     <div className='modal' tabindex='-1'>
//     <div className='modal-dialog'>
//       <div className='modal-content'>
//         <div className='modal-header'>
//           <h5 className='modal-title'>Lỗi thêm sản phẩm</h5>
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
//     unset($_SESSION["error"]);
// }
// ?>

// <?php include("./adminnav.php") ?>

import React from "react";

export default function addKhuyenmai() {
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
                    <h1 className="title">THÊM KHUYẾN MÃI</h1>
                </div>
                <div className="table .table-striped">
                    <div className="col-md-8 border-right">
                        {/* <form action="../controller/khuyenmaiController.php" method="POST" enctype="multipart/form-data"> */}
                        <form>
                            <div className="row1">
                                <div className="col-sm-12" style={{ marginLeft: "3rem" }}>
                                    <label style={{ fontSize: "20px" }}>Hình</label>
                                    <div className="pic" style={{ width: "290px", height: "237px", border: "1px solid" }}>
                                        <img alt="hinh" id="hinh" style={{ minWidth: "290px", maxHeight: "237px" }} src="" /> </div>
                                    <input style={{ marginTop: "10px", fontSize: "16px" }} type="file" id="myFile" name="filename" />
                                    <br />
                                    <label hidden style={{ fontSize: "20px",marginTop: "15px", marginBottom: "7px" }}>Mã đợt khuyến mãi</label>
                                    <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "200px", float: "right" }} name="makm" value="" hidden /><br />
                                    <label style={{ fontSize: "20px",marginTop: "15px" }}>Tên đợt khuyến mãi</label><br />
                                    <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "100 %"}} name="tenkm" value="" /><br />
                                    <label style={{ fontSize: "20px",marginTop: "15px" }}>Mô tả</label><br />
                                    <textarea style={{ marginTop: "10px", fontSize: "20px", width: "100 %", height: "135px" }} name="mota"> </textarea><br />
                                    <label style={{ fontSize: "20px",marginTop: "15px" }}>Giá trị giảm</label><br />
                                    <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "100 %"}} name="giatrigiam" value="" /><br />
                                    <label style={{ fontSize: "20px",marginTop: "15px" }}>Ngày bắt đầu</label><br />
                                    <input type="date" style={{ marginTop: "10px", fontSize: "20px", width: "100 %"}} name="ngaybd" value="" /><br />
                                    <label style={{ fontSize: "20px", marginTop: "15px" }}>Ngày kết thúc</label><br />
                                    <input type="date" style={{ marginTop: "10px", fontSize: "20px", width: "100%" }} name="ngaykt" value="" /><br />
                                </div>
                            </div>
                            <div className="btn-add">
                                <button id="btn-add" type="submit" name="action" value="insertKhuyenmai">ADD</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}