import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import SideNavigation from "./SideNavigation";
import { useState } from "react";

const Layout = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            {menuVisible && <SideNavigation setMenuVisible={setMenuVisible} />}
            <Header setMenuVisible={setMenuVisible} />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>
    );
};

export default Layout;

const Container = styled.div`
    display:flex;
    min-height: 100vh;
`;


