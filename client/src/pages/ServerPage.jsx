import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ServerPage = () => {

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
                        <BannerImg src={"/images/server_banner.png"} />
                    </BannerWrapperDiv>
                    <BannerTextDiv>
                        <BannerP style={{ fontWeight: "bold", fontSize: 35, marginBottom: 10 }}>日本サーバー</BannerP>
                        <BorderWrapperDiv>
                            <BorderDiv />
                        </BorderWrapperDiv>
                        <BannerP style={{ fontSize: 16, marginTop: 20 }}>安定したサーバー提供</BannerP>
                    </BannerTextDiv>

                    <ContentsWrapperDiv>
                        <div>
                            <TitleWrapperDiv>
                                <TitleBarDiv />
                                <ItemTitleP>サーバー1</ItemTitleP>
                            </TitleWrapperDiv>
                            <ItemUl>
                                <ItemLi>
                                    <ItemImage src={"/images/server1-1.jpg"} />
                                    <ItemIntroWrapperDiv>
                                        <ItemPriceP>基本版 <span style={{ fontSize: 25, color: "#4385F5" }}>5</span> 万円</ItemPriceP>
                                        <ItemIntroWrapperUl>
                                            <ItemOptionLi>- CPU オプション</ItemOptionLi>
                                            <ItemOptionLi>- Mem オプション</ItemOptionLi>
                                            <ItemOptionLi>- HDD オプション</ItemOptionLi>
                                        </ItemIntroWrapperUl>
                                    </ItemIntroWrapperDiv>
                                </ItemLi>
                                <ItemLi>
                                    <ItemImage src={"/images/server1-2.jpg"} />
                                    <ItemIntroWrapperDiv>
                                        <ItemPriceP>高級版 <span style={{ fontSize: 25, color: "#4385F5" }}>6</span> 万円</ItemPriceP>
                                        <ItemIntroWrapperUl>
                                            <ItemOptionLi>- CPU オプション</ItemOptionLi>
                                            <ItemOptionLi>- Mem オプション</ItemOptionLi>
                                            <ItemOptionLi>- HDD オプション</ItemOptionLi>
                                        </ItemIntroWrapperUl>
                                    </ItemIntroWrapperDiv>
                                </ItemLi>
                            </ItemUl>
                        </div>

                        <div>
                            <TitleWrapperDiv>
                                <TitleBarDiv />
                                <ItemTitleP>サーバー2</ItemTitleP>
                            </TitleWrapperDiv>
                            <ItemUl>
                                <ItemLi>
                                    <ItemImage src={"/images/server2-1.jpg"} />
                                    <ItemIntroWrapperDiv>
                                        <ItemPriceP>基本版 <span style={{ fontSize: 25, color: "#4385F5" }}>10</span> 万円</ItemPriceP>
                                        <ItemIntroWrapperUl>
                                            <ItemOptionLi>- CPU オプション</ItemOptionLi>
                                            <ItemOptionLi>- Mem オプション</ItemOptionLi>
                                            <ItemOptionLi>- HDD オプション,<br />SSD オプション</ItemOptionLi>
                                        </ItemIntroWrapperUl>
                                    </ItemIntroWrapperDiv>
                                </ItemLi>
                                <ItemLi>
                                    <ItemImage src={"/images/server2-2.jpg"} />
                                    <ItemIntroWrapperDiv>
                                        <ItemPriceP>高級版 <span style={{ fontSize: 25, color: "#4385F5" }}>12</span> 万円</ItemPriceP>
                                        <ItemIntroWrapperUl>
                                            <ItemOptionLi>- CPU オプション</ItemOptionLi>
                                            <ItemOptionLi>- Mem オプション</ItemOptionLi>
                                            <ItemOptionLi>- HDD オプション,<br />SSD オプション</ItemOptionLi>
                                        </ItemIntroWrapperUl>
                                    </ItemIntroWrapperDiv>
                                </ItemLi>
                            </ItemUl>
                        </div>

                        <RowWrapper>
                            <RowItemWrapper>
                                <RowTitle>オプション追加</RowTitle>
                                <RowUnderBarDiv />
                                <RowUl>
                                    <li><span style={{ color: "#4385F5" }}>•</span> メモリオプション</li>
                                    <li><span style={{ color: "#4385F5" }}>•</span> HDD オプション</li>
                                </RowUl>
                            </RowItemWrapper>

                            <RowItemWrapper>
                                <RowTitle>専用回線</RowTitle>
                                <RowUnderBarDiv />
                                <RowUl>
                                    <li><span style={{ color: "#4385F5" }}>•</span> ソフトバンク</li>
                                    <li><span style={{ color: "#4385F5" }}>•</span> NTT</li>
                                </RowUl>
                            </RowItemWrapper>
                        </RowWrapper>
                    </ContentsWrapperDiv>
                </>
            }

            {isMobile &&
                <>
                    <BannerWrapperDivM>
                        <BannerImgM src={"/images/server_banner.png"} />
                    </BannerWrapperDivM>
                    <BannerTextDivM>
                        <BannerPM style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>日本サーバー</BannerPM>
                        <BorderWrapperDivM>
                            <BorderDivM />
                        </BorderWrapperDivM>
                        <BannerPM style={{ fontSize: 14, marginTop: 20 }}>安定したサーバー提供</BannerPM>
                    </BannerTextDivM>

                    <ContentsWrapperDivM>
                        <div>
                            <TitleWrapperDivM>
                                <TitleBarDivM />
                                <ItemTitlePM>サーバー1</ItemTitlePM>
                            </TitleWrapperDivM>
                            <ItemUlM>
                                <ItemLiM>
                                    <ItemImageM src={"/images/server1-1.jpg"} />
                                    <ItemIntroWrapperDivM>
                                        <ItemPricePM>基本版 <span style={{ color: "#4385F5" }}>5</span> 万円</ItemPricePM>
                                        <ItemIntroWrapperUlM>
                                            <ItemOptionLiM>- CPU オプション</ItemOptionLiM>
                                            <ItemOptionLiM>- Mem オプション</ItemOptionLiM>
                                            <ItemOptionLiM>- HDD オプション</ItemOptionLiM>
                                        </ItemIntroWrapperUlM>
                                    </ItemIntroWrapperDivM>
                                </ItemLiM>
                                <ItemLiM>
                                    <ItemImageM src={"/images/server1-2.jpg"} />
                                    <ItemIntroWrapperDivM>
                                        <ItemPricePM>高級版 <span style={{ color: "#4385F5" }}>6</span> 万円</ItemPricePM>
                                        <ItemIntroWrapperUlM>
                                            <ItemOptionLiM>- CPU オプション</ItemOptionLiM>
                                            <ItemOptionLiM>- Mem オプション</ItemOptionLiM>
                                            <ItemOptionLiM>- HDD オプション</ItemOptionLiM>
                                        </ItemIntroWrapperUlM>
                                    </ItemIntroWrapperDivM>
                                </ItemLiM>
                            </ItemUlM>
                        </div>

                        <div>
                            <TitleWrapperDivM>
                                <TitleBarDivM />
                                <ItemTitlePM>サーバー２</ItemTitlePM>
                            </TitleWrapperDivM>
                            <ItemUlM>
                                <ItemLiM>
                                    <ItemImageM src={"/images/server2-1.jpg"} />
                                    <ItemIntroWrapperDivM>
                                        <ItemPricePM>基本版 <span style={{ color: "#4385F5" }}>10</span> 万円</ItemPricePM>
                                        <ItemIntroWrapperUlM>
                                            <ItemOptionLiM>- CPU オプション</ItemOptionLiM>
                                            <ItemOptionLiM>- Mem オプション</ItemOptionLiM>
                                            <ItemOptionLiM>- HDD オプション,<br />SSD オプション</ItemOptionLiM>
                                        </ItemIntroWrapperUlM>
                                    </ItemIntroWrapperDivM>
                                </ItemLiM>
                                <ItemLiM>
                                    <ItemImageM src={"/images/server2-2.jpg"} />
                                    <ItemIntroWrapperDivM>
                                        <ItemPricePM>高級版 <span style={{ color: "#4385F5" }}>12</span> 万円</ItemPricePM>
                                        <ItemIntroWrapperUlM>
                                            <ItemOptionLiM>- CPU オプション</ItemOptionLiM>
                                            <ItemOptionLiM>- Mem オプション</ItemOptionLiM>
                                            <ItemOptionLiM>- HDD オプション,<br />SSD オプション</ItemOptionLiM>
                                        </ItemIntroWrapperUlM>
                                    </ItemIntroWrapperDivM>
                                </ItemLiM>
                            </ItemUlM>
                        </div>

                        <RowWrapper_M>
                            <RowItemWrapper_M>
                                <RowTitle_M>オプション追加</RowTitle_M>
                                <RowUnderBarDiv_M />
                                <RowUl_M>
                                    <RowLi_M><span style={{ color: "#4385F5" }}>•</span> メモリオプション</RowLi_M>
                                    <RowLi_M><span style={{ color: "#4385F5" }}>•</span> HDD オプション</RowLi_M>
                                </RowUl_M>
                            </RowItemWrapper_M>

                            <RowItemWrapper_M>
                                <RowTitle_M>専用回線</RowTitle_M>
                                <RowUnderBarDiv_M />
                                <RowUl_M>
                                    <RowLi_M><span style={{ color: "#4385F5" }}>•</span> ソフトバンク</RowLi_M>
                                    <RowLi_M><span style={{ color: "#4385F5" }}>•</span> NTT</RowLi_M>
                                </RowUl_M>
                            </RowItemWrapper_M>
                        </RowWrapper_M>
                    </ContentsWrapperDivM>
                </>
            }
        </div>
    );
};

export default ServerPage;

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

const ContentsWrapperDiv = styled.div`
    width: 1200px;
    margin:0 auto;
`;

const ItemTitleP = styled.p`
    font-size:25px;
    font-weight: bold;
`;

const ItemUl = styled.ul`
    display: flex;
`;

const ItemLi = styled.li`
    display: flex;
    margin-top: 15px;
    width: 50%;
`;

const ItemImage = styled.img`
    width: 300px;
    height: 200px;
    border:1px solid #ddd;
`;

const ItemIntroWrapperDiv = styled.div`
    margin: 20px 0 0 20px;
`;

const ItemPriceP = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const ItemIntroWrapperUl = styled.ul`
    margin-top: 20px;
`;

const TitleWrapperDiv = styled.div`
    display: flex;
    margin-top: 50px;
`;

const TitleBarDiv = styled.div`
    border-right: 3px solid #4385F5;
    margin-right: 10px;
`;

const ItemOptionLi = styled.li`
    margin-top: 10px;
`;

const RowWrapper = styled.div`
    display: flex;
`;

const RowTitle = styled.p`
    margin-top:50px;
    font-size:25px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
`;

const RowUnderBarDiv = styled.div`
    width: 85px;
    height: 2px;
    background-color: #4385F5;
    margin-top: -2px;
`;

const RowItemWrapper = styled.div`
    width: 50%; 
`;

const RowUl = styled.ul`
    margin-top: 15px;
    line-height: 30px;
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

const ContentsWrapperDivM = styled.div`
    padding: 0 15px;
`;

const ItemTitlePM = styled.p`
    font-size:16px;
    font-weight: bold;
`;

const ItemUlM = styled.ul`
    /* display: flex; */
`;

const ItemLiM = styled.li`
    /* display: flex; */
    margin: 20px 0;
`;

const ItemImageM = styled.img`
    width: 100%;
    height: 200px;
`;

const ItemIntroWrapperDivM = styled.div`
    margin-top: 20px;
`;

const ItemPricePM = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

const ItemIntroWrapperUlM = styled.ul`
    margin-top: 20px;
`;

const TitleWrapperDivM = styled.div`
    display: flex;
    margin-top: 50px;
`;

const TitleBarDivM = styled.div`
    border-right: 3px solid #4385F5;
    margin-right: 10px;
`;

const ItemOptionLiM = styled.li`
    font-size: 14px;
    margin-top: 10px;
    color:#888;
`;

const DescPM = styled.p`
    font-size:14px;
    color:#888;
    margin-top:15px;
`;


const RowWrapper_M = styled.div`

`;

const RowTitle_M = styled.p`
    margin-top:50px;
    font-size:16px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
`;

const RowUnderBarDiv_M = styled.div`
    width: 55px;
    height: 2px;
    background-color: #4385F5;
    margin-top: -2px;
`;

const RowItemWrapper_M = styled.div`

`;

const RowUl_M = styled.ul`
    margin-top: 15px;
    line-height: 20px;
`;

const RowLi_M = styled.li`
    font-size: 14px;
`;