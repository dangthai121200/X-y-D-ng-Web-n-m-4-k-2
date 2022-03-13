import React from "react";
import './Categories.css';

export default function Categories(){
    function  btnUp1(){
        const cateContent = document.querySelectorAll('.cateContent');
       const cateContentHeader= document.querySelectorAll('.cateContent_header');
       const cateContentDescription= document.querySelectorAll('.cateContent_header_description');
       
           if(cateContent[0].style.height == '52.4rem'){
               cateContent[0].style.height = '0';
               cateContentHeader[0].style.opacity="0";
               cateContentHeader[1].style.opacity="0";
               cateContentDescription[0].style.opacity="0";
               cateContentDescription[1].style.opacity="0";
           }
           else{
               cateContent[0].style.height = '52.4rem';
               cateContentHeader[0].style.opacity="1";
               cateContentHeader[1].style.opacity="1";
               cateContentDescription[0].style.opacity="1";
               cateContentDescription[1].style.opacity="1";
           }
       }
       // categories script
       function btnUp2(){
           const cateContent = document.querySelectorAll('.cateContent');
           const cateContentHeader= document.querySelectorAll('.cateContent_header');
           const cateContentDescription= document.querySelectorAll('.cateContent_header_description');
       
           if(cateContent[1].style.height == '52.4rem'){
               cateContent[1].style.height = '0';
               cateContentHeader[2].style.opacity="0";
               cateContentHeader[3].style.opacity="0";
               cateContentDescription[2].style.opacity="0";
               cateContentDescription[3].style.opacity="0";
           }
           else{
               cateContent[1].style.height = '52.4rem';
               cateContentHeader[2].style.opacity="1";
               cateContentHeader[3].style.opacity="1";
               cateContentDescription[2].style.opacity="1";
               cateContentDescription[3].style.opacity="1";
           }
       }
       function btnUp3(){
           const cateContent = document.querySelectorAll('.cateContent');
           const cateContentHeader= document.querySelectorAll('.cateContent_header');
           const cateContentDescription= document.querySelectorAll('.cateContent_header_description');
           if(cateContent[2].style.height == '52.4rem'){
           
               cateContent[2].style.height = '0';
               cateContentHeader[4].style.opacity="0";
               cateContentHeader[5].style.opacity="0";
               cateContentDescription[4].style.opacity="0";
               cateContentDescription[5].style.opacity="0";
           }
           else{
               cateContent[2].style.height = '52.4rem';
               cateContentHeader[4].style.opacity="1";
               cateContentHeader[5].style.opacity="1";
               cateContentDescription[4].style.opacity="1";
               cateContentDescription[5].style.opacity="1";
           }
       }
    return (
        // <!-- Cagories -->
<section className="categories">
    <div className="container">
        <h1 className="cateHeader text-center animate-left" id="categories">DANH MỤC SẢN PHẨM</h1>
        <div className="row">
            <div className="col-xl-4 col-sm-12 col-12 animate-top">
                <div className="cateImage">
                    <div className="cateImage_overlay">
                        <h2 className="cateImage_title">HỌC TẬP <br/> VĂN PHÒNG</h2>
                        <a href="#categories__work" className="cateImage_subtitle">
                            <i className="fa-solid fa-laptop-code"></i>
                            <h3 className="cateImage_subtitle_content">Xem ngay</h3>
                        </a>
                    </div>
                </div>
                <div className="cateContent">
                    <h2 className="cateContent_header">Phù hợp cho:</h2>
                    <p className="cateContent_header_description">
                        Học sinh, sinh viên
                        Nhân viên văn phòng
                    </p>
                    <h2 className="cateContent_header">Ưu điểm:</h2>
                    <p className="cateContent_header_description">
                        Đáp ứng nhu cầu làm việc và học tập, giải trí đơn giản
                        Video, audio, word, excel, power point, game nhẹ,....
                        Giá nhẹ
                    </p>
                    <button className="btnUp" onClick={btnUp1}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
            </div>
            <div className="col-xl-4 col-sm-12 col-12 col-sm-12 animate-bottom">
                <div className="cateImage cateImage--2">
                    <div className="cateImage_overlay">
                        <h2 className="cateImage_title cateImage_title--2">ĐỒ HỌA <br/> GAMING</h2>
                        <a href="#categories_gaming" className="cateImage_subtitle">
                            <i className="fa-solid fa-gamepad"></i>
                            <h3 className="cateImage_subtitle_content">Xem ngay</h3>
                        </a>
                    </div>
                </div>
                <div className="cateContent cateContent--2">
                    <h2 className="cateContent_header">Phù hợp cho:</h2>
                    <p className="cateContent_header_description">
                        Game thủ
                        Anh chị em thiết kế đồ họa

                    </p>
                    <h2 className="cateContent_header">Ưu điểm:</h2>
                    <p className="cateContent_header_description">
                        Đáp ứng nhu cầu làm việc và học tập, giải trí cao
                        Ps, Ai, Pr, Xd, Id, Blender, 3DMax, game cấu hình cao,....
                        Hỗ trợ card đồ họa
                    </p>
                    <button className="btnUp btnUp2" onClick={btnUp2}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
            </div>
            <div className="col-xl-4 col-sm-12 col-12 animate-top">
                <div className="cateImage cateImage--3">
                    <div className="cateImage_overlay">
                        <h2 className="cateImage_title cateImage_title--3">MỎNG NHẸ <br/> CAO CẤP</h2>
                        <a href="#categories__high" className="cateImage_subtitle">
                            <i className="fa-brands fa-apple"></i>
                            <h3 className="cateImage_subtitle_content">Xem ngay</h3>
                        </a>
                    </div>
                </div>
                <div className="cateContent cateContent--3">
                    <h2 className="cateContent_header">Phù hợp cho:</h2>
                    <p className="cateContent_header_description">
                        Doanh nhân
                        Người đam mê công nghệ
                    </p>
                    <h2 className="cateContent_header">Ưu điểm:</h2>
                    <p className="cateContent_header_description">
                        Đáp ứng nhu cầu làm việc và học tập, giải trí, nghiên cứu
                        Đẳng cấp, sang trọng
                        Cấu hình khủng đáp ứng nhiều nhu cầu nghiên cứu công nghệ
                    </p>
                    <button className="btnUp btnUp3" onClick={btnUp3}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}