import React from "react";
import avatar from "./3bf97c640b8732a64ab73b653f622582.jpg"

export default function AccountInfomation() {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
            <div className="col-md-4 border-right">';
                <div className="d-flex flex-column align-items-center text-center p-5 py-5"><img className="rounded-circle mt-5" src={avatar}/><span className="font-weight-bold" style={{fontSize:"20px"}}></span><span className="text-black-50"></span><span> </span></div>
            </div>
            <div className="col-md-8 border-right">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right" style={{fontSize:"25px"}}>Thông Tin Tài Khoản</h4>
                    </div>
                    <form action="" method="POST">
                        <input type="text" name="ma" hidden value=""/>
                        <div className="row mt-3">
                            <div className="col-md-6"><input name="ten" type="text" className="form-control" style={{fontSize:"20px",height:"40px"}} placeholder="Nhập tên" value=""/></div>
                            <div className="col-md-6"><input name="ho" type="text" className="form-control" style={{fontSize:"20px",height:"40px"}} placeholder="Nhập họ" value=""/></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><input name="sdt" type="text" className="form-control" style={{fontSize:"16px",height:"40px"}} placeholder="Nhập số điện thoại" value=""/></div>
                            <div className="col-md-12 mt-3"><input name="diachi" type="text" className="form-control" style={{fontSize:"16px",height:"40px"}} placeholder="Nhập địa chỉ" value=""/></div>
                        </div>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" style={{fontSize:"20px", marginBottom:"30px"}} type="submit" name="action" value="update">Cập nhật</button></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}