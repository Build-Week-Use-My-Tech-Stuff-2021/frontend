import React from 'react';
import { connect } from 'react-redux';

const OwnerForm = ({pokemonImages}) => {
    console.log(pokemonImages)
    const renderedPokemon = pokemonImages.map((image) => {
        return(
            <h1>Name:{image.name}</h1>
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
export default connect(mapStateToProps, {})(OwnerForm);