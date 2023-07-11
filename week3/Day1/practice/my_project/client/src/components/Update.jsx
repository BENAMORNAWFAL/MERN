import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'


const Update = (props) => {
    const { id } = useParams();
    const[title,setTitle]=useState("");
    const[price,setPrice]=useState(1);
    const[description,setDescription]=useState("");
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err=>console.log("error in update ",err))
    }, []);
    
    const UpdateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form style={{width:"200px",marginLeft:'500px'}} onSubmit={UpdateProduct}>
                <label >Title : </label>
                <input  class="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title}/> <br />
                <label >Price : </label>
                <input type='number' class="form-control" onChange={(e)=>{setPrice(e.target.value)}} value={price}/><br />
                <label >Description : </label>
                <textarea class="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={description}/><br />
                <button>Update</button>
                <Link to={"/"}>Home</Link>
            </form>
        </div>
    )
}

export default Update