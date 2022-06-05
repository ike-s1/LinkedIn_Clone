import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header/Header";
import Jobs from "../components/jobs/Jobs";

import LeftSide from "../components/leftSide/LeftSide";
import Main from "../components/main/Main";
import Messaging from "../components/messaging/Messaging";
import MyNetwork from "../components/network/MyNetwork";
import Notifications from "../components/notifications/Notifications";
import RightSide from "../components/rightSide/RightSide";



const Home = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate()
  

  useEffect (() => {
    navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'))
    window.onbeforeunload = () => {
    window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname))
}
  },[])
  return (
    <Container>
        <Content>
          {!user && <Navigate to="/" />}
          <Header />
          <Section>
            <h5>
              <a>Hiring is a hurry?&nbsp;</a>
            </h5>
            <p>
              {" "}
              - Find talanted pros in record time with Upwork and keep bussiness
              moving.
            </p>
          </Section>
          <Layout>
            <LeftSide />
            <Routes>
               <Route path='/' element={<Main/>}/>
               <Route path='/network' element={<MyNetwork/>}/>
               <Route path='/jobs' element={<Jobs/>}/>
               <Route path='/messaging' element={<Messaging/>}/>
               <Route path='/notifications' element={<Notifications/>}/>
            </Routes>
            <RightSide />
          </Layout>
        </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    color: #0a66c2;
    cursor: pointer;
    a {
      font-weight: 700;
    }
  }

  p {
    color: #434694;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 5px 0px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: " leftside main rightside";
  grid-template-columns: minmax(200px, 5fr) minmax(0, 12fr) minmax(200px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;

  @media (max-width: 920px) {
    display: grid;
    grid-template-areas:
      " leftside main"
      "leftside rightside";
    grid-template-columns: minmax(200px, 5fr) minmax(200px, 12fr);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
