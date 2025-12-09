import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Header = ({ setMenuVisible }) => {

    const isPc = useMediaQuery({
        query: "(min-width:1024px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:1023px)"
    });

    return (
        <>
            {isPc &&
                <HeaderWrapperDiv>
                    <HeaderNav>
                        <HeaderButton to="/">Home</HeaderButton>
                        <HeaderButton to="/server">日本サーバー</HeaderButton>
                        <HeaderButton to="/service">付加サービス</HeaderButton>
                        <HeaderButton to="/customer">カスタマーセンター</HeaderButton>
                    </HeaderNav>
                </HeaderWrapperDiv>
            }
            {isMobile &&
                <MHeaderWrapperDiv>
                    <MButton onClick={() => setMenuVisible(true)}>
                        <MMenuImg src={"/images/menu_icon.png"} />
                    </MButton>
                </MHeaderWrapperDiv>
            }
        </>
    );
};

export default Header;

const HeaderWrapperDiv = styled.div`
    height:80px;
    border-bottom:1px solid #ddd;
    text-align: center;
`;

const HeaderNav = styled.nav`
    display:inline-flex;
    line-height:85px;
    & > *:not(:last-of-type) {
        margin-right:50px;
    }
`;

const HeaderButton = styled(NavLink)`
    font-size:20px;
    font-weight:bold;
    &:hover {
        color: #ddd;
    }
`;

const MHeaderWrapperDiv = styled.div`
    height: 50px;
    text-align: right;
`;

const MButton = styled.button`
    border:none;
    background: none;
    margin:0;
    padding:0;
`;

const MMenuImg = styled.img`
    margin: 15px 15px 0 0;
`;
