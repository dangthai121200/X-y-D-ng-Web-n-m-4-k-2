import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"Admin",
    },
    reducers:{
        login: (state,action)=>{
            state.name = action.payload.name
        }//=>{type:'user/login'}
    }
})

export const {login} = userSlice.actions;
export default userSlice.reducer;