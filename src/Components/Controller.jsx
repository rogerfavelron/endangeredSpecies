import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ControllerButton = ({ name ,onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {name == "right" ? <FaChevronRight /> : <FaChevronLeft />}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    color:white;
    background-color:inherit;
    width:3rem;
    height:3rem;
    border-radius:50%;
    border:2px solid black;
    font-size:1.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Controller = ({prevHandler,nextHandler,openThreat}) => {

    return (
        <StyledController>
            <ControllerButton name="left" onClick={prevHandler}/>
            <ThreatButton onClick={openThreat}>
                WHAT'S THE THREAT?
            </ThreatButton>
            <ControllerButton name="right" onClick={nextHandler}/>
        </StyledController>
    )
}

const StyledController = styled.div`
    display:flex;
    flex-flow:row nowrap;
    background-color:inherit;
    justify-content:space-evenly;
    align-items:center;
    width:20rem;
    
`

const ThreatButton = styled.button`
    width:6rem;
    height:6rem;
    background-color:white;
    border-radius:50%;
    color:inherit;
    padding:0.5rem;
    border:none;
    font-size:1.025rem;
`

export default Controller
