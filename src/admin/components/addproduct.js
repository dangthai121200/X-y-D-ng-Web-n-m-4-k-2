// <?php
// include "../../controller/autoload.php";
// include "../../dao/ProductDAO.php";
// $hangs = ProductDAO::getAllHang($conn);
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
//   }
// ?>
// <?php include("./adminnav.php") ?>

import React from "react";

export default function addproduct() {
    return (
        <section>
            <div className="container d-flex flex-column justify-content-around">
                <div className="btnNav" id="btnNav">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="text-center mb-5">
                    <h1 className="title">THÊM SẢN PHẨM LAPTOP</h1>
                </div>
                <div className="table .table-striped">
                    <div className="col-md-8 border-right">
                        {/* <form action="../controller/productController.php" method="POST" enctype="multipart/form-data"> */}
                        <form>
                            <div className="row1">
                                <div className="col-sm-9 left-row">
                                    <label style={{ fontSize: "20px" }}>Hình</label>
                                    <div className="pic" style={{ width: "290px", height: "237px", border: "1px solid" }}>
                                        <img alt="hinh" id="hinh" style={{ minWidth: "290px", maxHeight: "237px" }} src="" /> </div>
                                    <input style={{ marginTop: "10px", fontSize: "16px" }} type="file" id="myFile" name="filename" />
                                    <br />
                                    <label style={{ fontSize: "20px", marginTop: "7px" }}>Hãng</label><br />
                                    <select name="mahang" style={{ fontSize: "16px", width: "220px" }} className="form-select" aria-label="Default select example">
                                        {/* <?php foreach ($hangs as $hang) : ?>
                                    <option value="<?php echo $hang['mahang'] ?>"><?php echo $hang['tenhang'] ?></option>
                                <?php endforeach; ?> */}
                                    </select>
                                    <label style={{ marginTop: "7px", fontSize: "20px" }}>Trọng lượng</label><br />
                                    <input type="text" name="trongluong" className="inputSp" /><br />
                                    <label style={{ fontSize: "20px", marginTop: "7px" }}>Màn hình</label><br />
                                    <input type="text" className="inputSp" name="manhinh" /><br />
                                    <label style={{ fontSize: "20px", marginTop: "7px" }}>Ổ cứng</label><br />
                                    <input type="text" className="inputSp" name="ocung" /><br />
                                    <label style={{ fontSize: "20px", marginTop: "7px" }}>CPU</label><br />
                                    <input type="text" className="inputSp" name="cpu" /><br />
                                    <label style={{ fontSize: "20px", marginTop: "15px" }}>RAM</label><br />
                                    <input type="text" className="inputSp" name="ram" /><br />
                                </div>
                                <div className="col-sm-9 right-row" style={{ float: "left" }}>
                                    <label hidden style={{ fontSize: "20px", marginTop: "15px", marginBottom: "7px" }}>Mã sản phẩm</label>
                                    <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "200px", float: "right" }} name="masp" hidden /><br />
                                    <label style={{ fontSize: "20px", marginTop: "15px" }}>Loại sản phẩm</label>
                                    <select name="loaisp" id="" style={{ marginTop: "10px", fontSize: "20px", width: "200px", float: "right" }}>
                                        <option value="laptop">Laptop</option>
                                        <option value="phukien">Phụ kiện</option>
                                    </select>
                                    <br />
                                    <label style={{ fontSize: "20px", marginTop: "15px" }}>Tên sản phẩm</label><br />
                                    <input type="text" style={{ marginTop: "10px", fontSize: "20px", width: "345px" }} name="tensp" /><br />
                                    <label style={{ fontSize: "20px", marginTop: "15px" }}>Mô tả</label><br />
                                    <textarea style={{ marginTop: "10px", fontSize: "20px", width: "345px", height: "130px" }} name="mota"></textarea><br />
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
                                    <label style={{ marginTop: "-25px", fontSize: "20px" }}>Màu</label><br />
                                    <input type="text" className="inputSp" name="mausac" /><br />
                                    <label style={{ fontSize: "20px", marginTop: "7px" }}>Loại máy</label><br />
                                    <select name="maloaimay" id="" className="inputSp">
                                        <option value="1">Học tập - Văn phòng</option>
                                        <option value="2">Đồ họa - Gaming</option>
                                        <option value="3">Mỏng nhẹ cao cấp</option>
                                    </select>

                                    <br />
                                    <label style={{ fontSize: "20px", marginTop: "10px" }}>VGA</label><br />
                                    <input type="text" className="inputSp" name="vga" /><br />
                                    <label style={{ fontSize: "20px", marginTop: "15px" }}>PIN</label><br />
                                    <input type="text" className="inputSp" name="pin" /><br />

                                </div>

                            </div>
                            <div className="btn-add">
                                <button id="btn-add" type="submit" name="action" value="addLaptop">ADD</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
