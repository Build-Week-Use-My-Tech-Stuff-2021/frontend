import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    .card{
        width: 100%;
        margin: 3%;
        background: red;
    }
`

const OwnerCard = (props) => {
    const {name, url} = props;
    return(
       <CardDiv>
            <div className="card">
                <div className="card-top">
                    <h2>Name: {name}</h2>
                </div>
                <div>
                    <p>More info: {url}</p>
                </div>
                <div className="card-body">
                    <button>delete</button>
                </div>
                <div>
                    <button>Edit</button>
                </div>
            </div>
        </CardDiv>
        
    )
    
    
}
export default OwnerCard;

