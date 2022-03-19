import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import { API_URL,HTTP_STATUS } from '../../../redux/constants';
import { registerUser } from '../../../redux/userSlice';
import { validEmail, validPassword,validUsername } from "../../../redux/constants";

import "../cssForRegisterAndLogin/style.css"
import "../fontsForRegisterAndLogin/material-icon/css/material-design-iconic-font.min.css"
import image from "./signup-image.jpg";



const FormRegister = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [checkEmail,setCheckEmail] = useState(null)
    const [checkUsername,setCheckUsername] = useState(null)

    const { register, handleSubmit, getValues ,setError, formState: { errors, isSubmitting } } = useForm();

    useEffect(()=>{
        if(checkEmail == false && checkUsername == false){
            dispatch(registerUser(getValues()))           
        }
    },[checkEmail,checkUsername])

    useSelector(state=>state.User.loading === HTTP_STATUS.FULFILLED ? navigate("/"):'')

    const OnCheckRegister=()=>{
        checkExistEmail();
        checkExistUsername();
    };

    const checkExistEmail = async () =>{
        const  {data} = await axios.get(`${API_URL}v1/users/checkEmail/${getValues("email")}`).catch(error => {
            setError("email", {
                type: "manual",
                message: error.message,
              });   
          });

        if(data == true){
            setError("email", {
                type: "manual",
                message: "Email đã tồn tại",
              });     
              setCheckEmail(true)       
        }

        if(data == false){
            setCheckEmail(false)   
        }
    }

    const checkExistUsername = async () =>{
        const  {data} = await axios.get(`${API_URL}v1/users/checkUsername/${getValues("username")}`).catch(error => {
            setError("username", {
                type: "manual",
                message: error.message,
              });   
          });

        if(data == true){
            setError("username", {
                type: "manual",
                message: "Username đã tồn tại",
              });   
              setCheckUsername(true);         
        }
        if(data == false){
            setCheckUsername(false);   
        }
    }

  return (
    <div className="signup">
            <div className="loginAndRegister">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Đăng ký</h2>
                        <form onSubmit={handleSubmit(OnCheckRegister)} className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>

                                <input type="text" name="email" id="email" placeholder="Email"  
                                        {...register("email", {
                                            required:'Không để trống',
                                            pattern: {
                                                value: validEmail,
                                                message: 'Email không phù hợp'
                                            },
                                        })}                                         
                                />
                                <ErrorMessage errors={errors} name="email" render={({ message }) => <p style={{color:'red'}}>{message}</p>}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-account"></i></label>
                                <input type="text" name="username" id="username" placeholder="Tên đăng nhập" 
                                  {...register("username", {
                                    required: 'Không để trống', 
                                    pattern: {
                                        value: validUsername,
                                        message: 'Username không phù hợp'
                                    },
                                })}                                     
                                 />
                                <ErrorMessage errors={errors} name="username" render={({ message }) => <p style={{color:'red'}}>{message}</p>}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Mật Khẩu"
                                {...register("password", {
                                    required: 'Không để trống', 
                                    pattern: {
                                        value: validPassword,
                                        message: 'Ít nhất 1 chữ hoa, số và kí tự đặc biệt'
                                    },
                                })}
                                />
                                <ErrorMessage errors={errors} name="password" render={({ message }) => <p style={{color:'red'}}>{message}</p>}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Nhập lại mật khẩu"
                                {...register("confiPassword", {
                                    required:'Không để trống', 
                                    validate:{
                                        positive: v => v === getValues("password") || 'Mật khẩu không giống nhau'                                    
                                    }
                                    })}                     
                                />
                                 <ErrorMessage errors={errors} name="confiPassword" render={({ message }) => <p style={{color:'red'}}>{message}</p>}/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term"
                                {...register("checkbox",{
                                    required:'Vui lòng tích vào ô để xác nhận', 
                                })}
                                />
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>Tôi đồng ý với chính sách bảo mật </label>
                                <ErrorMessage errors={errors} name="checkbox" render={({ message }) => <p style={{color:'red'}}>{message}</p>}/>
                            </div>
                            <div className="form-group form-button">
                            <input disabled={isSubmitting} type="submit" name="signup" id="signup" className="form-submit" value="Đăng ký" />
                             {/* spinner */}
                            { isSubmitting ? 
                                <button className="btn btn-primary">
                                    <span className="spinner-border spinner-border-sm"></span>
                                    Loading..
                                </button> :''}
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


// const { register, handleSubmit, setError, formState: { errors } } = useForm();
// const onSubmit = (data) =>{
//     console.log(data)
// }
//         return (
//             <div>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register("username", { 
//                    pattern: {
//                     value: validUsername,
//                     message: 'Tên không phù hợp' // JS only: <p>error message</p> TS only support string
//                   },
//                     })}/>
//                 <ErrorMessage
//                     errors={errors}
//                     name="username"
//                     render={({ message }) => <p>{message}</p>}
//                 />

//                     <input type="submit" value="ok"/>
//                 </form>
               
//             </div>
//         )
}

export default FormRegister