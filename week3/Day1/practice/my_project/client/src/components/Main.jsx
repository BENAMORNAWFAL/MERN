
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Partone from './Partone';
import ProductList from './ProductList';


const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));}
   
    return (
        <div>
           <Partone setLoaded={setLoaded}/>
           <hr/>
           {loaded && <ProductList product={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;