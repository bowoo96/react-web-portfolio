import Navigation from "./Navigation";
import styled from "styled-components";

const Layout = (props) => {
    return (
        <>
            <Container>
                <Navigation />
                {props.children}
            </Container>
        </>
    );
};

export default Layout;

const Container = styled.div`
    display:flex;
`;