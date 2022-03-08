import React from 'react';
import AsusLogo from '../../images/AsusLogo.png';
import HPLogo from '../../images/hplogo.png';
import MacBook from '../../images/macbooklogo.png';
import DellLogo from '../../images/delllogo.png';
import AcerLogo from '../../images/acerlogo.png';
import $ from 'jquery';

export default function Label() {
    return (
        // <!-- Label -->
        <section className="label">
            <div className="container">
                <div className="customer-logos">
                    <div className="slide"><img src={AsusLogo} /></div>
                    <div className="slide"><img src={HPLogo} /></div>
                    <div className="slide"><img src={MacBook} /></div>
                    <div className="slide"><img src={DellLogo} /></div>
                    <div className="slide"><img src={AcerLogo} /></div>
                </div>
            </div>
        </section>
    )
}

//Infinity carosel
$(function () {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});
