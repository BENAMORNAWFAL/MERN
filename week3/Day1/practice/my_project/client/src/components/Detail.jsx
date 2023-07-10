import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+id)
            .then(res => {
                console.log("product=========",res.data)
                setProduct(res.data)
            })
            .catch(err => console.error(err));
    }, []);

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
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}> Edit </Link>
            <Link to={"/"}> Home </Link>
            <Link onClick={(e)=>{deleteProduct(product._id)}} to={"/"}> Delete </Link>

        </div>
    )
}

export default Detail