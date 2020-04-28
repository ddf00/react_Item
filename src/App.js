import React,{Component} from 'react'
import {Switch,Route,Redirect} from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
export default class MyComponent extends Component{
  render(){
    return (
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/admin" component={Admin}></Route>
            <Redirect to="/login"/>
        </Switch>
    )
  }
}