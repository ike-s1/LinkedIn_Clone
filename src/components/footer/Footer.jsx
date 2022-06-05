import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Content>
        <FooterList>
          <li>
            <a>
              <span>General information</span>
            </a>
          </li>
          <li>
            <a>
              <span>Special abilities</span>
            </a>
          </li>
          <li>
            <a>
              <span>Reference</span>
            </a>
          </li>
          <li>
            <a>
              <span>Terms</span>
            </a>
          </li>
          <li>
            <a>
              <span>Reference</span>
            </a>
          </li>
          <li>
            <a>
              <span>Advertising </span>
            </a>
          </li>
          <li>
            <a>
              <span>Advertising Preferences</span>
            </a>
          </li>
          <li>
            <a>
              <span>Business Services</span>
            </a>
          </li>
          <li>
            <a>
              <span>Download LinkedIn App</span>
            </a>
          </li>
        </FooterList>
        <FooterCopyright>LinkedIn Corporation © 2022</FooterCopyright>
      </Content>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  position: sticky;
  top: 40px;
  padding: 20px 0px 50px;
  width: 100%;
  color: gray;
`;

const Content = styled.div`
  align-items: center;
  margin: 0 auto;
`;

const FooterList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  li {
      padding: 5px;
    a {
      span {
        padding: 5px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 100;
      }
    }
  }
`;

const FooterCopyright = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;

export default Footer;
