import React from 'react';
import styled from "styled-components";

const Job = ({ img, position, company, location}) => {
    return (
        <Container>
                <Content>
                <img src={img} alt="#" />
                <JobBody>
                    <h2>{position}</h2>
                    <span>{company}</span> <br/>
                    <span>{location}</span>
                    <p>active recruitment</p>
                </JobBody>
                    <SaveJob>
                        <img src="/images/bookmark.svg" alt="#" />
                    </SaveJob>
                </Content>
        </Container>
    );
};


const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid #EBEBEB;
    margin-bottom: 10px;
`

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    img {
        margin-right: 10px;
        width: 20%;
        object-fit: fill;
        border-radius: 5px;
    }

`
const JobBody = styled.div`
    line-height: 1.5;
    padding-right: 10px;
    flex-grow: 1;
    font-size: 14px;
    h2 {
        color: #5192D4;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    span, p {
        color: gray
    }
    
`

const SaveJob = styled.div`
    img {
        width: 20px;
        padding: 5px;
        transition:  background-color  0.3s linear;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
            background-color: #d6d6d6;
        }
    }

`




export default Job;