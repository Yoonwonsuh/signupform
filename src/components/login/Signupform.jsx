import React, { useState, useRef, useEffect } from "react";
import { createUser } from "../../redux/modules/Userinfo";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import shortId from "shortid";
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
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const SignupAddForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignupInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 18px;
`;

const SignupFont = styled.div`
  font-size: 14px;
`;

const SignupInput = styled.input`
  width: 100%;
  height: 25px;
  padding: 3px 7px;
  border: 1px solid #e782ff;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 10px;
`;
const SignupDesign = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const SignupInputPassword = styled.input`
  display: flex;
  width: 95%;
  height: 25px;
  padding: 3px 7px;
  border: 1px solid #e782ff;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const PasswordAlert = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
`;

const SignupButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #6fffc4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  padding: 10px 0;
  justify-content: center;
`;
const Visable = styled.div`
  display: flex;
  justify-content: right;
  text-align: center;
  margin: auto 0 auto 10px;
`;

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

  let [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });

  const handlePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  const [user, setUser] = useState(initialState);

  const onSignUPHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, id: shortid });
  };

  const onSubmitHandler = (event) => {
    if (user.nickname === "") {
      event.preventDefault();
      alert("이름을 입력하세요!!!!");
    } else if (user.password === "") {
      event.preventDefault();
      alert("password를 입력하세요!!!");
    } else if (user.password !== user.password2) {
      event.preventDefault();
      alert("패스워드가 다릅니다.");
    } else {
      event.preventDefault();
      dispatch(createUser(user, shortid));
      setUser(initialState);
      alert(`${user.nickname}님 회원 가입을 축하드립니다.`);
      navigate(`/`);
    }
  };

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
              onChange={onSignUPHandler}
            />

            <SignupFont>your email</SignupFont>
            <SignupInput
              type="text"
              name="email"
              value={user.email}
              onChange={onSignUPHandler}
            />

            <SignupFont>Password</SignupFont>
            <SignupDesign>
              <SignupInputPassword
                type={passwordType.type}
                name="password"
                value={user.password}
                placeholder="At least 6 characters"
                onChange={onSignUPHandler}
              />
              <Visable
                onClick={handlePasswordType}
              >
                {passwordType.visible ? <FaEyeSlash /> :<FaEye />}
              </Visable>
            </SignupDesign>

            <PasswordAlert>
              Passwords must be at least 6 characters.
            </PasswordAlert>

            <SignupFont>Re-enter password</SignupFont>
            <SignupInput
              type="password"
              name="password2"
              value={user.password2}
              onChange={onSignUPHandler}
            />
          </SignupInputBox>
          <SignupButton>Signup</SignupButton>
        </SignupAddForm>
      </FormBox>
    </Frame>
  );
};

export default SignUpForm;
