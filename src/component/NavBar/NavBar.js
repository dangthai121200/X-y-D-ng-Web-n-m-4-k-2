import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import imgLogo from "../../images/logo.png";


const NavBar = () => {

  return (
    <header>
    <svg class="header-svg" xmlns="http://www.w3.org/2000/svg" width="1920" height="160" viewBox="0 0 1920 160">
        <path id="Path_18" data-name="Path 18" d="M0,962.463V841.023s488.623,70.127,982.994-8.552S1920,854.707,1920,854.707V962.463Z" transform="translate(1920 962.463) rotate(180)" fill="#a3e0ff" />
    </svg>
    <div class="container">
        <i class="fa-solid fa-bars" id="navBtn"></i>
        <nav class='nav' id="nav">
            <div class="logo">
                <Link to="/">
                    <img src={imgLogo} alt="logo" />
                </Link>
            </div>
            <ul class="snip1476">
                <li class="current">
                    <Link to="/" class="active">Trang chủ</Link>
                </li>
                <li>
                    <Link to="Laptop">Laptop</Link>
                </li>
                <li>
                    <a to="Accessory">Phụ kiện</a>
                </li>
                <li><Link to="Envent">Sự kiện</Link></li>
                <li><Link to="Contact">Liên hệ</Link></li>
                <li><Link to="Aboutus">Về chúng tôi</Link></li>
            </ul>
            {/* <div class="icon">
                <div>
                    <a href="./giohang.php" class="giohangcount"><i class="fa-solid fa-cart-shopping fa-xl">
                    </i>
                    <div class="count">
                        <?php if(isset($_SESSION['cart'])) echo count($_SESSION['cart']);
                        else echo "0";
                        ?>
                    </div>
                    </a>
                </div>
                <div> <a href=""><i class="fa-solid fa-bell fa-xl"></i></a></div>
                <div class="user_dropdown">
                    <?php echo $user ?>
                    <ul class="user_dropdown_content">
                        <?php
                        echo $userDropdown;
                        ?>
                    </ul>
                </div>
            </div> */}
        </nav>
    </div>
</header>
  )
}

export default NavBar;