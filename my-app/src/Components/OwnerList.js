import React from 'react';
import { connect } from 'react-redux';
import OwnerCard  from './OwnerCard';

const OwnerList = ({pokemonImages}) => {
    // console.log(pokemonImages)
    const renderedPokemon = pokemonImages.map((image) => {
        return (
            <div>
                <OwnerCard key={image.id} item={image.item} description={image.description} price={image.price}/>
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

