import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const AddNew = () => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  // CREATE NEW AUTHOR
  const AddNewAuthor = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/Author/', { name })
      .then(() => {
        nav('/');
      })
      .catch((err) => {
        const errResponse = err.response.data.errors;
        const errObj = {};
        for (const key of Object.keys(errResponse)) {
          errObj[key] = errResponse[key].message;
        }
        setErrors(errObj);
      });
  };

  return (
    <div >
      <h1>Favorite authors</h1>
      <Link to={"/"}> Home</Link>
      <h4>Add a new author</h4>
      <form onSubmit={AddNewAuthor}  class="card">
        <div class="card-body">
          <p style={{color:'red'}}>{errors.name}</p>
          <label class="col-sm-2 col-form-label">Name : </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            class="form-control"
          />
        </div>
        <div >
          <Link to="/" class="btn btn-danger">Cancel</Link>
          <input type="submit" value="Submit" class="btn btn-success"/>
        </div>
      </form>
    </div>
  );
};


export default AddNew