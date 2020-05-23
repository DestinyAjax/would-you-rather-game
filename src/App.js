import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, LeaderboardPage, AddQuestionPage, LoginPage } from "./pages";
import { ProtectedRoute } from "./components/index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <ProtectedRoute exact path="/home" component={HomePage} />
        <ProtectedRoute path="/leaderboard" component={LeaderboardPage} />
        <ProtectedRoute path="/add" component={AddQuestionPage} />
      </Switch>
    </Router>
  );
}

export default App;