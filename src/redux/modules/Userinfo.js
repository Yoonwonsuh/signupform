import { createSlice } from '@reduxjs/toolkit'

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