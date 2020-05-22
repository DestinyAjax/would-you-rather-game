import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, LeaderboardPage, AddQuestionPage, LoginPage } from "./pages"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route path="/leaderboard" component={LeaderboardPage} />
        <Route path="/add" component={AddQuestionPage} />
      </Switch>
    </Router>
  );
}

export default App;
