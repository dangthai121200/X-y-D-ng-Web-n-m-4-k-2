// <?php
// include "../../controller/autoload.php";
// include "../../dao/AccessoryDAO.php";
// $hangs = AccessoryDAO::getAllHang($conn);
// $loaipks = AccessoryDAO::getAllLoaiPhuKien($conn);
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

export default function addaccessories() {
    return (
        <section>
            <div className="container d-flex flex-column justify-content-around">
                <div className="btnNav" id="btnNav">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="text-center mb-5">
                    <h1 className="title">THÊM SẢN PHẨM PHỤ KIỆN</h1>
                </div>
                <div className="table .table-striped">
                    <div className="col-md-8 border-right">
                        {/* <form action="../controller/AccessoryController.php" method="POST" enctype="multipart/form-data"> */}
                        <form>
                            <div className="row1">
                                <div className="col-sm-9 left-row">
                                    <label style={{ fontSize: "20px" }}>Hình</label>
                                    <div className="pic" style={{ width: "290px", height: "237px", border: "1px solid" }}><img alt="hinh" id="hinh" style={{ minWidth: "290px", maxHeight: "237px" }} src="" /> </div>
                                    <input style={{ marginTop: "10px", fontSize: "16px" }} type="file" id="myFile" name="filename" />
                                    <br />
                                    <label style={{ fontSize: "20px", marginTop: "7px" }}>Hãng</label><br />
                                    <select name="mahang" style={{ fontSize: "16px", width: "220px" }} className="form-select" aria-label="Default select example">
                                        {/* <?php foreach ($hangs as $hang) : ?>
                                    <option value="<?php echo $hang['mahang'] ?>"><?php echo $hang['tenhang'] ?></option>
                                <?php endforeach; ?> */}
                                    </select>
                                    <label style={{ fontSize: "20px", marginTop: "7px" }}>Loại phụ kiện</label><br />
                                    <select name="maloaipk" id="" className="inputSp">
                                        {/* <?php foreach ($loaipks as $loaipk) : ?>
                                    <option value="<?php echo $loaipk['maloaipk'] ?>"><?php echo $loaipk['tenloai'] ?></option>
                                <?php endforeach; ?> */}
                                    </select>
                                </div>
                                <div className="col-sm-9 right-row" style={{ float: "left" }}>
                                    <label hidden style={{ fontSize: "20px", marginTop: "15px", marginBottom: "7px" }}>Mã sản phẩm</label>
                                    <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "200px", float: "right" }} name="masp" hidden /><br />
                                    <label style={{ fontSize: "20px", marginTop: "15px" }}>Loại sản phẩm</label>
                                    <select name="loaisp" id="" style={{ marginTop: "10px", fontSize: "20px", width: "200px", float: "right" }}>
                                        <option value="phukien">Phụ kiện</option>
                                        <option value="laptop">Laptop</option>
                                    </select>
                                    <label style={{ fontSize: "20px", marginTop: "15px" }}>Tên sản phẩm</label><br />
                                    <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "345px" }} name="tensp" /><br />
                                    <label style={{ fontSize: "20px", marginTop: "15px" }}>Mô tả</label><br />
                                    <textarea style={{ marginTop: "10px", fontSize: "20px", width: "345px", height: "135px" }} name="mota"></textarea><br />
                                    <div className="subsub0" style={{ marginBottom: "-10px" }}>
                                        <div className="subsub1">
                                            <label style={{ fontSize: "20px", marginTop: "7px" }}>Số lượng</label><br />
                                            <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "125px" }} name="soluong" />
                                        </div>
                                        <div className="subsub2">
                                            <label style={{ fontSize: "20px", marginTop: "7px" }}>Giá</label><br />
                                            <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "200px" }} name="gia" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="btn-add">
                                <button id="btn-add" type="submit" name="action" value="addPhukien">ADD</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
