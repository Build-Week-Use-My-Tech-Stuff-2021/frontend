import React from 'react';
import { connect } from 'react-redux';

import RenterCard from './RenterCard'

const OwnerList = ({pokemonImages}) => {
    console.log(pokemonImages)
    const renderedPokemon = pokemonImages.map((image) => {
        return (
            <div>
                
                <RenterCard key={image.id} name={image.name} url={image.url} />
            </div>
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