import React from 'react';
import EventCard from '../EventCard/EventCard'
export default function Event(){
    return (
<section>
    <div className="container">
        <h1 className="cateHeader text-center event__header animate-top" id="categories__work">SỰ KIỆN</h1>
        <EventCard/>
        <EventCard/>
        <EventCard/>
    </div>
</section>
    )
}