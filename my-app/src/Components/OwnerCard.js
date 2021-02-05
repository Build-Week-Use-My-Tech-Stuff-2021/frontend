import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardDiv = styled.div`
    max-width: 50%;
    max-height: 50%;
    margin: 3%;
    padding: 5%;
    display: flex;
    flex-wrap: wrap; 
    flex-direction: row;
    justify-content: space-evenly;
    background: ${(props) => props.theme.secondaryColor};
    p{
        font-size: 1.3em;
        color: ${(props) => props.theme.white};
        
    }
    h2{
        font-size: 1.7em;
        font-weight: 700;
        color: ${(props) => props.theme.tertiaryColor};
    }
    button{
        text-align: center;
 padding: 4%4%;
    button{
      background: ${(props) => props.theme.black};
      font-size: 1.3em;
      border-radius: 3px;
      border: 2px solid ${(props) => props.theme.black};
      margin: 0 1em;
      padding: 0.25em 1em;
      color: ${(props) => props.theme.tertiaryColor}; 
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
    }
    }

`
const OwnerCard = (props) => {
    const {item, description, price} = props;
    return(
       <CardDiv>
            <div className="card">
                <div className="card-top">
                    <h2>Name: {item}</h2>
                </div>
                <div>
                    <p>More info: {description}</p>
                </div>
                <div>
                    <p>Price: {price}</p>
                </div>
                <div className="card-body">
                    <Link to="/requestItem">
                    <button>Request</button>
                    </Link>
                </div>
            </div>
        </CardDiv>
    )
}
export default OwnerCard;

