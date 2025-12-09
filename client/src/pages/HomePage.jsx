import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {

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
                        <BannerImg src={"/images/banner.png"} />
                    </BannerWrapperDiv>
                    <BannerTextDiv>
                        <BannerP style={{ fontWeight: "bold", fontSize: 50 }}>日本サーバーホスティング</BannerP>
                        <BannerP style={{ marginTop: 15, fontSize: 20 }}>最高の回線速度</BannerP>
                    </BannerTextDiv>

                    <ContentsWrapperDiv>
                        <div>
                            <SubTitleP>日本サーバー</SubTitleP>
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
                        <BannerImgM src={"/images/banner.png"} />
                    </BannerWrapperDivM>
                    <BannerTextDivM>
                        <BannerPM style={{ fontWeight: "bold", fontSize: 20 }}>日本サーバーホスティング</BannerPM>
                        <BannerPM style={{ marginTop: 15, fontSize: 14 }}>最高の回線速度</BannerPM>
                    </BannerTextDivM>


                    <ContentsWrapperDivM>
                        <div>
                            <SubTitlePM>日本サーバー</SubTitlePM>
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
                                <ItemTitlePM>サーバー2</ItemTitlePM>
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

export default HomePage;

const BannerWrapperDiv = styled.div`
    width:100%;
    height:600px;
`;

const BannerTextDiv = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    margin-top: -350px;
`;

const BannerP = styled.p`
    color: #fff;
`;

const BannerImg = styled.img`
    /* margin: 0 auto;
    display: block; */
    width: 100%;
    height: 600px;
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
    color:#888;
`;

const DescP = styled.p`
    font-size:14px;
    color:#888;
    margin-top:15px;
`;

const SubTitleP = styled.p`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
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

// mobile /////////////////////////////////////////////////

const BannerWrapperDivM = styled.div`
    width:100%;
    height:400px;
`;

const BannerImgM = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

const BannerTextDivM = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    margin-top: -220px;
`;

const BannerPM = styled.p`
    color: #fff;
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

const SubTitlePM = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
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