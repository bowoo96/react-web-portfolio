import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ServicePage = () => {

    const isPc = useMediaQuery({
        query: "(min-width:1024px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:1023px)"
    });

    return (
        <div>
            {isPc &&
                <>
                    <BannerWrapperDiv>
                        <BannerImg src={"/images/service_banner.png"} />
                    </BannerWrapperDiv>
                    <BannerTextDiv>
                        <BannerP style={{ fontWeight: "bold", fontSize: 35, marginBottom: 10 }}>付加サービス</BannerP>
                        <BorderWrapperDiv>
                            <BorderDiv />
                        </BorderWrapperDiv>
                        <BannerP style={{ fontSize: 16, marginTop: 20 }}>セキュリティ管制サービス</BannerP>
                    </BannerTextDiv>

                    <ContentsWrapperUl>
                        <ContentsLi>
                            <ContentsIconBackGroundDiv>
                                <IconImg src={"/images/service1_icon.png"} />
                            </ContentsIconBackGroundDiv>
                            <ContentsDescDiv>
                                <ConetentsTitleP>サービス1</ConetentsTitleP>
                                <div>
                                    <p><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 価格 :</span> 25,000円/月</p>
                                    <p style={{ marginTop: 10 }}><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 機能 :</span> DDoS防御、攻撃遮断など</p>
                                </div>
                            </ContentsDescDiv>
                        </ContentsLi>
                        <ContentsLi>
                            <ContentsIconBackGroundDiv>
                                <IconImg src={"/images/service2_icon.png"} />
                            </ContentsIconBackGroundDiv>
                            <ContentsDescDiv>
                                <ConetentsTitleP>サービス2</ConetentsTitleP>
                                <div>
                                    <p><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 価格 :</span> 25,000円/月</p>
                                    <p style={{ marginTop: 10 }}><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 機能 :</span> DDoS防御、攻撃遮断など</p>
                                </div>
                            </ContentsDescDiv>
                        </ContentsLi>
                        <ContentsLi>
                            <ContentsIconBackGroundDiv>
                                <IconImg src={"/images/service3_icon.png"} />
                            </ContentsIconBackGroundDiv>
                            <ContentsDescDiv>
                                <ConetentsTitleP>サービス3</ConetentsTitleP>
                                <div>
                                    <p><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 価格 :</span> 25,000円/月</p>
                                    <p style={{ marginTop: 10 }}><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 機能 :</span> DDoS防御、攻撃遮断など</p>
                                </div>
                            </ContentsDescDiv>
                        </ContentsLi>
                        <ContentsLi>
                            <ContentsIconBackGroundDiv>
                                <IconImg src={"/images/service4_icon.png"} />
                            </ContentsIconBackGroundDiv>
                            <ContentsDescDiv>
                                <ConetentsTitleP>その他</ConetentsTitleP>
                                <p style={{ marginTop: 10 }}><span style={{ fontWeight: "bold" }}>- </span> 補助IP 1個 5000円/月</p>
                            </ContentsDescDiv>
                        </ContentsLi>
                    </ContentsWrapperUl>
                </>
            }

            {isMobile &&
                <>
                    <BannerWrapperDivM>
                        <BannerImgM src={"/images/server_banner.png"} />
                    </BannerWrapperDivM>
                    <BannerTextDivM>
                        <BannerPM style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>付加サービス</BannerPM>
                        <BorderWrapperDivM>
                            <BorderDivM />
                        </BorderWrapperDivM>
                        <BannerPM style={{ fontSize: 14, marginTop: 20 }}>セキュリティ管制サービス</BannerPM>
                    </BannerTextDivM>

                    <ContentsWrapperUlM>
                        <ContentsLiM>
                            <ContentsIconBackGroundDivM>
                                <IconImg src={"/images/service1_icon.png"} />
                            </ContentsIconBackGroundDivM>
                            <ContentsDescDivM>
                                <ConetentsTitlePM>サービス1</ConetentsTitlePM>
                                <div>
                                    <ContentsDesM><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 価格 :</span> 25,000円/月</ContentsDesM>
                                    <ContentsDesM style={{ marginTop: 5 }}><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 機能 :</span> DDoS防御、攻撃遮断など</ContentsDesM>
                                </div>
                            </ContentsDescDivM>
                        </ContentsLiM>
                        <ContentsLiM>
                            <ContentsIconBackGroundDivM>
                                <IconImg src={"/images/service2_icon.png"} />
                            </ContentsIconBackGroundDivM>
                            <ContentsDescDivM>
                                <ConetentsTitlePM>サービス2</ConetentsTitlePM>
                                <div>
                                    <ContentsDesM><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 価格 :</span> 25,000円/月</ContentsDesM>
                                    <ContentsDesM style={{ marginTop: 5 }}><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 機能 :</span> DDoS防御、攻撃遮断など</ContentsDesM>
                                </div>
                            </ContentsDescDivM>
                        </ContentsLiM>
                        <ContentsLiM>
                            <ContentsIconBackGroundDivM>
                                <IconImg src={"/images/service3_icon.png"} />
                            </ContentsIconBackGroundDivM>
                            <ContentsDescDivM>
                                <ConetentsTitlePM>サービス3</ConetentsTitlePM>
                                <div>
                                    <ContentsDesM><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 価格 :</span> 25,000円/月</ContentsDesM>
                                    <ContentsDesM style={{ marginTop: 5 }}><span style={{ color: "#4385F5", fontWeight: "bold" }}>- 機能 :</span> DDoS防御、攻撃遮断など</ContentsDesM>
                                </div>
                            </ContentsDescDivM>
                        </ContentsLiM>
                        <ContentsLiM>
                            <ContentsIconBackGroundDivM>
                                <IconImg src={"/images/service4_icon.png"} />
                            </ContentsIconBackGroundDivM>
                            <ContentsDescDivM>
                                <ConetentsTitlePM>その他</ConetentsTitlePM>
                                <ContentsDesM style={{ marginTop: 5 }}><span style={{ fontWeight: "bold" }}>- </span> 補助IP 1個 5000円/月</ContentsDesM>
                            </ContentsDescDivM>
                        </ContentsLiM>
                    </ContentsWrapperUlM>
                </>
            }
        </div>
    );
};

export default ServicePage;

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

const BorderWrapperDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const BorderDiv = styled.div`
    width: 10px;
    border-bottom: 2px solid #fff;
`;

const BannerImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;

const ContentsWrapperUl = styled.ul`
    width: 1200px;
    margin:0 auto;
`;

const ContentsLi = styled.li`
    margin-top: 50px;
    display: flex;
    align-items: center;
`;

const ContentsIconBackGroundDiv = styled.div`
    width: 130px;
    height: 130px;
    background-color: #f3f7ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 75px;
`;

const ConetentsTitleP = styled.p`
    font-size:25px;
    font-weight: bold;
    margin-bottom: 15px;
`;

const ContentsDescDiv = styled.div`
    margin-left: 20px;
`;

// mobile /////////////////////////////////////////////////////////////////


const BannerWrapperDivM = styled.div`
    width: 100%;
    height:200px;
`;

const BannerTextDivM = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    margin-top: -130px;
`;

const BannerPM = styled.p`
    color: #fff;
`;

const BorderWrapperDivM = styled.div`
    display: flex;
    justify-content: center;
`;

const BorderDivM = styled.div`
    width: 10px;
    border-bottom: 2px solid #fff;
`;

const BannerImgM = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const ContentsWrapperUlM = styled.ul`
    margin:0 15px;
`;

const ContentsLiM = styled.li`
    margin-top: 50px;
    align-items: center;
`;

const ContentsIconBackGroundDivM = styled.div`
    width: 100px;
    height: 100px;
    background-color: #f3f7ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`;

const ConetentsTitlePM = styled.p`
    font-size:16px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const ContentsDescDivM = styled.div`
    margin-top: 20px;
`;

const ContentsDesM = styled.p`
    font-size: 14px;
`;

const IconImg = styled.img`
    width: 70px;
    height: 70px;
`;