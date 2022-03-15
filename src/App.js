import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './component/NavBar/NavBar';
import { useSelector } from 'react-redux';
import PageLogin from './component/Page/PageLogin/PageLogin';
import PageRegister from './component/Page/PageRegister/PageRegister';
import Home from './pages/Home';
import Laptop from './pages/Laptop';
import Phukien from './pages/Phukien'
import Events from './pages/Events'



const App = () => {
  const userInfo = useSelector(state=>state.User.userInfo)
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path='/login' element={<PageLogin/>}/>
      <Route exact path='/register' element={<PageRegister/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Laptop' element={<Laptop/>}/>
      <Route exact path='/Accessory' element={<Phukien/>}/>
      <Route exact path='/Event' element={<Events/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App;
