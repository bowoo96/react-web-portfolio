import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../store/context";
import * as constant from "../Contants";

const LoginPage = () => {
    const navigate = useNavigate();
    const contextApi = useContext(ContextApi);

    const [loginData, setLoginData] = useState({
        id: "",
        password: ""
    });

    const idHandler = (e) => {
        e.preventDefault();
        setLoginData((prev) => { return { ...prev, id: e.target.value } })
    };

    const passwordHandler = (e) => {
        e.preventDefault();
        setLoginData((prev) => { return { ...prev, password: e.target.value } })
    };

    const loginHandler = (e) => {
        e.preventDefault();

        if (loginData.id.length === 0 && loginData.password.length === 0) return;

        // ポートフォリオ用の placeholder
        // axios.post(`${constant.API_SERVER}/portfolio`, {
        //     id: loginData.id,
        //     password: loginData.password,
        // })
        //     .then((response) => {
        //         if (response.status === 200) {
        //             contextApi.saveLoginHandler(true);
        //             navigate("/customer1", { replace: true });
        //         }
        //     })
        //     .catch((err) => {
        //         console.log("login error", err);
        //     });
        contextApi.saveLoginHandler(true);
        navigate("/customer1", { replace: true });
    };

    return (
        <WrapperDiv>
            <LoginWrapperDiv>
                <h2>manager Login</h2>
                <WrapperForm onSubmit={loginHandler}>
                    <div>
                        <LoginInput placeholder="ID" value={loginData.id} onChange={idHandler} />
                    </div>
                    <PasswordInputDiv>
                        <LoginInput placeholder="PASSWORD" type="password" value={loginData.password} onChange={passwordHandler} />
                    </PasswordInputDiv>
                    <LoginButton type="submit">Login</LoginButton>
                </WrapperForm>
            </LoginWrapperDiv>
        </WrapperDiv>
    );
};

export default LoginPage;

const WrapperDiv = styled.div`
    display: flex;
    width:100%;
    height:800px
`;

const LoginWrapperDiv = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WrapperForm = styled.form`
    margin-top:10px;
    text-align: cetner;
`;

const PasswordInputDiv = styled.div`
    margin: 15px 0
`;

const LoginInput = styled.input`
    width:200px;
    height:30px;
    border:1px solid #ddd;
    text-indent:5px;
`;

const LoginButton = styled.button`
    width:206px;
    height:40px;
    border:none;
    background-color:#4385F5;
    color:#fff;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`;