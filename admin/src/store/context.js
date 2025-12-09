import { createContext, useState } from "react";

export const ContextApi = createContext({
    loginStatus: null,
    saveLoginHandler: () => {}
});

const ContextApiProvider = ({ children }) => {
    const [isLogin,setIsLogin] = useState();

    const saveLoginHandler = (status) => {
        setIsLogin(status);
    };

    const value = {
        loginStatus:isLogin,
        saveLoginHandler:saveLoginHandler,
    }

    return(
        <ContextApi.Provider value={value}>{children}</ContextApi.Provider>
    );
};

export default ContextApiProvider;