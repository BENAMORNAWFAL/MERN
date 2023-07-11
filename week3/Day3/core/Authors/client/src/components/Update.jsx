import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const Update = (props) => {
    const { id } = useParams();
    const nav= useNavigate()
    const[name,setName]=useState('');
    const [errors, setErrors] = useState({});
    
    //GET ONE AUTHOR
    useEffect(() => {
        axios.get('http://localhost:8000/api/Author/' + id)
            .then(res => {
                console.log(res.data)
                setName(res.data.name);
                
            })
            .catch(err=>console.log("error in update ",err))
    }, [id]);
    
    // UPDATE AUTHOR
    const UpdateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/Author/' + id, {
            name,
            
        })
            .then(res =>{console.log(res);
                nav('/')
            } )
            .catch(err => {const errResponse = err.response.data.errors;
                const errObj = {};
                for (const key of Object.keys(errResponse)) {
                  errObj[key] = errResponse[key].message;
                }
                setErrors(errObj);
            });
    }
    
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"}> Home</Link>
            <h4>Edit this author</h4>
            <form  onSubmit={UpdateAuthor} class="mb-3">
                <p style={{color:'red'}}>{errors.name}</p>
                <label class="form-label">Name: </label>
                <input   onChange={(e)=>{setName(e.target.value)}} value={name} /><br></br>
                <Link to="/" class="btn btn-danger">Cancel</Link>
                <input type='submit' value="Update" class="btn btn-success"></input>
            </form>
        </div>
    )
}

export default Update