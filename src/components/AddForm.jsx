import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddForm = ({addProduct}) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
const handleValues = () => {
  
  let newProduct = {title: title, image: image, price: price};
  console.log(newProduct);
  addProduct(newProduct)
}

  return (
    <div>
      <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title'/>
      <input onChange={(e) => setImage(e.target.value)} type="img" placeholder='Image'/>
      <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Price'/>
      <Link to="/">
      <button onClick={() => handleValues()}>Add</button>
      </Link>
    </div>
  )
}

export default AddForm