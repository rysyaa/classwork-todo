import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';

const ProductList = ({products, getProducts, deleteProduct}) => {

useEffect(() => {
  getProducts()
},[])
console.log(products);

  return (
    <div className="container d-flex justify-content-between">
      {products.map((elem) => (
        <Card key={elem.id} style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Img variant="top" src={elem.image} />
          <Card.Title>{elem.title}</Card.Title>
          <Card.Text>
            {elem.price}
          </Card.Text>
          <Button variant="primary">Edit</Button>
          <button variant="primary">Details</button>
          <button onClick={() => deleteProduct(elem.id)} variant="danger">Delete</button>
        </Card.Body>
      </Card>
      ))}
    </div>
  )
}

export default ProductList