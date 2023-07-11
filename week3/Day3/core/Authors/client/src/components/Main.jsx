import React ,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';


const Main = (props) => {
    const [author,setAuthor]=useState([])
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/Author')
        .then(res=>{
            setAuthor(res.data);
            setLoaded(true);
            console.log(res)
            
        })
        .catch(err => console.error(err));
    },[loaded])

    const removeFromDom = authortId => {
        setAuthor(author.filter(author => author._id !== authortId));
    }

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/Author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log("You have an error in delete",err));
    }

    const nav = useNavigate();
    const toUpdate=(oneAuthorId)=>{
        
        nav=`http://localhost:8000/api/Author/${oneAuthorId}`
    }
  return (
    <div>
        <h1>Favorite authors</h1>
        <Link to={"/api/author/new"}>Add an Author</Link>
        <p>We have quotes by:</p>
        <table class="table table-striped">
            <thead>
                <tr><th> Author </th>
                <th> Actions available </th></tr>
            </thead>
            <tbody>
                {author.map((oneAuthor)=>
                    <tr key={oneAuthor._id}>
                        <td>{oneAuthor.name}</td>
                        <td>
                            <Link to={`/api/Author/${oneAuthor._id}`} class="btn btn-primary">Edit</Link>
                            <button  onClick={(e)=>{deleteAuthor(oneAuthor._id)}} class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        
    </div>
  )
}

export default Main