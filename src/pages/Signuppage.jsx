import React from "react";
import styled from "styled-components";
import LoginLayout from "../components/layout/Loginlayout"
import SignUpForm from "../components/login/Signupform";

const SignUpPage = () => {

    return (<LoginLayout>
           <SignUpForm />
        </LoginLayout>);
};

export default SignUpPage;
