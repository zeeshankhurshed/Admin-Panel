import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
const initialState = { 
    user:null, 
    token:null
 }

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state,action) {
      console.log('action inside slice',action);
      state.user=action.payload.user;
      state.token=action.payload.token;

      Cookies.set('token', action.payload.token)
    },
    
    clearUserInfo(state) {
      state.user=null;
      state.token=null;
    },
  
  },
})

export const { setUserInfo,clearUserInfo } = authSlice.actions
export default authSlice.reducer