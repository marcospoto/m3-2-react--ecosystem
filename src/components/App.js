import React from "react";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = (props) => {
  console.log(props);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route eact path="/items/:itemId">
            <ItemDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
