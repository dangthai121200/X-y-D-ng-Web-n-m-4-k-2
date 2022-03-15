import React from 'react';
export default function MemberCard({img,name,description}){
    return (
        <div className="col-lg-3 col-6 d-flex flex-column align-items-center animate-left">
        <img src={img} alt=""/>
        <h2>{name}</h2>
        <p className="text-center">{description}</p>
    </div>
    )
}