import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SideNavigation = ({ setMenuVisible }) => {

    return (
        <HeaderWrapperDiv>
            <HeaderLineDiv />
            <HeaderNav>
                <HeaderButton to="/" onClick={() => setMenuVisible(false)}>Home</HeaderButton>
                <HeaderButton to="/server" onClick={() => setMenuVisible(false)}>日本サーバー</HeaderButton>
                <HeaderButton to="/service" onClick={() => setMenuVisible(false)}>付加サービス</HeaderButton>
                <HeaderButton to="/customer" onClick={() => setMenuVisible(false)}>カスタマーセンター</HeaderButton>
            </HeaderNav>
            <CloseButton onClick={() => setMenuVisible(false)}>
                <img src={"/images/close_icon.png"} />
            </CloseButton>
        </HeaderWrapperDiv>
    );
};

export default SideNavigation;

const HeaderWrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    background-color: #fff;
    z-index: 999;
`;

const HeaderNav = styled.nav`
    & > *:not(:last-of-type) {
        margin-bottom:50px;
    }
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeaderLineDiv = styled.div`
    height: 50px;
    border-bottom:1px solid #ddd;
`;

const HeaderButton = styled(NavLink)`
    font-size:20px;
    font-weight:bold;
    display: block;
`;

const CloseButton = styled.button`
    background: none;
    border:none;
    padding:0;
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    margin:15px 15px 0 0;
`;