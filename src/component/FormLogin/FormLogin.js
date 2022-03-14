import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {login} from "../../redux/userSlice";
import { HTTP_STATUS } from '../../redux/constants';
import "./Style.css"

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
      <div class="container login-container" >
                <div class="col-md-6 login-form-1">
                    <h3>Chào mừng bạn đến với laptopso1vn</h3>
                    <form onSubmit={e=>onSubmit(e)}>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Tên tài khoản *" value={username||""} onChange={e=>setUsername(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Mật khẩu *" value={password||""} onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Đăng nhập" />
                        </div>
                        <div class="form-group">
                        <Link to="forgetPassword">Quên mật khẩu ?</Link>
                        </div>
                        <div class="form-group">
                        <p>Chưa có tài khoản ? <Link to="register">Tạo tài khoản mới</Link></p>
                        </div>
                        <h2 style={{color:"red"}}>{useSelector(state=>state.User.loading === HTTP_STATUS.REJECTED?"Sai tên đăng nhập hoặc mật khẩu":"")}</h2>
                    </form>
                </div>
        </div>
    ) 
}

export default FormLogin;