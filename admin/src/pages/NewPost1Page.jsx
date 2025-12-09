import { styled } from "styled-components";
import { useState, useMemo, useRef } from "react";
import axios from "axios";
import * as constant from "../Contants";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css"
import ReactQuill from "react-quill";
import { storage } from "../Firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

const NewPost1Page = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const quillRef = useRef();
    const navigate = useNavigate();

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

    const newPostHandler = () => {
        try {
            // ポートフォリオ用の placeholder
            // axios.post(`${constant.API_SERVER}/portfolio`, {
            //     title: title,
            //     body: body
            // })
            //     .then((response) => {
            //         if (response.status === 200) {
            //             navigate(-1);
            //         }
            //     })
            //     .catch((err) => console.log(err));

            const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
            const today = new Date();
            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, '0');
            const day = today.getDate().toString().padStart(2, '0');
            const correntDate = `${year}-${month}-${day}`;

            const newPost = {
                id: Date.now(),
                title: title,
                body: body,
                date: correntDate
            };

            const updatedPosts = [newPost, ...storedPosts];

            localStorage.setItem("posts", JSON.stringify(updatedPosts));

            navigate(-1);
        } catch (err) {
            console.log("newpost error : " + err);
        }
    };

    return (
        <WrapperDiv>
            <ContentsWrapperDiv>
                <TitleInput placeholder="タイトルを入力してください。" value={title} onChange={(text) => setTitle(text.target.value)} />
                <ReactQuill
                    style={{ width: "800px", height: "500px" }}
                    placeholder="Quill Content"
                    theme="snow"
                    ref={quillRef}
                    value={body}
                    onChange={setBody}
                    modules={modules}
                />
                <CompleteButton onClick={newPostHandler}>作成</CompleteButton>
            </ContentsWrapperDiv>
        </WrapperDiv>
    );
};

export default NewPost1Page;

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
