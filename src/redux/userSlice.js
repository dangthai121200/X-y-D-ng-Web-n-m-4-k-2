import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { API_URL,HTTP_STATUS } from "./constants";
import axios from "axios";

// export const getUserListInfo = createAsyncThunk(
//     'userInfo/getUserListInfo',
//     async()=>{
//         const {data} = await axios.get(`${API_URL}/users`) 
//         return data;
//     }
// )

export const login = createAsyncThunk(
   'userInfo/login',
   async(value)=>{
       const {data} = await axios.post(`${API_URL}/users`,value).catch(error => console.log(error))
       return data;
   }
)

export const userSlice = createSlice({
  name:"user",
  initialState:{
      userInfo: null,
      loading: null,
      status:null,
  },
  reducers:{
     logout:(state)=>{
      state.userInfo = null
      state.loading = null
      state.status = null
     }
  },
  extraReducers:{
   [login.pending](state){
      state.loading = HTTP_STATUS.PENDING
   },
   [login.fulfilled](state,{payload}){
      state.loading = HTTP_STATUS.FULFILLED
      state.userInfo = payload
      state.status = true
   },
   [login.rejected](state){
      state.loading = HTTP_STATUS.REJECTED
   }
  }
})
export const {logout} = userSlice.actions;
export default userSlice.reducer;