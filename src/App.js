import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage, LeaderboardPage, AddPage } from "./pages"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/leaderboard" component={LeaderboardPage} />
        <Route path="/add" component={AddPage} />
      </Switch>
    </Router>
  );
}

export default App;
