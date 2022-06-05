import React from "react";
import styled from "styled-components";

const MyNetwork = () => {
  return (
    <Container>
      <Content>
        <ControlPanel>
          <h2>Manage yourdispute network</h2>
          <ul>
            <li>
              <img src="/images/contacts.svg" alt="" />
              <a>Сontacts</a>
            </li>
            <li>
              <img src="/images/people.svg" alt="" />
              <a>People</a>
            </li>
            <li>
              <img src="/images/events.svg" alt="" />
              <a>Events</a>
            </li>
            <li>
              <img src="/images/pages.svg" alt="" />
              <a>Pages</a>
            </li>
            <li>
              <img src="/images/mailing.svg" alt="" />
              <a>Mailing lists</a>
            </li>
            <li>
              <img src="/images/hash.svg" alt="" />
              <a>Hashtags</a>
            </li>
          </ul>
        </ControlPanel>
        <NetworkBody>
          <NetworkStatus>No unanswered invitations</NetworkStatus>
          <Recommendations>
            <RecomendationCard>
              <CardInfo>
                <img
                  src="https://memberdata.s3.amazonaws.com/hi/hitsdd/photos/hitsdd_photo_gal__photo_1631621128.jpg"
                  alt="#"
                />
                <span>Boris Johnson</span>
              </CardInfo>

              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <button>Follow</button>
              </div>
            </RecomendationCard>
            <RecomendationCard>
              <CardInfo>
                <img
                  src="https://btw.by/wp-content/uploads/2020/03/0_mask_btw.jpg"
                  alt="#"
                />
                <span>Elon Musk</span>
              </CardInfo>

              <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <button>Follow</button>
              </div>
            </RecomendationCard>
          </Recommendations>
        </NetworkBody>
      </Content>
    </Container>
  );
};

export default MyNetwork;

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Content = styled.div`
  height: 100%;
  display: flex;
`;

const ControlPanel = styled.div`
  flex: 0 1 30%;
  border-right: 1px solid #ebebeb;
  text-align: center;
  h2 {
    font-weight: 300;
    color: #585656;
    margin-bottom: 10px;
    padding: 5px;
  }
  ul {
    list-style-type: none;
    li {
      padding: 20px 10px;
      color: gray;
      font-size: 15px;
      display: flex;

      cursor: pointer;
      img {
          width: 30px;
          height: 30px;
          margin-right: 20px;

      }
      &:hover {
        background-color: #ebebeb;
      }
    }
  }
`;

const NetworkBody = styled.div`
  flex: 0 1 70%;
`;

const NetworkStatus = styled.div`
  padding: 10px 5px;
  border-bottom: 1px solid #ebebeb;
  color: #8e8e8e;
`;

const Recommendations = styled.div`
  padding: 10px 5px;
  margin: 30px 0px;
`;

const RecomendationCard = styled.div`
  background-image: url("https://cutewallpaper.org/21/background-photos-for-linkedin/LinkedIn-Background-Photo-Use-Canva-to-Size-It-to-.png");
  background-size: 100% 40%;
  border: 1px solid #ebebeb;
  background-repeat: no-repeat;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 10px;
  img {
    border-bottom: 3px solid blue ;
    border-left: 3px solid blue;
    border-top: 3px solid yellow;
    border-right: 3px solid yellow;
    border-radius: 50%;
    background-origin:content-box;
    width: 60px;
  }
  p {
    color: gray;
    margin-bottom: 20px;
  }
  button {
    border: none;
    background: none;
    width: 100%;
    border-radius: 5px;
    color: #3480cc;
    font-weight: 600;
    padding: 3px 0px;
    &:hover {
      background-color: #e6f2fe;
    }
  }
`;

const CardInfo = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 20px;
  img {
    margin-right: 5px;
  }
  span {
    font-weight: 600;
  }
`;
