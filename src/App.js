import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './component/NavBar/NavBar';
import Footer from './component/Footer/Footer';



const App = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          
        </Routes>
      <Footer/>
  </BrowserRouter>
  )
}

export default App;
