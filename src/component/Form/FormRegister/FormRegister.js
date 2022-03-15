import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { API_URL,HTTP_STATUS } from '../../../redux/constants';
import { register } from '../../../redux/userSlice';
import { validEmail, validPassword,validUsername } from "../../../redux/constants";

import "../cssForRegisterAndLogin/style.css"
import "../fontsForRegisterAndLogin/material-icon/css/material-design-iconic-font.min.css"
import image from "./signup-image.jpg";



const FormRegister = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [confiPassword,setConfiPassowrd] = useState("");


    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [confiPasswordErr,setConfiPassowrderr] = useState(false);
    const [usernameErr,setUsernameErr] = useState(false);
    const [checkUsername,setCheckUsername] = useState(false);
    const [checkEmail,setCheckMail] = useState(false);
    const [firstSubmit,setFirstSubmit] = useState(true);


    const OnRegister=(e)=>{
        e.preventDefault();
        validate();
        if(emailErr === false && pwdError === false && confiPasswordErr === false && usernameErr === false && firstSubmit === false){
            dispatch(register({email,username,password,confiPassword}))
        }else{
            setFirstSubmit(false)
           return 
        }

    };

    // const checkExist=()=>{
    //     const  checkEmail = await axios.get(`${API_URL}v1/users/checkEmail/` + email).then;
    //     const  {data} = await axios.get(`${API_URL}v1/users/checkEmail/` + email);
    // }
    const validate = () =>{

        if(!validEmail.test(email)){
            setEmailErr(true)     
        }else{
            setEmailErr(false)     
        }

        if(!validPassword.test(password)){
            setPwdError(true)     
        }else{
            setPwdError(false)     
        }

        if(!validUsername.test(username)){
            setUsernameErr(true)     
        }else{
            setUsernameErr(false) 
        }

        if(confiPassword === password){
            setConfiPassowrderr(false);   
        }else{
            setConfiPassowrderr(true);
        }
     
    }

    useSelector(state=>state.User.loading === HTTP_STATUS.FULFILLED ? navigate("/"):'')
   

  return (
    <div className="signup">
            <div className="loginAndRegister">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Đăng ký</h2>
                        <form onSubmit={e=>OnRegister(e)} className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="text" name="username" id="username" placeholder="Email"  
                                         value={email}
                                         onChange={(e) => setEmail(e.target.value)}/>
                                {emailErr && <p style={{color:"red"}}>Vui lòng nhập đúng email</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-account"></i></label>
                                <input type="text" name="email" id="email" placeholder="Tên đăng nhập" 
                                 value={username}
                                 onChange={(e) => setUsername(e.target.value)}/>
                                  {usernameErr && <p style={{color:"red"}}>Vui không để trống và không nhập kí tự đặc biệt</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Mật Khẩu" 
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}/>
                                {pwdError && <p style={{color:"red"}}>Tối thiểu tám ký tự, ít nhất một ký tự hoa, một ký tự viết thường, một số và một ký tự đặc biệt</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Nhập lại mật khẩu"
                                 value={confiPassword}
                                 onChange={(e) => setConfiPassowrd(e.target.value)}                               
                                />
                                {confiPasswordErr && <p style={{color:"red"}}>Mật khẩu không giống nhau</p>}
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term"/>
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>Tôi đồng ý với chính sách bảo mật </label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Đăng ký"/>
                                  {/* spinner */}
                            {useSelector(state=>state.User.loading === HTTP_STATUS.PENDING ? 
                                <button className="btn btn-primary">
                                <span className="spinner-border spinner-border-sm"></span>
                                 Loading..
                            </button> :'')}
                           {/* end spinner */}
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={image} alt="sing up image" /></figure>
                        <Link to="/login" className="signup-image-link">Đã có tài khoản</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FormRegister