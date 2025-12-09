import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
    const isPc = useMediaQuery({
        query: "(min-width:1024px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:1023px)"
    });

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            {isPc &&
                <>
                    <BannerWrapperDiv>
                        <BannerImg src={"/images/customer_banner.png"} />
                    </BannerWrapperDiv>
                    <BannerTextDiv>
                        <BannerP style={{ fontWeight: "bold", fontSize: 35, marginBottom: 10 }}>カスタマーセンター</BannerP>
                    </BannerTextDiv>

                    <ContentsWrapperDiv>
                        <TabNav>
                            <TabButton to="/customer">お知らせ</TabButton>
                        </TabNav>

                        <TitleDiv>
                            <TitleP>{location.state.title}</TitleP>
                            <p>{location.state.date.slice(0, 10)}</p>
                        </TitleDiv>
                        <BodyDiv dangerouslySetInnerHTML={{ __html: location.state.body }}></BodyDiv>

                        <BackButton onClick={() => navigate(-1)}>
                            Back
                        </BackButton>
                    </ContentsWrapperDiv>
                </>
            }

            {isMobile &&
                <>
                    <BannerWrapperDivM>
                        <BannerImgM src={"/images/customer_banner.png"} />
                    </BannerWrapperDivM>
                    <BannerTextDivM>
                        <BannerPM style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>カスタマーセンター</BannerPM>
                    </BannerTextDivM>

                    <ContentsWrapperDivM>
                        <TabNavM>
                            <TabButtonM to="/customer">お知らせ</TabButtonM>
                        </TabNavM>

                        <TitleDiv>
                            <TitleP>{location.state.title}</TitleP>
                            <p>{location.state.date.slice(0, 10)}</p>
                        </TitleDiv>
                        <BodyDiv dangerouslySetInnerHTML={{ __html: location.state.body }}></BodyDiv>

                        <BackButton onClick={() => navigate(-1)}>
                            Back
                        </BackButton>
                    </ContentsWrapperDivM>
                </>
            }
        </div>
    );
};

export default DetailPage;

const BannerWrapperDiv = styled.div`
    width: 100%;
    height:300px;
`;

const BannerTextDiv = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    margin-top: -180px;
`;

const BannerP = styled.p`
    color: #fff;
`;

const BannerImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;

const ContentsWrapperDiv = styled.div`
    width: 1200px;
    margin:0 auto;
`;

const TabNav = styled.nav`
    height: 50px;
    border-bottom: 1px solid #ddd;
    text-align: center;
    margin-top: 100px;
`;

const TabButton = styled(NavLink)`
    height: 50px;
    line-height: 50px;
    font-weight:bold;
    margin-left: 20px;
    padding-bottom: 15px;
    &:hover {
        color: #ddd;
    }
    &.active{
        color: #4385F5;
        border-bottom: 3px solid #4385F5;
    }
`;

const TitleDiv = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    justify-content: space-between;
`;

const TitleP = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
`;

const BodyDiv = styled.div`
    margin-top: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;
`;

const BackButton = styled.button`
    padding:10px 20px;
    background-color: #4385F5;
    border: none;
    color: #fff;
    margin-top: 20px;

    &:hover {
        opacity: 0.7;
    }
`;


// mobile ///////////////////////////////////////////////////


const BannerWrapperDivM = styled.div`
    width: 100%;
    height:200px;
`;

const BannerTextDivM = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    margin-top: -110px;
`;

const BannerPM = styled.p`
    color: #fff;
`;

const BannerImgM = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const ContentsWrapperDivM = styled.ul`
    width: 90vw;
    margin:0 auto;
`;


const TabNavM = styled.nav`
    height: 50px;
    border-bottom: 1px solid #ddd;
    text-align: center;
    margin-top: 50px;
`;

const TabButtonM = styled(NavLink)`
    height: 50px;
    line-height: 50px;
    font-weight:bold;
    font-size: 14px;
    margin-left: 20px;
    padding-bottom: 15px;
    &:hover {
        color: #ddd;
    }
    &.active{
        color: #4385F5;
        border-bottom: 3px solid #4385F5;
    }
`;

