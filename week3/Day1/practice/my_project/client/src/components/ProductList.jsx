import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
  
  const { removeFromDom } = props;
    
    const deleteProduct = (prodId) => {
        axios.delete('http://localhost:8000/api/product/' + prodId)
            .then(res => {
                removeFromDom(prodId)
            })
            .catch(err => console.log("You have an error in delete",err));
    }
  return (
    <div>
        {props.product.map( (prod) =>
            <p key={prod._id}>
              <Link to={`/product/${prod._id}`} >{prod.title}</Link> 
              <button onClick={(e)=>{deleteProduct(prod._id)}}>Delete</button>
            
            </p>
        )}
    </div>
  )
}

export default ProductList