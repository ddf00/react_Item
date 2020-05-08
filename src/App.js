import React,{Component} from 'react'
import {Switch,Route,Redirect} from "react-router-dom";


import Login from "./containers/Login";
import Admin from "./containers/Admin";
export default class App extends Component{
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
