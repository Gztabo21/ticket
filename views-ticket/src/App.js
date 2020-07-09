import React from 'react';
import * as ROUTER from './router';
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import ComponentInitial from './components/dashboard';

function App() {

  return (
    <>
      <Switch>
        <Route  path={ROUTER.LANDING} component={ComponentInitial} />
      </Switch>
    </>
  );
}

export default App;
