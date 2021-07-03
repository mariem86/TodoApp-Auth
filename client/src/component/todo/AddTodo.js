import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner} from "react-bootstrap"




export default function AddTodo({name,setName,edit,action}) {
 const { isLoading } = useSelector((state) => state.todoReducer. isLoading);
  //spinner
  if ( isLoading) {
    return <div><Spinner animation="grow" /></div>
    }
    return (
        <div className="header">
        <h2 style={{margin:"5px"}}>My To Do List</h2> 
        <input type="text" class="form-control" id="fname" placeholder="Enter  Name" name="fname"
                        value={name} onChange={(e)=>setName(e.target.value)}/>
     <button type="submit" class="btn btn-default"  value={edit?"edit todo":"add todo"}  onClick={action}>ADD</button>  
     </div>
    
    )
}
