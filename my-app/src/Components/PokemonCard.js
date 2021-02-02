import React from 'react';
import styled from 'styled-components';
import FitText from '@kennethormandy/react-fittext'

const CardContainer = styled.div`  
  width: 25%;
  border-radius: 10px;  
  border: 2px solid ${(props) => props.theme.black};
  padding: 2%;
  margin: 1%;
  color: ${(props) => props.theme.primaryColor}; 
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-wrap: wrap;
`;

const PokemonName = styled.h1`
color: ${(props) => props.theme.secondaryColor}; 
font-size: 1.2em;
font-weight: 700;
margin: 0;
padding-bottom: 7%;
font-weight: 700;
`;

const UrlInfo = styled.p`
font-size: .4em;
margin: 0;
padding-bottom: 5%;
`;


const PokemonCard = (props) => {
    const {name, url} = props;
    return(
        <FitText compressor={3}>
        <CardContainer>
            <PokemonName>Name: {name}</PokemonName>
            <UrlInfo>More info: {url}</UrlInfo>
        </CardContainer>
        </FitText>
    )
    
    
}
export default PokemonCard;

