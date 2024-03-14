import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/homepage" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
