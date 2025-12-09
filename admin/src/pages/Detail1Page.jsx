import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import * as constant from "../Contants";

const Detail1Page = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const deleteHandler = () => {
        try {
            // ポートフォリオ用の placeholder
            // axios.post(`${constant.API_SERVER}/portfolio`, {
            //     id: location.state.id
            // })
            //     .then((response) => {
            //         console.log(response);
            //         navigate(-1)
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     });
            const posts = JSON.parse(localStorage.getItem("posts")) || [];

            const filtered = posts.filter(post => post.id !== location.state.id);

            localStorage.setItem("posts", JSON.stringify(filtered));
            navigate(-1);
        } catch (err) {
            console.log("delete error : " + err);
        }
    };

    return (
        <WrapperDiv>
            <ContentsWrapperDiv>
                <TitleDiv>
                    <TitleP>{location.state.title}</TitleP>
                    <p>{location.state.date}</p>
                </TitleDiv>
                <BodyDiv dangerouslySetInnerHTML={{ __html: location.state.body }}></BodyDiv>

                <ButtonWrapper>
                    <BackButton onClick={() => navigate(-1)}>
                        Back
                    </BackButton>
                    <UpdateButton to="/customer1/update1" state={location.state}>
                        編集
                    </UpdateButton>
                    <BackButton onClick={deleteHandler} style={{ backgroundColor: "#ff4040" }}>
                        削除
                    </BackButton>
                </ButtonWrapper>
            </ContentsWrapperDiv>
        </WrapperDiv>
    );
};

export default Detail1Page;

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

const TitleDiv = styled.div`
    width: 100%;
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

    border-bottom: 1px solid #ddd;
`;

const ButtonWrapper = styled.div`
    display: flex;

    &>*:not(:first-child){
        margin-left: 20px;
    }
`;

const UpdateButton = styled(NavLink)`
    padding:10px 20px;
    background-color: #4385F5;
    border: none;
    color: #fff;
    margin-top: 20px;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        opacity: 0.7;
    }
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