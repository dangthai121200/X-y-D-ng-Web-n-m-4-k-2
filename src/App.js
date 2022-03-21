import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Admin from './admin/components/admin';
import AdminNavbar from './admin/components/adminnav';
import AdminLogin from './admin/components/loginadmin';
import ManageBill from './admin/components/quanlydonhang';
import ManageFeedback from './admin/components/quanlyfeedback';
import ManageCus from './admin/components/quanlykhachhang';
import ManageSale from './admin/components/quanlykhuyenmai';
import ManageStaff from './admin/components/quanlynhanvien';
import ManageProduct from './admin/components/quanlysanpham';
import AddAccessories from './admin/components/addaccessories';
import AddProduct from './admin/components/addproduct';
import AddSale from './admin/components/addKhuyenmai';
import AddAdmin from './admin/components/addAdmin';
import EditLaptop from './admin/components/editlaptop';
import Music from './admin/components/music';



const App = () => {
  function Navbar() {
    const url = window.location.pathname;
    if (url !== "/") {
      return <AdminNavbar />;
    }
    return false;
  }

  function BMusic() {
    const url = window.location.pathname;
    if (url !== "/") {
      return <Music/>;
    }
    return false;
  }

  const userInfo = useSelector(state => state.User.userInfo)

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<AdminLogin />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/addaccessories' element={<AddAccessories />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/addadmin' element={<AddAdmin />} />
        <Route path='/addsale' element={<AddSale />} />
        <Route path='/managebill' element={<ManageBill />} />
        <Route path='/managefeedback' element={<ManageFeedback />} />
        <Route path='/managecus' element={<ManageCus />} />
        <Route path='/managesale' element={<ManageSale />} />
        <Route path='/managestaff' element={<ManageStaff />} />
        <Route path='/manageproduct' element={<ManageProduct />} />
        <Route path='/editlaptop' element={<EditLaptop />} />
      </Routes>
      <BMusic />
    </BrowserRouter>
  )
}

export default App;
