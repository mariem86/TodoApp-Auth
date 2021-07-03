import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getTodos ,addTodo,editTodo} from "../../js/action/todoAction"
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import Swal from "sweetalert2"
import {Spinner} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
 
function TodoList() {
  const [name, setName] = useState("");
  const [id, setId] = useState(0)
  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
 const { isLoading } = useSelector((state) => state.todoReducer.isLoading);
  const { user } = useSelector((state) => state.authReducer);
  //get todo
  useEffect(() => {
    dispatch(getTodos());
  }, []);
//add todo
  const addtodoo = () => {
    if( (name.trim() !== "")  ){
    dispatch(addTodo({ name }));
  
    setName('');
    
    Swal.fire('Good job!',"todo added with success","success")
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'please fill in the fields!!'})} 
  };
 //edit todo
 const edittodoo=()=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You would save the modified field!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, save modif!'
  }).then((result) => {
    if (result.isConfirmed) {
  dispatch(editTodo(id,{id,name}))
  Swal.fire(
    'Saved!',
    'Your change has been saved.',
    'success'
  )
}
})
  setEdit(false)
  setId(0)
   setName("")
}

const getTodoo=(todo)=>{
  
  setName(todo.name)
  setId(todo._id)
  setEdit(true)

}
   //spinner
  if ( isLoading) {
    return <div><Spinner animation="grow" /></div>
    }
   
    return (
      <div>
       
       <div>
< AddTodo name={name}  
  setName={setName} 
   

   action={edit?  edittodoo :addtodoo }
  />
</div>  

          
  < div >
{ todos.map((todo,i)=>
    <TodoItems key ={i} todo={todo}  getTodoo={getTodoo} />
)}
    </div>
    
    </div>
    )
}
export default TodoList

