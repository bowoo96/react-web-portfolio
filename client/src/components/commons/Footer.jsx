import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
    const isPc = useMediaQuery({
        query: "(min-width:1024px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:1023px)"
    });

    return (
        <>
            {isPc &&
                <FooterBackgroundDiv>
                    <FooterWrapperDiv>
                        <FooterTopWrapperDiv>
                            <div>
                                <div>
                                    <FooterLabel><span style={{ fontSize: 14, color: "#4385F5" }}>- </span>住所</FooterLabel>
                                    <FooterSpan>: 東京都 港区 南青山1-2-3 </FooterSpan>
                                </div>
                                <div>
                                    <FooterLabel style={{ width: "auto" }}>Copyright Kim Bowoo 2025</FooterLabel>
                                </div>
                            </div>

                            <div>
                                <CustomerTextP>24時間カスタマーセンター</CustomerTextP>
                                <div>
                                    <FooterIconImg src={"/images/telegram_icon.png"} />
                                    <FooterLabel style={{ fontSize: 18 }}>Telegram</FooterLabel>
                                    <FooterSpan style={{ fontSize: 18 }}>: @KimBowoo</FooterSpan>
                                </div>
                                <div>
                                    <FooterIconImg src={"/images/email_icon.png"} />
                                    <FooterLabel style={{ fontSize: 18, display: "inline" }}>E-mail </FooterLabel>
                                    <FooterSpan style={{ fontSize: 18 }}>: rkcmtlzk96@gmail.com</FooterSpan>
                                </div>
                            </div>
                        </FooterTopWrapperDiv>
                    </FooterWrapperDiv>
                </FooterBackgroundDiv>
            }
            {isMobile &&
                <FooterBackgroundDivM>
                    <FooterWrapperDivM>
                        <FooterTopWrapperDivM>
                            <div>
                                <CustomerTextPM>24時間カスタマーセンター</CustomerTextPM>
                                <div>
                                    <FooterIconImg src={"/images/telegram_icon.png"} />
                                    <FooterLabelM style={{ fontSize: 16, marginBottom: 10 }}>テレグラム</FooterLabelM>
                                    <FooterSpanM style={{ fontSize: 16 }}>: @KimBowoo</FooterSpanM>
                                </div>
                                <div>
                                    <FooterIconImg src={"/images/email_icon.png"} />
                                    <FooterLabelM style={{ fontSize: 16, marginBottom: 10 }}>メール</FooterLabelM>
                                    <FooterSpanM style={{ fontSize: 16 }}>: rkcmtlzk96@gmail.com</FooterSpanM>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <FooterLabelM style={{ marginTop: 25 }}><span style={{ fontSize: 14, color: "#4385F5" }}>- </span>住所</FooterLabelM>
                                    <FooterSpanM>: 東京都 港区 南青山1-2-3</FooterSpanM>
                                </div>
                                <div>
                                    <FooterLabelM style={{ width: "auto" }}>Copyright Kim Bowoo 2025</FooterLabelM>
                                </div>
                            </div>

                        </FooterTopWrapperDivM>
                    </FooterWrapperDivM>
                </FooterBackgroundDivM>
            }
        </>
    );
};

export default Footer;

const FooterBackgroundDiv = styled.div`
    width: 100%;
    height: 180px;
    background-color: #f4f4f4;
    margin-top:80px;
`;

const FooterWrapperDiv = styled.div`
    width: 1200px;
    margin:0 auto;
    padding-top:50px;
`;

const FooterTopWrapperDiv = styled.div`
    display: flex ;
    justify-content: space-between;
    padding-bottom: 20px;
`;

const FooterLabel = styled.label`
    width: 80px;
    display: inline-block;
    margin-bottom: 15px;
    font-size: 14px;
`;

const FooterSpan = styled.span`
    font-size: 14px;
`;

const CustomerTextP = styled.p`
    color: #444;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
`;

const FooterIconImg = styled.img`
    width: 20px;
    margin-bottom: -3px;
    margin-right: 5px;
`;

// mobile

const FooterBackgroundDivM = styled.div`
    width: 100%;
    height: 190px;
    background-color: #f4f4f4;
    margin-top:40px;
    padding: 0 15px;
`;

const FooterWrapperDivM = styled.div`
    padding-top:30px;
`;

const FooterTopWrapperDivM = styled.div`
    padding-bottom: 10px;
`;

const FooterLabelM = styled.label`
    width: 80px;
    display: inline-block;
    margin-bottom: 5px;
    font-size: 12px;
`;

const FooterSpanM = styled.span`
    font-size: 12px;
`;

const CustomerTextPM = styled.p`
    margin: 0px 0 10px 0;
    color: #444;
    font-weight: bold;
`;