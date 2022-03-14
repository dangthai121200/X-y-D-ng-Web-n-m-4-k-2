import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './component/NavBar/NavBar';
import { useSelector } from 'react-redux';
import PageLogin from './component/Page/PageLogin/PageLogin';



const App = () => {
  const userInfo = useSelector(state=>state.User.userInfo)
  return (

  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='login' element = { <PageLogin/>} />
  </Routes>

  </BrowserRouter>
  )
}

export default App;
