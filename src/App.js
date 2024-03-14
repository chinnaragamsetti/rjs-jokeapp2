import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "./components/Login";
import Homepage from "./components/Homepage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? (
              <Redirect to="/homepage" />
            ) : (
              <Login onLogin={handleLogin} />
            )}
          </Route>
          <Route path="/homepage">
            {isLoggedIn ? <Homepage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
