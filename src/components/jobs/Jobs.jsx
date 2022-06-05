import React from 'react';
import styled from "styled-components";
import Job from './Job';

const Jobs = () => {

    const jobs = [ 
        {img: 'https://volsiz.ru/wp-content/uploads/2022/01/how-to-level-up-your-steam-account-in-2022_61e54088e2094.jpeg', position: 'junior web developer', company: 'steam', location: 'kiev'},
        {img: 'https://www.iphones.ru/wp-content/uploads/2022/03/nvidia-1080x675-980x620-1.jpg', position: 'web developer', company: 'nvidia', location: 'lviv'},
    ]

    return (
        <Container>
            <RecommendedSearch>
                <h2>Recommended job search queries</h2>
                <Requests>
                    <Request>
                        <img src="/images/search-icon-blue.svg" alt="#" />
                        <span>Junior web developer</span>
                    </Request>
                    <Request>
                        <img src="/images/search-icon-blue.svg" alt="#" />
                        <span>Web developer</span>
                    </Request>
                    <Request>
                        <img src="/images/search-icon-blue.svg" alt="#" />
                        <span>Web developer specialist</span>
                    </Request>
                    <Request>
                        <img src="/images/search-icon-blue.svg" alt="#" />
                        <span>Middle web developer</span>
                    </Request>
                    <Request>
                        <img src="/images/search-icon-blue.svg" alt="#" />
                        <span>Frontend developer</span>
                    </Request>
                    <Request>
                        <img src="/images/search-icon-blue.svg" alt="#" />
                        <span>php developer</span>
                    </Request>
                </Requests>
            </RecommendedSearch>
            <RecommendedToYou>
                <h2>We recommend you</h2>
                {jobs.map((j) => {
                    return <Job img={j.img} position={j.position} company={j.company} location={j.location}/>
                })}
            </RecommendedToYou>

        </Container>
        
    );
};


const Container = styled.div`
  
    
`
const  RecommendedSearch = styled.div`
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    h2 {
        text-align: center;
        color: #504e4e;
        margin-bottom: 20px;
    }
`
const Requests = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Request = styled.div`
    padding: 3px 10px;
    color:#0A66C2;
    border: 2px solid #0A66C2;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
    &:hover {
        background-color: #adcff0;
    }
     
`

const RecommendedToYou = styled.div`
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    background-color: white;
    padding: 20px;
    border-radius: 5px;
`
export default Jobs;