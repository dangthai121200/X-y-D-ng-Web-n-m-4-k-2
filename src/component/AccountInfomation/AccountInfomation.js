import React from "react";

export default function AccountInfomation() {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
            <div className="col-md-8 border-right">
                <div className="p-3 py-5"> 
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right" style={{fontSize:"25px"}}>Thông Tin Tài Khoản</h4>
                    </div>
                    <form action="" method="POST">
                        <input type="text" name="ma" hidden value=""/>
                        <div class="row mt-3">
                            <div class="col-md-6"><label class="labels" style={{fontSize:"20px"}}>Tên</label><input name="ten" type="text" class="form-control" style={{fontSize:"16px",height:"40px"}} placeholder="Nhập tên" value=""/></div>
                            <div class="col-md-6"><label class="labels" style={{fontSize:"20px"}}>Họ</label><input name="ho" type="text" class="form-control" style={{fontSize:"16px",height:"40px"}} placeholder="Nhập họ" value=""/></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels" style={{fontSize:"20px"}}> Số điện thoại</label><input name="sdt" type="text" class="form-control" style={{fontSize:"16px",height:"40px"}} placeholder="Nhập số điện thoại" value=""/></div>
                            <div class="col-md-12"><label class="labels" style={{fontSize:"20px"}}>Địa chỉ</label><input name="diachi" type="text" class="form-control" style={{fontSize:"16px",height:"40px"}} placeholder="Nhập địa chỉ" value=""/></div>
                        </div>
                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" style={{fontSize:"20px",marginBottom:"30px"}} type="submit" name="action" value="update">Cập nhật</button></div>      
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}