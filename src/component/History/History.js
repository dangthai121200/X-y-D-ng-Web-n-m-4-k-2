import React from 'react';
import Computer2 from "../../images/computer2.jpg";

export default function History(){
    return (
        <div className="row history">
        <div className="col-6 order-2 d-flex flex-column justify-content-center">
            <h2 className="heading animate-top">Lịch sử hình thành</h2>
            <p className="description animate-right">Atlaptop được thành lập vào năm 2020 bởi 2 founder Trugtie và AlarShere với mong muốn mang lại cho khách hàng những sản phẩm hiện đại và mạnh mẽ nhất.
            </p>
        </div>
        <div className="col-6 order-1 d-flex flex-column justify-content-center animate-left">
            <img src={Computer2} alt=""/>
            <title>Placeholder</title>
        </div>
    </div>
    )
}