import React from 'react';
import styled from "styled-components";


const WidgetLeft = () => {
    return (
        <Widget>
          <div>
            <a>
              <span>Connections</span>
              <span>Grow your network</span>
            </a>
          </div>
          <a>
            <img src="/images/widget-icon.svg" alt="#" />
          </a>
        </Widget>
    );
};




const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    a {
      text-decoration: none;
      align-items: center;
      padding: 4px 12px;
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
          font-size: 12px;
          line-height: 1.333;
          &:first-child {
              color: rgba(0, 0, 0, 0.6)
          }
          &:nth-child(2) {
              color: rgba(0, 0, 0, 1);
          }
      }

    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }


  }
  
`;



export default WidgetLeft;