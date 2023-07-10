import React from 'react'
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const Partone = (props) => {
  const [productData, setProductData] = useState([])
  const[title,setTitle]=useState("");
  const[price,setPrice]=useState(1);
  const[description,setDescription]=useState("");

  useEffect(()=>{
    axios.get('http://localhost:8000/api/product')
    .then(apiResponse => {
      console.log(apiResponse)
      setProductData(apiResponse.data)
    })
    .catch(err => {
      console.log('Something went wrong', err)
    })
  },[])
  

  const ProductHandler=(e)=>{
    e.preventDefault()
    
    const newProduct = {
      title,
      price,
      description
    }
    // take the Product obj and send it to the server => DB
    axios.post('http://localhost:8000/api/product', newProduct)
    .then((response)=>{
      setTitle('');setPrice(1);setDescription('');
      props.setLoaded(newProduct)
      })
      .catch(err => {
        console.log('Something went wrong', err)
      })
   
    
  }
  

  return (
    <form style={{width:"200px",marginLeft:'500px'}} onSubmit={ProductHandler}>
      <label >Title : </label>
      <input  class="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title}/> <br />
      <label >Price : </label>
      <input type='number' class="form-control" onChange={(e)=>{setPrice(e.target.value)}} value={price}/><br />
      <label >Description : </label>
      <textarea class="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={description}/><br />
      <button>Create</button>
    </form>
  )
}

export default Partone