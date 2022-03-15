import React from 'react';

export default function EventCard(){
    return (
        <div className="event d-flex">
            <div className="event__img">
                <img src=".<?php echo $event['hinh'] ?>" alt=""/>
            </div>
            <div className="event__content flex-grow-1 d-flex flex-column justify-content-between">
                <h2 className="content__header2">ten khuyen mai</h2>
                <p className="content__description">mota</p>
                <p className="content__sale">Giảm giá lên tới 4%  <i className="fa-solid fa-piggy-bank"></i> </p>
                <div className="content__extention d-flex justify-content-between">
                    <div className="extention__time">ngaybd - ngaykt </div>
                    <div className="extention__link"><a href="./detailsukien.php?makm=">Xem chi tiết</a></div>
                </div>
            </div>
        </div>
    )
}