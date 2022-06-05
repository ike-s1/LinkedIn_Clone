import React from 'react';
import styled from "styled-components";

const Notification = ({name,text, daysAgo, img}) => {
    return (
        <Container>
                <Content>
                <img src={img} alt="#" />
                <NotificationBody>
                    <span>{name}</span>
                    <p>{text}</p>
                </NotificationBody>
                    <NotificationInfo>
                        <span>{daysAgo} days</span>
                    </NotificationInfo>
                </Content>

            
        </Container>
    );
};


const Container = styled.div`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    margin-bottom: 10px;
    &:hover {
    background-color: #E2F0FE;
    }
`

const Content = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;

    img {
        margin-right: 10px;
        width: 60px;
        height: 60px;
        object-fit: fill;
        border-radius: 5px;
    }

`
const NotificationBody = styled.div`
    line-height: 1.5;
    padding-right: 10px;
    flex-grow: 1;
    font-size: 14px;
    span {
        font-weight: 700;
    }
`

const NotificationInfo = styled.div`
    color: gray;
    font-size: 12px;
    min-width: 40px;
`

export default Notification;