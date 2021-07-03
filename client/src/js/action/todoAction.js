import axios from "axios";
import {
    GET_Todo,
      SET_LOADING,
      
  } from "../const/actionType";
  //Add todo
  
export const addTodo = (newTodo) => async (dispatch) => {
  dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.post("/api/auth/addTodo", newTodo,options);
     dispatch(getTodos());
    } catch (error) {
      console.log(error)
    

    }
  };


  //get todo
  export const getTodos = () => async (dispatch) => {
  dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const res = await axios.get("/api/auth/all",options);
     dispatch({
        type:GET_Todo,
        payload: res.data, 
      });
    } catch (error) {
    console.log(error)
    }
  };

  
 
  //delete todo
  export const deleteTodo = id => dispatch => {
   dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    const res =axios.delete(`/api/auth/deleteTodo/${id}`,options);
      dispatch(getTodos());
    } catch (error) {
      const errorsArray = error.response.data.errors;
      const msg = error.response.data.msg
      if (Array.isArray(errorsArray)) {
        errorsArray.forEach((err) => alert(err.msg));
      }
      if (msg) {
        alert(msg);
      }

    }
    };
 
    //edittodo
    export const editTodo=(id,updateTodo)=>dispatch=>{
        dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
        const res =axios.put(`/api/auth/editTodo/${id}`,updateTodo,options)
        dispatch(getTodos());
      } catch (error) {
       console.log(error)
      
  
      }
      };

      const setLoading = () => (dispatch) => {
        dispatch({
          type: SET_LOADING,
        });
      };

