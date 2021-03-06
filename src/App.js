import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import "./App.css";
import LoginForm from "./Login/components/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/LoginForm" component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
