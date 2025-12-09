import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Pagination from 'react-js-pagination'
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import * as constant from "../Contants.js";
import axios from "axios";

const CustomerPage = () => {
    const isPc = useMediaQuery({
        query: "(min-width:1024px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:1023px)"
    });

    const mockData = [
        {
            id: 1,
            title: "サンプルタイトルA",
            date: "2025-01-12",
            body: "これはダミーの内容です。",
        },
        {
            id: 2,
            title: "テストデータB",
            date: "2025-02-03",
            body: "詳細ページで表示する用のダミーデータです。",
        },
        {
            id: 3,
            title: "例示タイトルC",
            date: "2025-03-20",
            body: "お知らせや投稿などのサンプルデータ。",
        }
    ];

    const [data, setData] = useState(mockData);
    const [page, setPage] = useState(1);
    const items = 10;

    const handlePageChange = (page) => { setPage(page); };

    const getListHandler = () => {
        try {
            // ポートフォリオ用の placeholder
            axios.get(`${constant.API_SERVER}/portfolio/test`)
                .then((response) => {
                    if (response.status === 200) {
                        setData(response.data);
                    }
                }
                )
                .catch((err) =>
                    console.log(err)
                );
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getListHandler();
    }, []);

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
                        <TableHeaderUl>
                            <TableHeaderLi style={{ flex: 1 }}>番号</TableHeaderLi>
                            <TableHeaderLi style={{ flex: 7 }}>タイトル</TableHeaderLi>
                            <TableHeaderLi style={{ flex: 1 }}>日付</TableHeaderLi>
                        </TableHeaderUl>

                        {data && data.slice(
                            items * (page - 1),
                            items * (page - 1) + items
                        ).map((v, i) => {
                            return (
                                <TableRowUl key={i} to="/customer/detail" state={v}>
                                    <TableRowLi style={{ flex: 1 }}>{i + 1}</TableRowLi>
                                    <TableRowLi style={{ flex: 7 }}>{v.title}</TableRowLi>
                                    <TableRowLi style={{ flex: 1 }}>{v.date.slice(0, 10)}</TableRowLi>
                                </TableRowUl>
                            )
                        })}

                        <PaginationBox>
                            {data && <Pagination
                                activePage={page}
                                itemsCountPerPage={items}
                                totalItemsCount={data.length - 1}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}>
                            </Pagination>}
                        </PaginationBox>
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

                        {data && data.slice(
                            items * (page - 1),
                            items * (page - 1) + items
                        ).map((v, i) => {
                            return (
                                <TableDivM key={i} to="/customer/detail" state={v}>
                                    <TableRowDivM>
                                        <TableRowPM >{v.title}</TableRowPM>
                                    </TableRowDivM>
                                    <TableDatePM >{v.date.slice(0, 10)}</TableDatePM>
                                </TableDivM>
                            )
                        })}


                        <PaginationBoxM>
                            {data && <Pagination
                                activePage={page}
                                itemsCountPerPage={items}
                                totalItemsCount={data.length - 1}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}>
                            </Pagination>}
                        </PaginationBoxM>
                    </ContentsWrapperDivM>
                </>
            }
        </div>
    );
};

export default CustomerPage;

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

const TableHeaderUl = styled.ul`
    height: 50px;
    background-color: #f8f8f8;
    display: flex;
    line-height: 50px;
`;

const TableHeaderLi = styled.li`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`;

const TableRowUl = styled(NavLink)`
    height: 50px;
    display: flex;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
`;

const TableRowLi = styled.div`
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const PaginationBox = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
  ul.pagination li {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px; 
    cursor: pointer;
  }

  ul.pagination li a { text-decoration: none;  font-size: 14px; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #4385F5; }
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
    margin:0 auto;
    width: 90vw;
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

const TableDivM = styled(NavLink)`
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
    display: inline-block;
`;

const TableRowDivM = styled.div`
    display: flex;
`;

const TableRowPM = styled.p`
    width: 90vw;
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const TableDatePM = styled.p`
    font-size: 13px;
    color: #888;
    margin-top: 10px;
`;

const PaginationBoxM = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px; 
  }

  ul.pagination li a { text-decoration: none;  font-size: 14px; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #4385F5; }
`;