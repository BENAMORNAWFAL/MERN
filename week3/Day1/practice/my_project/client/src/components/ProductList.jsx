import React from 'react'
import {Link} from 'react-router-dom'


const ProductList = (props) => {
  return (
    <div>
        {props.product.map( (prod) =>
            <p key={prod._id}>
              <Link to={`/product/${prod._id}`} >{prod.title}</Link> </p>
        )}
    </div>
  )
}

export default ProductList