// <?php
// include "../../controller/autoload.php";
// include "../../dao/KhuyenMaiDAO.php";
// $khuyenmai = KhuyenMaiDAO::getKhuyenMai($_GET["makm"], $conn);
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

export default function editkhuyenmai() {
  return (
    <section>
      <div className="container d-flex flex-column justify-content-around">
        <div className="btnNav" id="btnNav">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="text-center mb-5">
          <h1 className="title">UPDATE KHUYẾN MÃI</h1>
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
                  <label hidden style={{ fontSize: "20px", marginTop: "15px", marginBottom: "7px" }}>Mã đợt khuyến mãi</label>
                  <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "200px", float: "right" }} name="makm" value="<? php echo $khuyenmai['makm'] ?>" hidden /><br />
                  <label style={{ fontSize: "20px", marginTop: "15px" }}>Tên đợt khuyến mãi</label><br />
                  <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "100%" }} name="tenkm" value="<?php echo $khuyenmai['tenkm'] ?>" /><br />
                  <label style={{ fontSize: "20px", marginTop: "15px" }}>Mô tả</label><br />
                  <textarea style={{
                    marginTop: "10px", fontSize: "20px", width: "100%", height: "135px"
                  }} name="mota"> </textarea><br />
                  <label style={{ fontSize: "20px", marginTop: "15px" }}>Giá trị giảm</label><br />
                  <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "100%" }} name="giatrigiam" value="<?php echo $khuyenmai['giatrigiam'] ?>" /><br />

                  <label style={{ fontSize: "20px", marginTop: "15px" }}>Ngày bắt đầu</label><br />
                  <input type="date" style={{ marginTop: "10px", fontSize: "20px", width: "100%" }} name="ngaybd" value="<?php echo $khuyenmai['ngaybd']?>" /><br />

                  <label style={{ fontSize: "20px", marginTop: "15px" }}>Ngày kết thúc</label><br />
                  <input type="date" style={{ marginTop: "10px", fontSize: "20px", width: "100%" }} name="ngaykt" value="<?php echo $khuyenmai['ngaykt'] ?>" /><br />


                </div>

              </div>
              <div className="btn-add">
                <button id="btn-add" type="submit" name="action" value="updateKhuyenmai">UPDATE</button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </section >
  );
}