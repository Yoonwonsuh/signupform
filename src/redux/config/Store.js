import { configureStore } from '@reduxjs/toolkit'
import userinfoReducer from '../modules/Userinfo'


export default configureStore({
  reducer: { 
    userinfo : userinfoReducer
}
}) 