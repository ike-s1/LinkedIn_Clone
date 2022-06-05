import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import firebase from 'firebase/compat/app';
import { postArticleAPI } from "../../redux/reducers/article-reducer";


const PostModal = ({ showModal, setShowModal }) => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [shareVideoLink, setShareVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const switchAssetArea = (area) => {
    setShareImage("");
    setShareVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (e) => {
        e.preventDefault();
        const payload = {
            image: shareImage,
            video: shareVideoLink,
            user: user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        }

       dispatch(postArticleAPI(payload));
    reset(e);
  }

  const reset = (e) => {
    setEditorText("");
    setShowModal(false);
    setShareImage("");
    setShareVideoLink("");
    setAssetArea("");
  };
  const handleShareImage = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const handleShareVideo = (e) => {
    setShareVideoLink(e.target.value);
  };



  return (
    <>
      {showModal ? (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={reset}>
                <img src="/images/close.svg" alt="#" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                  {user.photoURL ? <img src={user.photoURL}/> : <img src="/images/user.svg" alt="#" />}
                    <span>{user.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                  value={editorText}
                />
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accespt="images/gif, image/jpeg, image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleShareImage}
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="#" />
                    )}
                  </UploadImage>
                ) : (
                assetArea === 'media' &&
                  <>
                    <input
                      type="text"
                      placeholder="Please input a video link"
                      value={shareVideoLink}
                      onChange={handleShareVideo}
                    />
                    {shareVideoLink && (
                      <ReactPlayer width={"100%"} url={shareVideoLink} />
                    )}
                  </>
                )}
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea('image')}>
                  <img src="/images/share-image.svg" alt="#" />
                </AssetButton>
                <AssetButton  onClick={() => switchAssetArea('media')}>
                  <img src="/images/share-video.svg" alt="#" />
                </AssetButton>
              </AttachAssets>
              <PostButton
                disabled={!editorText}
                onClick={postArticle}
              >
                post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${fadeIn} 0.3s linear;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
`;

const AssetButton = styled.div`
  display: flex;
  align-content: center;
  height: 20px;
  width: 20px;
  min-width: auto;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  &:not(:last-child) {
    padding-right: 20px;
  }
`;



const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  border: none;
  padding: 5px 50px;
  background: ${(props) => (props.disabled ? "#d3d3d3cc" : "#0a66c2")};
  cursor: ${(props) => (props.disabled ? "not-allowed;" : "pointer")};
  color: ${(props) => (props.disabled ? "rgba(1,1,1,0.2)" : "white")};
  &:hover {
    background: ${(props) => (props.disabled ? "#7c7b7bcc" : "#004182")};
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    border: none;
    outline: none;
  }
  input {
    border: none;
    background-color: lightgray;
    outline: none;
    padding: 2px 10px;

  }
`;

const UploadImage = styled.div`
  img {
    width: 100%;
    margin-top: 5px;
  }

  label {
    border: none;
    width: 50%;
    background-color: lightgray;
    color: gray;
    outline: none;
    padding: 2px 10px;
    font-size: 13px;
    cursor: pointer;
  }
`;

export default PostModal;
