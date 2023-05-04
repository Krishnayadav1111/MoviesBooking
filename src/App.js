import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowsList from "./components/ShowsList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ShowsList} />
      </Switch>
    </Router>
  );
}
export default App;
