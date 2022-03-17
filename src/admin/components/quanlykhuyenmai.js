// <?php
// include "../../controller/autoload.php";
// include "../../dao/KhuyenMaiDAO.php";
// $khuyenmais = KhuyenMaiDAO::getAllKhuyenMai($conn);
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
import React from "react";
import { Link} from "react-router-dom";
export default function quanlykhuyenmai() {
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
                    <h1 className="title">QUẢN LÝ KHUYẾN MÃI</h1>
                </div>
                <div className="controller d-flex">
                    {/* <a className="btnThem" >Thêm</a> */}
                    <Link to="/addsale" className="btnThem">Thêm</Link>
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
                            <th scope="col" className="ma">Mã đợt</th>
                            <th scope="col" className="hinh">Hình</th>
                            <th scope="col" className="ten">Tên đợt</th>
                            <th scope="col" className="mota">Mô tả</th>
                            <th scope="col" className="giatrigiam">Giá trị giảm</th>
                            <th scope="col" className="ngaybd">Ngày bắt đầu</th>
                            <th scope="col" className="ngaykt">Ngày kết thúc</th>
                            <th scope="col" className="action">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <?php foreach ($khuyenmais as $khuyenmai) : ?>
                        <tr>
                            <th scope="row"><?php echo $khuyenmai['makm'] ?></th>
                            <td><img src="<?php echo "./" . $khuyenmai["hinh"] ?>" alt=""></td>
                            <td><?php echo $khuyenmai['tenkm'] ?></td>
                            <td><?php echo $khuyenmai['mota'] ?></td>
                            <td><?php echo $khuyenmai['giatrigiam']."%" ?></td>
                            <td><?php echo $khuyenmai['ngaybd'] ?></td>
                            <td><?php echo $khuyenmai['ngaykt'] ?></td>
                            <td className="action d-flex justify-content-around align-items-center">
                                <a href="./editkhuyenmai.php?makm=<?php echo $khuyenmai['makm'] ?>" className="sua">Sửa</a>
                                <a href="../controller/khuyenmaiController.php?action=delete&makm=<?php echo $khuyenmai['makm'] ?>" className="xoa">Xóa</a>
                            </td>
                        </tr>
                        <?php endforeach; ?> */}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
