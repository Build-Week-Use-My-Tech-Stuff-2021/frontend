import React from 'react';
import { connect } from 'react-redux';
// import OwnerCard  from './OwnerCard';


const OwnerList = ({pokemonImages}) => {
    console.log(pokemonImages)
    return(
        <div>
            <p>owernlist
                
            </p>
        </div>
    )
    // const renderedPokemon = pokemonImages.map((image) => {
    //     return (
    //         <div>
    //             <OwnerCard key={image.id} name={image.name} url={image.url} />
    //         </div>
    //     )
    // })
    //     return(
    //         <div>
    //             {renderedPokemon ? renderedPokemon : ''}
    //         </div>
    //     )     
}

const mapStateToProps = state => {
    return {
        pokemonImages: state.pokemonImages,
    }
}

export default connect(mapStateToProps, {})(OwnerList);

