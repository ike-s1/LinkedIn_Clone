import React from "react";
import styled from "styled-components";

const Messaging = () => {
  return (
    <Container>
      <Content>
        <h2>New Message</h2>
        <Recipient>
          <form>
            <input type="text" placeholder="Enter a name" />
          </form>
        </Recipient>
        <Chat />
        <MessageBox>
          <textarea placeholder="write a message..."></textarea>
        </MessageBox>
        <Send>
            <button>send</button>
        </Send>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    color: #595959;
    font-weight: 400;
    padding: 15px;
    border-bottom: 1px solid #ebebeb;
  }
`;

const Recipient = styled.div`
  border-bottom: 2px solid #ebebeb;
  input {
    border: none;
    outline: none;
    padding: 10px 15px;
  }
`;

const Chat = styled.div`
  border-bottom: 2px solid #ebebeb;
  flex-grow: 1;
`;

const MessageBox = styled.div`
  padding: 12px 24px;
  min-height: 100px;
  border-bottom: 2px solid #ebebeb;
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    margin-bottom: 20px;
  }
 
`;

const Send = styled.div`
    background-color: #F9FAFB;
    padding: 15px 10px;
    display: flex;
    justify-content: flex-end;
    button {
        border: none;
        padding: 5px 40px;
        border-radius: 15px;
        background-color: #E5E6E7;
        color: #646464;
        transition: background-color 0.2s linear;
        &:hover {
            background-color: #c7c7c7;
        }
    }
`

export default Messaging;
