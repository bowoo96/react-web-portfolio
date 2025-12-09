import { styled } from "styled-components";
import { useState, useMemo, useRef } from "react";
import styles from "../App.css";
import axios from "axios";
import * as constant from "../Contants";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "react-quill/dist/quill.snow.css"
import ReactQuill from "react-quill";
import { storage } from "../Firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

const UpdatePost1Page = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const quillRef = useRef();

    const [title, setTitle] = useState(location.state.title);
    const [body, setBody] = useState(location.state.body);

    // ※ポートフォリオ用バージョンのため、Firebase Storage の設定は外しています。
    //   そのため、画像アップロード機能は現在動作しません。
    //   実案件では Firebase を用いて画像アップロードが正常に動作するコードになっています。
    const imageHandler = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        input.addEventListener("change", async () => {
            const editor = quillRef.current.getEditor();
            const file = input.files[0];
            const range = editor.getSelection(true);
            try {
                const storageRef = ref(
                    storage,
                    `image/${Date.now()}`
                );
                await uploadBytes(storageRef, file).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        editor.insertEmbed(range.index, "image", url);
                        editor.setSelection(range.index + 1);
                    });
                });
            } catch (error) {
                console.log(error);
            }
        });
    };

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ color: [] }, { background: [] }],
                    [{ align: [] }, "link", "image"],
                ],
                handlers: {
                    image: imageHandler
                },
            },
        }
    }, [])

    const updatePostHandler = () => {
        try {
            // ポートフォリオ用の placeholder
            // axios.post(`${constant.API_SERVER}/portfolio`, {
            //     id: location.state.id,
            //     title: title,
            //     body: body
            // })
            //     .then((response) => {
            //         if (response.status === 200) {
            //             navigate("/customer1");
            //         }
            //     })
            //     .catch((err) => console.log(err));

            const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];

            const updated = storedPosts.map(post =>
                post.id === location.state.id ? { ...post, title, body } : post
            );

            localStorage.setItem("posts", JSON.stringify(updated));
            navigate("/customer1");
        } catch (err) {
            console.log("update error : " + err);
        }
    };

    return (
        <WrapperDiv>
            <ContentsWrapperDiv>
                <TitleInput placeholder="제목을 입력해주세요." value={title} onChange={(text) => setTitle(text.target.value)} />
                <ReactQuill
                    style={{ width: "800px", height: "500px" }}
                    placeholder="Quill Content"
                    theme="snow"
                    ref={quillRef}
                    value={body}
                    onChange={setBody}
                    modules={modules}
                />
                <CompleteButton onClick={updatePostHandler}>保存する</CompleteButton>
            </ContentsWrapperDiv>
        </WrapperDiv>
    );
};

export default UpdatePost1Page;

const WrapperDiv = styled.div`
    width:100%;
    margin-top:150px;
    margin-right:20px;
    margin-left:240px;
`;

const ContentsWrapperDiv = styled.div`
    width: 800px;
    margin:0 auto;
    text-align: center;
`;

const TitleInput = styled.input`
    width: 793px;
    height: 40px;
    text-indent: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
`;

const CompleteButton = styled.button`
    background-color: #4385F5;
    border:none;
    font-size: 14px;
    cursor: pointer;
    color: #fff;
    margin-bottom: 15px;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    margin-top: 80px;

    &:hover{
        opacity: 0.8;
    }
`;
