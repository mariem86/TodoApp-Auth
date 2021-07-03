import React from 'react'
import {deleteTodo} from "../../js/action/todoAction"
import { useDispatch, useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2"
function TodoItems({todo,getTodoo}) {
    
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer);
    const deleteTodoo=()=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        dispatch(deleteTodo(todo._id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    }
    return (
        <ul className="myUL">
        
        <li className="checked" >
            <span >{   todo.name  }</span>
            <button className="close" onClick={  deleteTodoo}>X</button>
            <button className= "comp"  onClick={()=>getTodoo(todo)}>Edit</button>

        </li>
          
      </ul>

      
      
    )
}


export default TodoItems

