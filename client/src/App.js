import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./component/route/PrivateRoute";
import { getAuthUser } from "./js/action/authAction";
import Registeradmin from "./component/auth/Registreadmin"
import Home from "./component/pages/Home";
import Dashboard from "./component/pages/Dashboard"
import AppNavbar from "./component/AppNavbar";
import TodoList from "./component/todo/TodoList"

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
 const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <AppNavbar />
      <Switch>
      
        
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component= {Dashboard }    />
        <Route path="/registeradmin" component={Registeradmin}/>
        < PrivateRoute path="/Todo-list" component={TodoList}/>
       
       


        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
