import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import ProductList from './components/ProductList'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm'
import Details from './components/Details'
import axios from 'axios';

const App = () => {
  const API = "http://localhost:8000/product";

// ! для зранения полученых продуктов с API
const [products, setProducts] = useState([]);


  // ! create (post request)
  function addProduct(newProduct){
    axios.post(API, newProduct)
  }

  async function getProducts(){
    let result = await axios.get(API);
    setProducts(result.data);
  }

  // ! delete 
  async function deleteProduct(id){
    await axios.delete(`${API}/${id}`)
    getProducts()
  }

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList deleteProduct={deleteProduct} products={products} getProducts={getProducts} />}/>
        <Route path='/add' element={<AddForm addProduct={addProduct} />}/>
        <Route path='/edit/:id' element={<EditForm />}/>
        <Route path='/details' element={<Details />}/>
        <Route path='/contacts' element={<h1>Contacts</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App