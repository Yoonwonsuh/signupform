import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const USER_URL = 'http://localhost:5001/user_info';

export const getUsers = createAsyncThunk('users/getUsers', async(dispatch, getstate)=>{
    try {
        const response = await axios.get(USER_URL)
        return [...response.data];

    } catch (err) {
        return err.massage;
    }
})

let userinfo = createSlice({
    name: 'userinfo',
    initialState: [
        {
            id: 0,
            nickname: "서윤원",
            email: "blacksyw@naver.com",
            password: "qwerty12345"
        },
           ],

    reducers: {
        createUser: (state, action) =>{
           return state = [...state, action.payload]
        },
        // findTodo: (state, action) =>{
        //     return state.find((todo)=> todo.id === action.payload)    
        //     }
        }
    
})

export let { createUser } = userinfo.actions
export default userinfo.reducer