import React from "react";


export default function AddFeedBack() {
  return (
    <section>
        <div class="container d-flex flex-column justify-content-around">
            <div class="btnNav" id="btnNav">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="text-center mb-5">
                <h1 class="title">THÔNG TIN PHẢN HỒI</h1>
            </div>
            <div class="container rounded bg-white mt-5 mb-5">
                <form>
                    <div class="add-fb">
                        <label hidden style={{fontSize:"20px",marginTop: "15px",marginBottom: "7px"}}>Mã feedback</label>
                        <input type="text" style={{fontSize:"20px",marginTop:"10px",width:"00px",float:"right"}} name="mafb" hidden/><br></br>
                        <div class="title-fb">
                            Phản hồi:
                        </div>
                        <div class="content-fb">
                            <input class="form-control" style={{width:"110rem", height:"7rem", fontSize: "16px"}} type="text" name="mota" placeholder="Điền phản hồi"/>
                        </div>
                    </div>
                    <table class="table .table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="ma">Mã SP</th>
                                <th scope="col" class="hinh">Hình</th>
                                <th scope="col" class="ten">Tên sản phẩm</th>
                                <th scope="col" class="gia">Giá</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                    <div class="add-fb">
                    <div class="btn-sendfb">
                        <button type="submit" class="btnGui" name="action" value="addFeedback">Gửi</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </section>
  );
}