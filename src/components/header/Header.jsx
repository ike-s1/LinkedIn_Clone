import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signOutAPI } from "../../redux/reducers/user-reducer";
import home from '../../navImages/nav-home.svg'
import network from '../../navImages/nav-network.svg'
import job from '../../navImages/nav-jobs.svg'
import messaging from '../../navImages/nav-messaging.svg'
import notification from '../../navImages/nav-notifications.svg'
import work from '../../navImages/nav-work.svg'



const Header = () => {
  const user = useSelector((state) => state.user.user);
  const [active, setAtive] = useState();
  const [searchQuery, setSearchQuery] = useState();

  const dispatch = useDispatch();
 


  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input onChange={(e) => setSearchQuery(e.target.value)} type="text" value={searchQuery} placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="#" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
          <NavList  className={active === 'main' && 'active'} onClick={() => setAtive('main')}>  
            <Link to='/home'className="link">
                <img src={home} alt="#" />
                <span>Home</span>
              </Link>
            </NavList>
            <NavList  className={active === 'network' && 'active'} onClick={() => setAtive('network')}>  
            <Link to='/home/network'className="link">
                <img src={network} alt="#" />
                <span>My Network</span>
              </Link>
            </NavList>
            <NavList  className={active === 'jobs' && 'active'} onClick={() => setAtive('jobs')}>
              <Link to='/home/jobs' className="link">
                <img src={job} alt="#" />
                <span>Jobs</span>
              </Link>
            </NavList>
            <NavList  className={active === 'messaging' && 'active'} onClick={() => setAtive('messaging')}>
              <Link to='/home/messaging' className="link">
                <img src={messaging} alt="#" />
                <span>Messaging</span>
              </Link>
            </NavList>
            <NavList className={active === 'notifications' && 'active'} onClick={() => setAtive('notifications')}>
              <Link to='/home/notifications' className="link">
                <img src={notification} alt="#" />
                <span>Notifications</span>
              </Link>
            </NavList>

            <User>
              <a>
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="#" />
                ) : (
                  <img src="/images/user.svg" alt="#" />
                )}
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="#" />
                </span>
              </a>
              <SignOut onClick={() => dispatch(signOutAPI())}>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src={work} alt="#" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="#" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0px 24px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 10;
  @media (max-width: 768px) {
    padding: 20px 24px;
  }
`;

const Content = styled.div`
  padding: 0px 24px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  margin-right: 10px;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
    padding-left: 20px;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  padding: 5px 0px;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid black;
      position: absolute;
      left: 0;
      bottom: -5px;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 0px;
  background-color: #ffffff;
  color:rgba(0, 0, 0, 0.9);
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  cursor: pointer;
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  .link, a {
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 920px) {
      width: 60px;
      span {
        display: none;
      }
    }
    @media (max-width: 768px) {
      width: 80px;
      span {
        display: flex;
      }
    }
  }
  &:hover,
  &:active {
    .link , a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const User = styled(NavList)`
    position: relative;
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
