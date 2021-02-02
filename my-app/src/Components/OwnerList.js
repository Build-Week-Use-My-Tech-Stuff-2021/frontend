import React from 'react';
import { connect } from 'react-redux';
import PokemonCard  from './PokemonCard';
import styled from 'styled-components';

const CardFlexParent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2%;
`;

const CardFlex4 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 

  
  
`;


const OwnerList = ({pokemonImages}) => {
    console.log(pokemonImages)
    const renderedPokemon = pokemonImages.map((image) => {
        return (
            <CardFlexParent>
            <CardFlex4>
                <PokemonCard key={image.id} name={image.name} url={image.url} />
            </CardFlex4>
            </CardFlexParent>
        )
        
    })
    return(
        <div>
            {renderedPokemon ? renderedPokemon : ''}
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        pokemonImages: state.pokemonImages,
    }
}
export default connect(mapStateToProps, {})(OwnerList);

