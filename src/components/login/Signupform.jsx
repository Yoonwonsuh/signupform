import React, { useState, useRef, useEffect } from "react";
import { createUser } from "../../redux/modules/Userinfo";
import { useDispatch } from "react-redux";
import shortId from 'shortid';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Frame = styled.div`
    display: flex;
    margin: 20px auto 22px auto;
    border: 1px solid #b4b4b4;
    background-color: white;
    border-radius: 4px;
    padding: 14px 18px;
    font-size: 14px;
    flex-direction: column;
`

const FormBox = styled.div`
    display:flex;
    flex-direction: column;
    width: 400px;

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

const PasswordAlert = styled.div`
    font-size: 10px;
    margin-bottom: 10px;
`

const SignupButton = styled.button`
    display:flex;
    width: 100%;
    height: 100%;
    background-color: #6FFFC4;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    padding: 10px 0;
    justify-content: center;
`

const SignUpForm = () => {

    const dispatch = useDispatch();
    const shortid = shortId.generate();
    let navigate = useNavigate();


    const initialState = {
        id: 0,
        nickname: "",
        email: "",
        password: "",
        password2: "",
      };
    
      const [user, setUser] = useState(initialState);

      const onSignUPHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, id:shortid});
      };

      const onSubmitHandler = (event) => {

        if (user.nickname === '') {
          event.preventDefault();
          alert('이름을 입력하세요!!!!');
        }
    
        else if(user.password===''){
          event.preventDefault();
          alert('password를 입력하세요!!!');
        }

        else if(user.password !== user.password2){
            event.preventDefault();
            alert('패스워드가 다릅니다.')
        }

    
        else {
          event.preventDefault();
          dispatch(createUser(user, shortid));
          setUser(initialState)
          alert(`${user.nickname}님 회원 가입을 축하드립니다.`);
          navigate(`/`);
        }
    }

    return (
        <Frame>
            <FormBox>
                <h1>Create Account</h1>
                <SignupAddForm onSubmit={onSubmitHandler}>
                    <SignupInputBox>
                        <SignupFont>your name</SignupFont>
                        <SignupInput 
                        type="text"
                        name="nickname"
                        value={user.name}
                        placeholder="First and last name"
                        onChange={onSignUPHandler} />

                        <SignupFont>your email
                        </SignupFont>
                        <SignupInput 
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={onSignUPHandler}/>

                        <SignupFont>Password</SignupFont>
                        <SignupInputPassword 
                        type="text"
                        name="password"
                        value={user.password}
                        placeholder="At least 6 characters"
                        onChange={onSignUPHandler} />
                        <PasswordAlert>Passwords must be at least 6 characters.
                        </PasswordAlert>

                        <SignupFont>Re-enter password</SignupFont>
                        <SignupInput
                        type="text"
                        name="password2"
                        value={user.password2}
                        onChange={onSignUPHandler} />


                    </SignupInputBox>
                    <SignupButton>Signup</SignupButton>

                </SignupAddForm>
            </FormBox>
        </Frame>
    )

}

export default SignUpForm;
