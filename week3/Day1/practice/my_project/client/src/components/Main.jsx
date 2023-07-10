
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Partone from './Partone';


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

   
    return (
        <div>
           <Partone setLoaded={setLoaded}/>
        </div>
    )
}
    
export default Main;