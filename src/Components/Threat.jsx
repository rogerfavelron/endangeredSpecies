import React from 'react';
import { ImCross } from 'react-icons/im';
import styled from 'styled-components';
import Util from '../utils/TextColors';
import "./Threat.scss"

const Threat = ({ scientificName, range, de1, de2, de3 ,closeThreat }) => {
    const descriptionOne = Util(de1);
    const descriptionTwo = Util(de2);
    const descriptionThree = Util(de3);

    return (
        <ThreatWrapper>
            <StyledCancel onClick={closeThreat}>
                <ImCross />
            </StyledCancel>

            <Details>
                <div className="detail">
                    <div className="detail__title">Scientific name:</div>
                    <div> {scientificName}</div>
                </div>
                <div className="detail">
                    <div className="detail__title">  |  Range:</div>
                    <div> {range}</div>
                </div>

            </Details>
            <DescriptionOne>
                {descriptionOne.map(x => x)}
            </DescriptionOne>
            <Description>
                {descriptionTwo.map(x => x)}
            </Description>
            <Description>
                {descriptionThree.map(x => x)}
            </Description> 
        </ThreatWrapper>
    )
}
const ThreatWrapper = styled.div`
    display:flex;
    flex-flow:column nowrap;
    align-items:center;
    background-color:#1f1f1f;
    color:white;
    height:100vh;
    padding:10%;
    
    @media(min-width:800px){
        padding:0 20% 10% 20%;
        justify-content:center;
    }
`
const DescriptionOne = styled.div`
    font-size:1.5rem; 
    line-height:1.125;
    margin-top:1rem;
`
const Description  = styled(DescriptionOne)`
    font-size:1rem;
`

const Details = styled.div`
    display:flex;
    flex-flow:row nowrap;
    margin-top:2rem;
    & .detail{
        display:flex;
        flex-flow:row nowrap;
        font-size:0.75rem;
        color:#555555;
    }
    & .detail__title{
        color:#888888;
    }
    white-space:pre-wrap;
`

const StyledCancel = styled.button`
font-size:1.25rem;
color:white;
border:4px solid red;
width:3rem;
height:3rem;
border-radius:50%;
background-color:inherit;
`


export default Threat
