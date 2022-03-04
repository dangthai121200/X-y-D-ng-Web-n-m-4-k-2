import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {login,logout} from "../../redux/userSlice";
import { HTTP_STATUS } from '../../redux/constants';

const FormLogin = () => {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const onSubmit =(e)=>{
    e.preventDefault()
    dispatch(login({username,password}))
  }  
  const {name} = useSelector(state=>state.User.userInfo===null?'':state.User.userInfo)
    return (
      <div>
        <form onSubmit={(e)=>onSubmit(e)}>
          username: <input type="text" name='username' value={username||""} onChange={e=>setUsername(e.target.value)} /><br/>
          password: <input type="text" name='password' value={password||""} onChange={e=>setPassword(e.target.value)} /><br/>
          {useSelector(state=>state.User.loading === HTTP_STATUS.FULFILLED?name:<input type="submit" value="submit"/>)}
        </form>
     <button onClick={()=>dispatch(logout())}>Logout</button>
     <h2>{useSelector(state=>state.User.loading === HTTP_STATUS.REJECTED?"Sai tên đăng nhập hoặc mật khẩu":"")}</h2>
      </div>
    ) 
}


export default (FormLogin);