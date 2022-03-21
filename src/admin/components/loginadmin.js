/* eslint-disable react-hooks/rules-of-hooks */
// <?php
// session_start();
// if(!empty($_SESSION['error'])){
//   $error = $_SESSION['error'];
//   echo "
//   <div class='modal' tabindex='-1'>
//   <div class='modal-dialog'>
//     <div class='modal-content'>
//       <div class='modal-header'>
//         <h5 class='modal-title'>Lỗi đăng nhập</h5>
//         <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
//       </div>
//       <div class='modal-body'>
//         <p>$error</p>
//       </div>
//       <div class='modal-footer'>
//         <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//   ";
//   session_destroy();
// }
// ?>
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from "../../redux/userSlice";
import { HTTP_STATUS } from '../../redux/constants';
import imgLogo from "./logo.png";

export default function adminLogin() {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    onLogin();
  }

  const onLogin = () => {
    if (username === "" || password === "") {
      return
    } else {
      dispatch(login({ username, password }))
    }
  }

  useSelector(state => state.User.loading === HTTP_STATUS.FULFILLED ? navigate("/admin") : '')

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={imgLogo} alt="logo" />

            </div>


          </div>
          <div>
            {/* <form action="/admin"> */}
            <form onSubmit={e => onSubmit(e)}>
              <div>
                <i className="icon fa-solid fa-user"></i>
                <input type="text" name="username" class="name" placeholder="Admin" value={username || ""} onChange={e => setUsername(e.target.value)} required />
              </div>
              <div className="second-input">
                <i className="icon fa-solid fa-key"></i>
                <input type="password" name="password" class="name" placeholder="Password" value={password || ""} onChange={e => setPassword(e.target.value)} required />
              </div>
              <button class="login-button" name="action" value="login" type="submit">LOGIN</button>
              {/* spinner */}
              {useSelector(state => state.User.loading === HTTP_STATUS.PENDING ?
                <button className="btn ">
                  <span className="spinner-border spinner-border-sm"></span>
                  Loading..
                </button> : '')}
              {/* end spinner */}
              <h4 style={{color:"red"}}>{useSelector(state=>state.User.loading === HTTP_STATUS.REJECTED?"Sai tên đăng nhập hoặc mật khẩu":"")}</h4>
            </form>
          </div>
        </div>


      </div>
    </div>
  );
}
