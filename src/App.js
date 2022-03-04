import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './component/NavBar/NavBar';
import FormLogin from './component/FormLogin/FormLogin';
import { useSelector } from 'react-redux';


const App = () => {
  const userInfo = useSelector(state=>state.User.userInfo)
  return (
    <React.Fragment>
    <FormLogin/>
    <h1>{userInfo == null ?'':userInfo.ten}</h1>
    </React.Fragment>

  //   <BrowserRouter>
  //       <NavBar/>
  //       <Routes>
          
  //       </Routes>

  // </BrowserRouter>
  )
}

export default App;
