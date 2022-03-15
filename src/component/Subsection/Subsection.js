import React from 'react';
import './Subsection.css'
export default function Subsection({subNumber,textOne,textTwo,subTitle}){
    return (
        // <!-- Subsection 1 -->
    <section className={subNumber}>
    <div className="container container__subsection d-flex justify-content-center align-items-center text-center ">
        <h1 className={subTitle}> {textOne} <br/>{textTwo}</h1>
    </div>
    </section>
    )
}