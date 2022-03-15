import React from 'react';
import MemberCard from '../MemberCard/MemberCard';
import Trugtie from '../../images/founder1.jpg';
import GaoNet from '../../images/foudergaonet.jpg';
import BPhuc from '../../images/founder2.jpg';
import DaiNha from '../../images/fouder3.jpg';

export default function Member(){
    return (
        <div className="row team">
        <h2 className="heading text-center animate-top">Đội ngũ của chúng tôi</h2>
        <MemberCard name='Trugtie' img={Trugtie} description='Co-Founder cửa hàng Atlaptop, kinh nghiệm 4 năm trong lĩnh vực công nghệ thông tin'/>
        <MemberCard name='GaoNet' img={GaoNet} description='Co-Founder cửa hàng Atlaptop, kinh nghiệm 4 năm trong lĩnh vực công nghệ thông tin'/>
        <MemberCard name='BaoPhuc' img={BPhuc} description='Co-Founder cửa hàng Atlaptop, kinh nghiệm 4 năm trong lĩnh vực công nghệ thông tin'/>
        <MemberCard name='DaiNha' img={DaiNha} description='Co-Founder cửa hàng Atlaptop, kinh nghiệm 4 năm trong lĩnh vực công nghệ thông tin'/>
        </div>
    )
}