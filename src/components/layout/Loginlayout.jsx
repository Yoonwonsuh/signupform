import React from "react";
import styled from "styled-components";


const BackGround = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100%;
    `

const Logo = styled.div`
        margin: 10px auto 0 auto;
        display: flex;
    `




const LoginLayout = (props) => {

    return (
        <BackGround>
            <Logo>🦄Unicorn World</Logo>
                {props.children}
        </BackGround>
    )

}

export default LoginLayout