import React, {useState} from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import banner from '../images/banner.jpg';

const Banner2 = styled.div`
  max-width: 50%;
  max-height:40%;
  margin: 2%2em;
`;

const AppDiv1 = styled.div`
      &{
        display: flex;
        justify-content: center;
        align-items: center; 
        flex-direction: column;
        flex-wrap: wrap;
        background: ${(props) => props.theme.tertiaryColor};
        margin: 0;
      }
      .App2{
        display: flex;
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;
        text-align: center; 
        flex-wrap: wrap;
        background: ${(props) => props.theme.secondaryColor};
        color: ${(props) => props.theme.white};
        font-size: 1.5em;
        margin: 3%;
        padding: 2%2em;
      }
      .App>*{
        margin: 1%;
      }

      h1{
        font-size: 3em;
        color: ${(props) => props.theme.primaryColor};
      }
     
      button{
      text-align: center;
      padding: 4%4%;
      background: ${(props) => props.theme.white};
      font-size: 1.3em;
      border-radius: 3px;
      border: 2px solid ${(props) => props.theme.secondaryColor};
      margin: 0 1em;
      padding: 0.25em 1em;
      color: ${(props) => props.theme.black}; 
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
    }
`

const initialFormValues1 = {
    item: '',
    description: '', 
    price: ''
  }

function AddTechProduct(props) {
  const [addItem, setAddItem] = useState(initialFormValues1);

  const history= useHistory();

  const handleSubmit = e => {
      e.preventDefault()
      axiosWithAuth()
      .post(`/api/techstuff/newItem`, addItem)
      .then(res=> {
          console.log(res)
          history.push("/owner")
      })
      .catch(err=> {
          console.log(err)
      })
  }

const handleInput = e => {
    setAddItem({
        ...addItem, 
        [e.target.name]: e.target.value
    })
}

return(
    <AppDiv1>
      <Banner2 name="banner">
        <img src={banner} alt="circuit board"></img>
      </Banner2>
        <h1>Add Tech Product for Rent</h1>
        <div className="App2">
        <form onSubmit={handleSubmit}>
            <label>Title:
              <input 
              type="text"
              name="item"
              onChange={handleInput} 
              value={addItem.item} />
            </label>
            <label>Description:
              <input 
              type="text"
              name="description"
              onChange={handleInput} 
              value={addItem.description} />
            </label>
            <label>Price:
              <input 
              type="text"
              name="price"
              onChange={handleInput}  
              value={addItem.price} />
            </label>
            <button type="submit">Add</button>
          </form>
          </div>
    </AppDiv1>
)
}

export default AddTechProduct;
