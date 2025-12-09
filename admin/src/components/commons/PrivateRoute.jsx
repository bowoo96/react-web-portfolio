import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ContextApi } from "../../store/context";

const PrivateRoute = () => {
    const contextApi = useContext(ContextApi);

    if (!contextApi.loginStatus) {
        alert("ログインが必要な機能です。");
    }

    return contextApi.loginStatus ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;