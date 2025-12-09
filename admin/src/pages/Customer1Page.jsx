import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Pagination from 'react-js-pagination'
import { useState, useEffect } from "react";
import axios from "axios";
import * as constant from "../Contants.js";

const Customer1Page = () => {
    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    const items = 10;

    const handlePageChange = (page) => { setPage(page); };

    const getListHandler = () => {
        try {
            // ポートフォリオ用の placeholder
            // axios.get(`${constant.API_SERVER}/portfolio`)
            //     .then((response) => {
            //         if (response.status === 200) {
            //             setData(response.data);
            //         }
            //     }
            //     )
            //     .catch((err) =>
            //         console.log(err)
            //     );

            const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
            setData(storedPosts);
        } catch (err) {
            console.log("getList error : " + err);
        }
    };

    useEffect(() => {
        getListHandler();
    }, []);

    return (
        <WrapperDiv>

            <ContentsWrapperDiv>
                <NewPostButton to="/customer1/newpost1">投稿</NewPostButton>
                <TableHeaderUl>
                    <TableHeaderLi style={{ flex: 1 }}>No</TableHeaderLi>
                    <TableHeaderLi style={{ flex: 7 }}>タイトル</TableHeaderLi>
                    <TableHeaderLi style={{ flex: 1 }}>日付</TableHeaderLi>
                </TableHeaderUl>

                {data && data.slice(
                    items * (page - 1),
                    items * (page - 1) + items
                ).map((v, i) => {
                    return (
                        <TableRowNavLink key={i} to="/customer1/detail1" state={v}>
                            <TableRowDiv style={{ flex: 1 }}>{i + 1}</TableRowDiv>
                            <TableRowDiv style={{ flex: 7 }}>{v.title}</TableRowDiv>
                            <TableRowDiv style={{ flex: 2 }}>{v.date}</TableRowDiv>
                        </TableRowNavLink>
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
        </WrapperDiv>
    );
};

export default Customer1Page;

const WrapperDiv = styled.div`
    width:100%;
    margin-top:150px;
    margin-right:20px;
    margin-left:240px;
`;

const ContentsWrapperDiv = styled.div`
    width: 1200px;
    margin:0 auto;
`;

const TableHeaderUl = styled.ul`
    height: 50px;
    background-color: #f8f8f8;
    display: flex;
    line-height: 50px;
    margin: 0;
    padding:0;
`;

const TableHeaderLi = styled.li`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`;

const TableRowNavLink = styled(NavLink)`
    height: 50px;
    display: flex;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    text-decoration: none;
`;

const TableRowDiv = styled.div`
    font-size: 14px;
    text-align: center;
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

const NewPostButton = styled(NavLink)`
    background-color: #4385F5;
    font-size: 14px;
    cursor: pointer;
    color: #fff;
    margin-bottom: 15px;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;

    &:hover{
        opacity: 0.8;
    }
`;