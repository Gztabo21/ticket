import React from 'react';
import * as ROUTER from './router';
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
import DashboardComponent from './components/dashboard';

function App() {
  return (
    <>
      <Switch>
        <Route  path={ROUTER.LANDING} component={DashboardComponent} />
      </Switch>
    </>
  );
}

export default App;
