import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {login} from "../../../redux/userSlice";
import { HTTP_STATUS } from '../../../redux/constants';



import image from "./signin-image.jpg";
import "../cssForRegisterAndLogin/style.css"
import "../fontsForRegisterAndLogin/material-icon/css/material-design-iconic-font.min.css"

const FormLogin = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch()

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const onSubmit =(e)=>{
    e.preventDefault()
    onLogin();
  }  

   const onLogin=()=>{
      if(username === "" || password === ""){
        return
      }else{
        dispatch(login({username,password}))
      }
   }

   useSelector(state=>state.User.loading === HTTP_STATUS.FULFILLED ? navigate("/"):'')

   
    return (
      <div className="sign-in">
      <div className="loginAndRegister">
          <div className="signin-content">
              <div className="signin-image">
                  <figure><img src={image} alt="sing up image" /></figure>
                  <p>Chưa có tài khoản ? <Link to="/register">Tạo tài khoản mới</Link></p>
              </div>

              <div className="signin-form">
                  <h2 className="form-title">Đăng nhập</h2>
                  <form onSubmit={e=>onSubmit(e)} className="register-form" id="login-form">
                      <div className="form-group">
                          <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"> </i></label>
                          <input type="text" name="your_name" id="your_name" placeholder="Tên tài khoản" value={username||""} onChange={e=>setUsername(e.target.value)} required/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                          <input type="password" name="your_pass" id="your_pass" placeholder="Mật khẩu" value={password||""} onChange={e=>setPassword(e.target.value)} required/>
                      </div>
                      <div className="form-group">
                          <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                          <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Ghi nhớ đăng nhập</label>
                      </div>
                      {/* spinner */}
                      { useSelector(state=>state.User.loading === HTTP_STATUS.PENDING ? 
                          <button className="btn btn-primary">
                            <span className="spinner-border spinner-border-sm"></span>
                            Loading..
                        </button> :'')}
                           {/* end spinner */}
                        <h4 style={{color:"red"}}>{useSelector(state=>state.User.loading === HTTP_STATUS.REJECTED?"Sai tên đăng nhập hoặc mật khẩu":"")}</h4>
                      <div className="form-group form-button">
                          <input type="submit" name="signin" id="signin" className="form-submit" value="Đăng nhập"/>
                      </div>
                  </form>
                  <div className="social-login">
                      <span className="social-label">Or login with</span>
                      <ul className="socials">
                          <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                          <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                          <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
    ) 
}

export default FormLogin;