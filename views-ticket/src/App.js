import React from 'react';
import * as ROUTER from './router';
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import './App.css';
import InitialComponent from './components/dashboard';
import LoginComponent from './components/login';
import RegisterComponent from'./components/register';

function App() {

  return (
    <>
      <Switch>
        <Route exact path={ROUTER.LANDING} component={LoginComponent} />
        <Route  path={ROUTER.MAIN} component={InitialComponent} />
        <Route  path={ROUTER.SIGNIN} component={LoginComponent} />
        <Route  path={ROUTER.REGISTER}  component={RegisterComponent} />
      </Switch>
    </>
  );
}

export default App;
