import React, { useState } from 'react';
import animals from './db';
import styled from 'styled-components';
import Animal from './Components/Animal';
import Controller from './Components/Controller';
import Threat from './Components/Threat';

const App = () => {
  const [animalNumber, setAnimalNumber] = useState(1);
  const [isThreatOpen, setIsThreatOpen] = useState(false);
  const currentAnimal = animals[animalNumber];
 // console.log("currentAnimal", currentAnimal);

  const openThreat = () =>{
    setIsThreatOpen(true);
  }

  const closeThreat = ()=>{
    setIsThreatOpen(false);
  }
  const ThreatProps = {
    scientificName:currentAnimal.scientificName,
    range:currentAnimal.range,
    de1:currentAnimal['description-one'],
    de2:currentAnimal['description-two'],
    de3:currentAnimal['description-three'],
    closeThreat
  }

  const nextHandler = () => {
    //console.log("next handler called")
    if (animalNumber !== 12) {
      setAnimalNumber(animalNumber + 1)
    }
    else {
      setAnimalNumber(1)
    }
  }
  const prevHandler = () => {
    //console.log("prev handler called")
    if (animalNumber !== 1) {
      setAnimalNumber(animalNumber - 1)
    }
    else {
      setAnimalNumber(12)
    }
  }

  return (
    <>
    {isThreatOpen!==true?
    <StyledApp backgroundColor={currentAnimal.backgroundColor}>
    <Controller openThreat = {openThreat} prevHandler={prevHandler} nextHandler={nextHandler} />
    <Animal image={currentAnimal.image} />
    <AnimalName>{animalNumber}  |  {currentAnimal.name}</AnimalName>
  </StyledApp>:
  <Threat {...ThreatProps} />}
    </>

  )
}
const AnimalName = styled.div`
color:white;
font-size:2rem;
margin-top:10%;
padding:0 1rem 0 1rem;
@media(min-width:800px){
  margin-top:5%;
  font-size:3rem;
}
@media(min-width:1200px){
  font-size:4rem;
}
`

const StyledApp = styled.div`
background-color:${props => props.backgroundColor ? props.backgroundColor : "red"};
display:flex;
flex-flow:column nowrap;
align-items:center;
width:100%;
height:100vh;
`

export default App;
