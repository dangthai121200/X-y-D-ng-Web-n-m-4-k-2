import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgLogo from "./logo.png";
export default function adminNavbar() {
    
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString("vi-VN");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ctime, setCtime] = useState(time);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cdate, setCdate] = useState(date);

    const UpdateTime =()=>{
        time = new Date().toLocaleTimeString();
        date = new Date().toLocaleDateString("vi-VN");
        setCtime(time);
        setCdate(date);
    };

    setInterval(UpdateTime,1000)
    
    return (
        <header>
            <nav className="nav" id="nav">
                <Link to="/" className="logo">
                    <img src={imgLogo} alt="logo" />
                </Link>
                <div className="clock">
                    <div className="name">
                        {/* <?php echo $username ?> */}
                    </div>
                    <div>
                        <h1>{ctime}</h1>
                        <h1>{cdate}</h1>
                    </div>
                </div>
                <div className="ul">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/">
                                TỔNG QUAN
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <i className="fa-solid fa-laptop"></i>
                                                QUẢN LÝ SẢN PHẨM<i className="fa-solid fa-angle-down"></i>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="info"><Link to="/manageproduct"><i className="fa-solid fa-pen-to-square"></i>XEM THÔNG TIN</Link></div>
                                            <div className="info"><Link to="/addproduct"><i className="fa-solid fa-plus"></i>THÊM LAPTOP</Link></div>
                                            <div className="info"><Link to="/addaccessories"><i className="fa-solid fa-plus"></i>THÊM PHỤ KIỆN</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button">
                                                <Link to="/managecus"><i className="fa-solid fa-user-group"></i>QUẢN LÝ KHÁCH HÀNG</Link>
                                            </button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button">
                                                <Link to="/managebill"><i className="fa-solid fa-cart-shopping"></i>QUẢN LÝ ĐƠN HÀNG</Link>
                                            </button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button">
                                                <Link to="/managesale"><i className="fa-solid fa-gifts"></i>QUẢN LÝ KHUYẾN MÃI</Link>
                                            </button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingFive">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button">
                                                <Link to="/managefeedback"><i className="fa-solid fa-comment"></i>QUẢN LÝ FEEDBACK</Link>
                                            </button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingSix">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button">
                                                <Link to="/managestaff"><i className="fa-solid fa-address-card"></i>QUẢN LÝ NHÂN VIÊN</Link>
                                            </button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <?php echo $quanlynhanvien; ?> */}
                    </ul>
                </div>
                {/* <form action="../controller/logoutController.php"> */}
                <div className="Exit">
                    <a href="/login"><button name="dangxuat" className="btnExit"> ĐĂNG XUẤT</button></a>
                    </div>
                {/* </form> */}
            </nav>

        </header>
    );
}
