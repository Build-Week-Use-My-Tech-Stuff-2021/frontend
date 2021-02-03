import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CardDiv = styled.div`
    
    width: 270px;
    height: 200px;
   
        margin: 0;
        padding: 1%;
        background: yellow;
        display: flex;
        flex-wrap: wrap; 
        flex-direction: row;
        
    
`

 


const RenterCard = (props) => {

    const history = useHistory();
    
    const requestItem = (e) => {
        history.push('/')
      }

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
                    <button onClick={requestItem}>Request Item</button>
                </div>
            </div>
        </CardDiv>
        
    )
    
    
}
export default RenterCard;

