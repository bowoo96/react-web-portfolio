import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import * as constant from "../../Contants";

const Navigation = () => {
    const location = useLocation();
    const pathname = location.pathname.replace("/", "");

    return (
        <>
            {pathname === "" ? <div /> :
                <NavigationWrapperNav>
                    {constant.pageKind.map((item, index) => (
                        <ItemButtonNavLink to={`/${item.routeName}`}
                            key={index}>
                         {item.title}
                        </ItemButtonNavLink>
                    ))}
                </NavigationWrapperNav>}
        </>
    );
};

export default Navigation;

const NavigationWrapperNav = styled.nav`
    position:fixed;
    width:200px;
    height:88vh;
    border:1px solid #ddd;
    background-color:#fff;
    margin:20px;
`;

const ItemButtonNavLink = styled(NavLink)`
    display:block;
    height:40px;
    border-bottom:1px solid #ddd;
    line-height:45px;
    padding: 0 20px;
    text-align:center;
    font-size:14px;
    text-decoration: none;
    
    &.active {
        color:#fff;
        background-color:#4385F5;
      }
`;