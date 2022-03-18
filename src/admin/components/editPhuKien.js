// <?php
// include "../../controller/autoload.php";
// include "../../dao/AccessoryDAO.php";
// $hangs = AccessoryDAO::getAllHang($conn);
// $phukien = AccessoryDAO::getPhuKien($_GET["masp"], $conn);
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

export default function editPhuKien() {
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
                    <h1 className="title">UPDATE PHỤ KIỆN</h1>
                </div>
                <div className="table .table-striped">
                    <div className="col-md-8 border-right">
                        {/* <form action="../controller/AccessoryController.php" method="POST" enctype="multipart/form-data"> */}
                        <form>
                            <div className="row1">
                                <div className="col-sm-9 left-row">
                                    <label style={{fontSize: "20px"}}>Hình</label>
                                    <div className="pic" style={{width: "290px", height: "237px", border: "1px solid"}}>
                                    <img alt="hinh" id="hinh" style={{minWidth: "290px", maxHeight: "237px"}} src=""  /> </div>
                                    <input style={{marginTop: "10px", fontSize: "16px"}} type="file" id="myFile" name="filename" />
                                    <br />
                                    <label style={{fontSize: "20px",marginTop: "7px"}}>Hãng</label><br />
                                    <select name="mahang" style={{fontSize: "16px", width: "220px"}} className="form-select" aria-label="Default select example">
                                        {/* <?php foreach ($hangs as $hang) : ?>
                                                    <option value="<?php echo $hang['mahang'] ?>"
                                    <?php if($phukien['mahang'] == $hang['mahang'])
                                                    echo "selected";
                                    ?>
                                    ><?php echo $hang['tenhang'] ?></option>
                                                <?php endforeach; ?> */}
                                    </select>
                                    <label style={{fontSize: "20px",marginTop: "7px"}}>Loại phụ kiện</label><br />
                                    <select name="maloaipk" id="" className="inputSp">
                                        {/* <option value="1" <?php if ($phukien['maloaipk'] == "1") echo "selected"; ?>>Chuột</option>
                                                <option value="2" <?php if ($phukien['maloaipk'] == "2") echo "selected"; ?>>Tai nghe</option>
                                            <option value="3" <?php if ($phukien['maloaipk'] == "3") echo "selected"; ?>>Miếng lót chuột</option>
                                        <option value="4" <?php if ($phukien['maloaipk'] == "4") echo "selected"; ?>>Dây sạc</option>
                                    <option value="5" <?php if ($phukien['maloaipk'] == "5") echo "selected"; ?>>Balo</option> */}
                                    </select>
                                </div>
                                <div className="col-sm-9 right-row" style={{float:"left"}}>
                                    <label hidden style={{fontSize: "20px",marginTop: "15px",marginBottom: "7px"}}>Mã sản phẩm</label>
                                    <input type="text" style={{marginTop: "10px", fontSize: "20px", width: "200px", float:"right"}} name="masp" value="<?php echo $phukien['masp'] ?>" hidden /><br />
                                    <label style={{fontSize: "20px",marginTop: "15px"}}>Loại sản phẩm</label>
                                    <select name="loaisp" id="" style={{marginTop: "10px", fontSize: "20px", width: "200px", float:"right"}}>
                                        <option value="phukien">Phụ kiện</option>
                                    </select>
                                    <label style={{fontSize: "20px",marginTop: "15px"}}>Tên sản phẩm</label><br />
                                    <input type="text" style={{marginTop: "10px", fontSize: "20px", width: "345px"}} name="tensp" value="<?php echo $phukien['tensp'] ?>" /><br />
                                    <label style={{fontSize: "20px",marginTop: "15px"}}>Mô tả</label><br />
                                    <textarea style={{marginTop: "10px", fontSize: "20px", width: "345px", height:"135px"}} name="mota"></textarea><br />
                                    <div className="subsub0" style={{marginBottom:"-10px"}}>
                                        <div className="subsub1">
                                            <label style={{fontSize: "20px",marginTop: "7px"}}>Số lượng</label><br />
                                            <input type="text" style={{marginTop: "10px", fontSize: "20px", width: "125px"}} name="soluong" value="<?php echo $phukien['soluong'] ?>" />
                                        </div>
                                        <div className="subsub2">
                                            <label style={{fontSize: "20px",marginTop: "7px"}}>Giá</label><br />
                                            <input type="text" style={{marginTop: "10px", fontSize: "20px", width: "200px"}} name="gia" value="<?php echo $phukien['gia'] ?>" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="btn-add">
                                <button id="btn-add" type="submit" name="action" value="updatePhukien">UPDATE</button>
                            </div>
                        </form >
                    </div >
                </div >
            </div >
        </section >
    );
}
