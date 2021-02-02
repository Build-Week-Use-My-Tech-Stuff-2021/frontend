import React, {useState} from 'react';
// import { useParams } from 'react-router-dom';
// import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const initialFormValues1 = {
    title: '',
    description: '', 
    price: ''
  }
  
//   const initialFormErrors1 = {
//     title: '',
//     description: '', 
//   }

//   const initialDisabled1 = true;

function AddTechProduct(props) {
  const [addItem, setAddItem] = useState(initialFormValues1);
//   const [formErrors1, setFormErrors1] = useState(initialFormErrors1);
//   const [disabled1, setDisabled1] = useState(initialDisabled1);
//   const { id } = useParams();
  const history= useHistory();

//   const handleSubmit = e => {
//       e.preventDefault()
//       axiosWithAuth
//       .put(`${id}`, addItem)
//       .then(res=> {
//           console.log(res)
//       })
//       .catch(err=> {
//           console.log(err)
//       })
//   }

function handleClick() {
    history.push("/owner")
  }

const handleInput = e => {
    setAddItem({
        ...addItem, 
        [e.target.name]: e.target.value
    })
}

return(
    <div>
        <h1>Add Tech Product for Rent</h1>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
            <label>Title:
              <input 
              type="text"
              name="title"
              onChange={handleInput} 
              value={addItem.title} />
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
            <button type="button" onClick={handleClick}>Add</button>
          </form>
    </div>
)
}

export default AddTechProduct;

//   const inputChange1 = (e) => {
//     e.preventDefault();
//     yup.reach(schema, e.target.name)
//     .validate(e.target.value)
//     .then(() => {
//       setFormErrors1({
//         ...formErrors1, 
//         [e.target.name]: '',
//       })
//     })
//     .catch((err) => {
//       setFormErrors1({
//         ...formErrors1,
//         [e.target.name]: err.errors[0],
//       })
//     }) 
//     setAddTech({
//       ...addTech, [e.target.name]: e.target.value,
//     })
//   }

//   useEffect(() => {
//     schema.isValid(addTech).then((valid) => {
//       setDisabled1(!valid);
//     })
//   }, [addTech]);

// const addNewTech = (e) => {
//   history.push('/create')
// }