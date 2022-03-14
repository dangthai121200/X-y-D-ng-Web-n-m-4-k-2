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
      <div className="container login-container" >
                <div className="col-md-6 login-form-1">
                    <h3>Chào mừng bạn đến với laptopso1vn</h3>
                    <form onSubmit={e=>onSubmit(e)}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tên tài khoản *" value={username||""} onChange={e=>setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Mật khẩu *" value={password||""} onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Đăng nhập" />
                        </div>
                        <div className="form-group">
                        <Link to="forgetPassword">Quên mật khẩu ?</Link>
                        </div>
                        <div className="form-group">
                        <p>Chưa có tài khoản ? <Link to="register">Tạo tài khoản mới</Link></p>
                        </div>
                        {/* spinner */}
                        { useSelector(state=>state.User.loading === HTTP_STATUS.PENDING ? 
                          <button className="btn btn-primary">
                            <span className="spinner-border spinner-border-sm"></span>
                            Loading..
                        </button> :'')}
                           {/* end spinner */}
                        <h2 style={{color:"red"}}>{useSelector(state=>state.User.loading === HTTP_STATUS.REJECTED?"Sai tên đăng nhập hoặc mật khẩu":"")}</h2>
                    </form>
                </div>
        </div>
    ) 
}

export default FormLogin;