import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Create from "./pages/create";
import Search from './pages/search'
import ForgetPassword from "./services/auth/forgetPassword";
import Login from "./services/auth/login";
import List from './pages/list'
import NewList from './pages/newList'
import Detail from './pages/detail'
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
      </div>
      <div className="route-container">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/new/1" />} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot" component={ForgetPassword} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/top" component={List} />
          <Route exact path="/new/:page" component={NewList} />
          <Route exact path="/detail/:detailId" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
