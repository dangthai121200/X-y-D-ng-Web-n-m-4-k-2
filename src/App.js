import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './component/NavBar/NavBar';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Home from './pages/Home';
import Laptop from './pages/Laptop';
import Phukien from './pages/Phukien'
import Events from './pages/Events'



const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Laptop' element={<Laptop/>}/>
      <Route exact path='/Accessory' element={<Phukien/>}/>
      <Route exact path='/Event' element={<Events/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App;
