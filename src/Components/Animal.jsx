import React from 'react';
import styled from 'styled-components';

const Animal = ({ image }) => {
    return (
        <ImageWrapper>
            <StyledImage src={image} />
        </ImageWrapper>

    )
}

const ImageWrapper = styled.div`
    height:60vh;
    margin-top:2rem;
    display:flex;
    align-items:center;
`

const StyledImage = styled.img`
    width:100%;
    object-fit:contain;
`

export default Animal
