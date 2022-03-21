/* eslint-disable react-hooks/rules-of-hooks */
// <?php include "../../dao/OrderDAO.php" ?>
// <?php
// $orders = OrderDAO::getOrders($conn);
// ?>
// <?php include "./adminheader.php" ?>
// <?php include("./adminnav.php") ?>
import React, { useState, useEffect } from "react";
import { API_URL } from "../../redux/constants";
import { useSelector } from 'react-redux';
import Props from "../props/tbBill";
import axios from "axios";

export default function quanlydonhang() {
    function btnNavmenu() {
        const nav = document.getElementById("nav");
        const header = document.getElementsByTagName("header");
        const section = document.getElementsByTagName("section");

        if (nav.style.transform == "translateX(-100%)" && header[0].style.width == "0%" && section[0].style.width == "80%") {
            nav.style.transform = "translateX(0)";
            header[0].style.width = "20%";
            section[0].style.width = "60%";
        }
        else {
            nav.style.transform = "translateX(-100%)";
            header[0].style.width = "0%";
            section[0].style.width = "80%";
        }
    }

    const [listDon, setListDon] = useState([]);

    const username = useSelector((state) => state.User.userInfo.username);
    const password = useSelector((state) => state.User.userInfo.password);

    useEffect(() => {
        axios        
            .get(`${API_URL}v1/orders`, {
                auth: {
                    username: username,
                    password: password
                }
            })
            .then(res => {
                setListDon(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    })


    return (
        <section>
            <div className="container d-flex flex-column justify-content-around">
                <div className="btnNav" id="btnNav" onClick={btnNavmenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="text-center mb-5">
                    <h1 className="title">QUẢN LÝ ĐƠN HÀNG</h1>
                </div>
                <div className="controller d-flex">
                    <select name="cboSanPham" id="" className="cboSanPham">
                        <option value="tangdan">Tăng dần</option>
                        <option value="giamdan">Giảm dần</option>
                    </select>
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <table className="table .table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="ma">Mã đơn</th>
                            <th scope="col" className="ngaytao">Ngày tạo</th>
                            <th scope="col" className="nguoinhan">Người nhận</th>
                            <th scope="col" className="sdt">SĐT</th>
                            <th scope="col" className="diachi">Địa chỉ</th>
                            <th scope="col" className="tonggia">Tổng tiền</th>
                            <th scope="col" className="tinhtrang">Tình trạng</th>
                            <th scope="col" className="action">Hành động</th>
                        </tr>
                    </thead>
                    <Props list = {listDon}/>
                </table>
            </div>
        </section>
    );
}