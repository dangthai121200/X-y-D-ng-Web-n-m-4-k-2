import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function MemberCard({img,name,description}){
    AOS.init();
    return (
        <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200"
        className="col-lg-3 col-6 d-flex flex-column align-items-center">
        <img src={img} alt=""/>
        <h2>{name}</h2>
        <p className="text-center">{description}</p>
    </div>
    )
}