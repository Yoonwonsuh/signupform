import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios'

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto 22px auto;
    padding: 14px 18px;
`

const FormBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    border: 1px solid #b4b4b4;
    background-color: white;
    border-radius: 4px;
    font-size: 14px;
    padding: 0px 14px;
    width: 450px;

`

const SignupAddForm = styled.form`
    display:flex;
    flex-direction: column;
    
`

const SignupInputBox = styled.div`
    display:flex;
    flex-direction: column;
    margin-right: 18px;

`

const SignupFont = styled.div`
    font-size: 14px;
`

const SignupInput = styled.input`
    width:100%;
    height: 25px;
    padding: 3px 7px;
    border: 1px solid #E782FF;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 10px;
    `
const SignupInputPassword = styled.input`
    width:100%;
    height: 25px;
    padding: 3px 7px;
    border: 1px solid #E782FF;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const LoginButton = styled.button`
    display:flex;
    width: 100%;
    height: 100%;
    background-color: #6FFFC4;
    margin: 15px 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    padding: 10px 0;
    justify-content: center;
`
const GoSignButton = styled.button`
    display:flex;
    width: 95%;
    height: 100%;
    background-color: #6FFFC4;
    margin: 15px auto;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    padding: 10px 0;
    justify-content: center;
`

const NewUniCorn = styled.h3`
    border: 0;
    height: 2px;
    text-align: center;
    width: 100%;
    background-image: linear-gradient(to right, transparent, #CCC, transparent); 
`   

const LoginForm = () => {

    const callSomethingAxios = () =>{
        axios({
            method: "get",
            url: "http://localhost:5001/user_info"
        }).then(response =>{
            console.log(response)
        });
    }

    useEffect(()=>{
        callSomethingAxios();
    });

    const userinfo = useSelector((state) => state.userinfo);

    const navigate = useNavigate();

    const inputRef = useRef();
    useEffect(() =>{
      inputRef.current.focus();
    },[]);

    

    const initialState = {
        email: "",
        password: ""
      };
    
      const [user, setUser] = useState(initialState);

      const onLoginHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value});
      };

    const nowuser = userinfo.find((userinfo) => userinfo.email === user.email);

    const onLogin = (e)=>{
 
        if(nowuser){
            if(user.password === nowuser.password){
                e.preventDefault();
                alert(`${nowuser.nickname}??? ???????????????.`);
                navigate(`/main`);
            }
            else{
                e.preventDefault();
                alert('??????????????? ????????????.');
            }

        }
        else if(user.email === ''){
            e.preventDefault();
            alert('???????????? ???????????????')
        }
        else if(user.password ===''){
            e.preventDefault();
            alert('??????????????? ???????????????')
        }
        else{
            e.preventDefault();
            alert('???????????? ???????????? ????????????.')
        }
    }
  
    return (
        <Frame>
            <FormBox>
                <h1>Login</h1>
                <SignupAddForm onSubmit={onLogin}>
                    <SignupInputBox>
                        <SignupFont>your email</SignupFont>
                        <SignupInput
                        ref={inputRef}
                        type="text"
                        name="email"
                        value={user.email}
                        placeholder="type your email"
                        onChange={onLoginHandler} />

                        <SignupFont>Password</SignupFont>
                        <SignupInputPassword 
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder="type your password"
                        onChange={onLoginHandler}/>

                    </SignupInputBox>
                    <LoginButton>Login</LoginButton>

                </SignupAddForm>
            </FormBox>
            <NewUniCorn />
            <GoSignButton onClick={()=>{navigate('/signup')}}>New Unicorn World account</GoSignButton>
        </Frame>
    )

}

export default LoginForm;
