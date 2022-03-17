// <?php
// include "../../controller/autoload.php";
// include "../../dao/AdminDAO.php";
// // $email = $_GET['email'];
// // var_dump($email);
// // exit();
// $admin = AdminDAO::getAdminEdit($_GET["maad"], $conn);
// // $adminn = AdminDAO::getAdminWithEmail($email, $conn);
// ?>
// <?php include "./adminheader.php" ?>
// <?php include("./adminnav.php") ?>
// <?php
// if(!empty($_SESSION['error'])){
//     $error = $_SESSION['error'];
//     echo "
//     <div className='modal' tabindex='-1'>
//     <div className='modal-dialog'>
//       <div className='modal-content'>
//         <div className='modal-header'>
//           <h5 className='modal-title'>Lỗi thanh toán</h5>
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

import React from "react";

export default function editthongtinadmin() {
    return (
        <section>
            <div className="container d-flex flex-column justify-content-around">
                <div className="btnNav" id="btnNav">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="text-center mb-5">
                    <h1 className="title">SỬA THÔNG TIN NHÂN VIÊN</h1>
                </div>
                <div className="container rounded bg-white mt-5 mb-5">
                    <form action="../controller/adminController.php" method="post">
                        <table className="table .table-striped" style={{border: "0"}}>
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
                                    <div className="mt-5 text-center" style={{textAlign: "center"}}>
                                        <button name="action" value="update" className="btn btn-primary" id="btn-luu" type="submit">Lưu</button>
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