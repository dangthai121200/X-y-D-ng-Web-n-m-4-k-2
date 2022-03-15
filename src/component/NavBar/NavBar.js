import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from "./logo.png";


const NavBar = () => {

  return (
    <header>
    <svg className="header-svg" xmlns="http://www.w3.org/2000/svg" width="1920" height="160" viewBox="0 0 1920 160">
        <path id="Path_18" data-name="Path 18" d="M0,962.463V841.023s488.623,70.127,982.994-8.552S1920,854.707,1920,854.707V962.463Z" transform="translate(1920 962.463) rotate(180)" fill="#a3e0ff" />
    </svg>
    <div className="container">
        <i className="fa-solid fa-bars" id="navBtn"></i>
        <nav className='nav' id="nav">
            <div className="logo">
                <Link to="/">
                    <img src={imgLogo} alt="logo" />
                </Link>
            </div>
            <ul className="snip1476">
                <li className="current">
                    <Link to="/" className="active">Trang chủ</Link>
                </li>
                <li>
                    <Link to="Laptop">Laptop</Link>
                </li>
                <li>
                    <Link to="Accessory">Phụ kiện</Link>
                </li>
                <li><Link to="Envent">Sự kiện</Link></li>
                <li><Link to="Contact">Liên hệ</Link></li>
                <li><Link to="Aboutus">Về chúng tôi</Link></li>
            </ul>
            <div className="icon">
                <div>
                    <Link to="cart" className="giohangcount"><i className="fa-solid fa-cart-shopping fa-xl">
                    </i>
                    <div className="count">
                        0
                    </div>
                    </Link>
                </div>
                <div> <Link to="/"><i className="fa-solid fa-bell fa-xl"></i></Link></div>
                <div className="user_dropdown">
                    <Link to="/account" className='user'> Admin </Link>
                    <ul className="user_dropdown_content">
                        <li><Link to="/login">Đăng nhập</Link></li>
                        <li><Link to="/register">Đăng ký</Link></li>
                        <li><Link to="/accountInfo">Thông tin tài khoản</Link></li>
                        <li><Link to="/history">Lịch sử mua hàng</Link></li>
                        <li><Link to="/">Thoát</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>
  )
}

export default NavBar;