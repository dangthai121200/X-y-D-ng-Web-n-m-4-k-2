import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {userSlice}  from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import { login } from '../../redux/userSlice';
const Demo = () => {

    //Get name user form reducers
    const user = useSelector((state)=>state.User.name)

    //Change value state in reducres
    const dispatch = useDispatch();
    const userName ={name:"user"};
    const handleAddButtonClick=()=>{
        dispatch(
          login(userName)
        );
    }

  return (
    <div>
       <h1> User: {user}</h1>
        <br/>
        <button onClick={handleAddButtonClick}>Chon</button>
    </div>
  )
}


export default Demo;