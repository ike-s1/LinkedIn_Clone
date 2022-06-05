import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setLeftSidePhotoURL } from "../../redux/reducers/user-reducer";
import WidgetLeft from "../leftSide/Widget";



const LeftSide = () => {
  const user = useSelector(state => state.user.user);
  const [photoURl,setPhotoUrl] = useState();
  const dispatch = useDispatch();
  const leftSidePhotoURL = useSelector(state => state.user.leftSidePhotoURL);
  const [isActiveInput, setIsActiveInput] = useState(false);

  const addleftSidePhotoURL = (e) => {
    setIsActiveInput(prev => !prev);
    if(photoURl?.trim()) {
      dispatch(setLeftSidePhotoURL(photoURl));
    }
  }


  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo  leftSidePhotoURL={leftSidePhotoURL}/>
            <Link>Welcome, {user ? user.displayName : 'there'}!</Link>
          </a>
          <a>
            <AddPhototext >
              <form>
                  <input style={{display: isActiveInput ? '':'none'}} id='url' type="text" value={photoURl} onChange={ (e) => setPhotoUrl(e.target.value)}/>
                    <label htmlFor="url" onClick={addleftSidePhotoURL}>{ isActiveInput ?'Add' : 'Add a photo (URL)'}</label>
              </form>
            </AddPhototext>
          </a>
        </UserInfo>
       <WidgetLeft/>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="#" />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
          <a> 
            <span>Groups</span>
          </a>
          <a>
            <span>Events
              <img src="/images/plus-icon.svg" alt="#" />
            </span>
          </a>
          <a>
            <span>Follow Hastags</span>
          </a>
          <a>
            <span>Discover more</span>
          </a>
      </CommunityCard>
    </Container>
  );
};

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Container = styled.div`
  grid-area: leftside;
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBackground = styled.div`
  background: url("/images/card-bg.svg") center / 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background: url( ${props => props.leftSidePhotoURL ||"/images/photo.svg"}) center / 100% 100% no-repeat;
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhototext = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
  form {
    input {
      margin-right: 5px;
    }
    label {
        cursor: pointer;
      }

  }
`;


const Item = styled.a`
    border-color: rgba(0,0,0, 0.8);
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;
    span {
      display: flex;
      align-items: center;
      color: rgba(0,0,0, 0.6);
    }
    &:hover {
      background-color: rgba(0,0,0, 0.08);
    }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  position: sticky;
  top: 80px;
  flex-direction: column;
    a {
      color: black;
      padding: 4px 12px 4px 12px;
      font-size: 12px;
      &:hover {
        color: #0a66c2
      }
      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &:last-child {
        color: gray;
        text-align: none;
        border-top: 1px solid #d6cec2;
        padding: 12px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }

      }
    }

`

export default LeftSide;
