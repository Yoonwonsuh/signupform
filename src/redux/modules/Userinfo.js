import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const USER_URL = 'http://localhost:5001/userinfo';

export const getUsers = createAsyncThunk('users/createUser', async(dispatch, getstate)=>{
        const response = await axios.get(USER_URL);
        return response.data
})

// export const postUsers = createAsyncThunk('user/createUser', async()=>{
    
//         axios.post(USER_URL, {
//             nickname, email, password
//         }).then((response)=>{
//             console.log(response);
//             window.alert("회원가입을 축하합니다.");
//         });

// })

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
        },
    extraReducers: {
        [getUsers.pending]: () => {
            console.log("pending");
        },
        [getUsers.fulfilled]: (state, action) => {
            console.log("Fetched successFully!");
            return {...state, userinfo: action.payload}
        },
    }


    
})

export let { createUser } = userinfo.actions
export default userinfo.reducer