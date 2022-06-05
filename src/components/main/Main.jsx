import React, { useState } from "react";
import ReactPlayer from "react-player";
import {  useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteArticles } from "../../redux/reducers/article-reducer";

import PostModal from '../modal/PostModal'

const Main = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const articlesData = useSelector((state) => state.articles);
  const [showModal, setShowModal] = useState(false);
  const [articlesNumber ,setArticlesNumber]  = useState(3);

  return (
     <Container>
      <ShareBox>
        <div>
          {user && user.photoURL ? (
            <img src={user.photoURL} alt="#" />
          ) : (
            <img src="/images/user.svg" alt="#" />
          )}
          <button
            onClick={() => setShowModal(true)}
            disabled={articlesData.loading ? true : false}
          >
            Start a post
          </button>
        </div>
        <div>
          <button>
            <img src="/images/picture.png" alt="#" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-marketing.png" alt="#" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/planner.png" alt="#" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article.png" alt="#" />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>

      {articlesData.articles.length == 0
      ?  <Empty><p>There are no articles!</p></Empty>
     : <Content>
        {articlesData.loading && <img src="/images/loader.gif" alt="#" />}
        {articlesData.articles.length > 0 && articlesData .articles.slice(0,articlesNumber).map((article, key) => {
          return  <Article key={key}>
          <SharedActor>
            <a>
              <img src={article.actor.image} alt="#" />
              <div>
                <span>{article.actor.title}</span>
                <span>{article.actor.description}</span>
                <span>{article.actor.date.toDate().toLocaleDateString()}</span>
              </div>
            </a>
            <button>
              <img onClick={() => dispatch(deleteArticles(article.description))} src="/images/delete.svg" width={20} height={20} alt="#" />
       
            </button>
          </SharedActor>
          <Description>{article.description}</Description>
          {
            (article.sharedImg || article.video) && 
            <SharedImg>
            <a>
              {!article.sharedImg && article.video
                ? <Video><ReactPlayer width={'100%'} height={'100%'} url={article.video} /></Video>
                : <img src={article.sharedImg} alt="#" />}
              
            </a>
          </SharedImg>
          }
          
          <SocialCounts>
            <li>
              <button>
                <img src="/images/likePost.svg" alt="#" />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>{article.comments} comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like.svg" alt="#" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comments.svg" alt="#" />
              <span>Comments</span>
            </button>
            <button>
              <img src="/images/share.svg" alt="#" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send.svg" alt="#" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
          })}



      </Content>
    }
      <PostModal showModal={showModal} setShowModal={setShowModal}></PostModal>
      {
        articlesData.articles.length > articlesNumber && <ShowMore>
        <button onClick={() => setArticlesNumber(prev => prev + 3)}> show more results</button>
     </ShowMore>
      }
      </Container>
  )
}


   

const Container = styled.div`
  grid-area: main;
`;

const Empty = styled.div`
  text-align: center;
  color: gray;
`

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      img {
        width: 20px;
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0px;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;



const Content = styled.div`
  text-align: center;
  & > img {
      width: 30px;
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding: 12px 40px 16px 15px;
  flex-wrap: nowrap;
  margin: 0px 0px 8px 0px;
  align-items: center;
  display: flex;
  color: gray;
  border-bottom: 1px solid lightgray;
  button {
    img {
      padding: 10px 0px;
      cursor: pointer;
    }
  }
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:not(:last-child) {
          padding-bottom: 5px;
        }
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba (0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0px;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;


const Video = styled.div`
 object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
`
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  padding: 0px 0px 60% 0px;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }


  `;



const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0px;
  border-bottom: 1px solid #d8dbdd;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 15px;
    color: gray;
    button {
      display: flex;
      padding: 5px 15px;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: none;
      span {
        color: gray;
      }
      img {
        margin-right: 5px;
      }
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background-color: white;
    cursor: pointer;
    img {
      width: 20px;
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const ShowMore = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    button {
      width: 100%;
      margin: 0 50px;
      border: 1px solid gray;
      color: gray;
      cursor: pointer;
      font-weight: 400;
      font-size: 15px;
      border-radius: 15px;
      padding: 2px 15px;

    }
`
export default Main;
