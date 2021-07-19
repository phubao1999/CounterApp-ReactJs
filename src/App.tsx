import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarHOC from "./components/HOC/navbarHOC";
import PageCounterHOC from "./components/HOC/pageCounterHOC";
import PageNotFound from "./components/pages/pageNotFound";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavbarHOC />
          <Switch>
            <Route path="/" component={PageCounterHOC} exact />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
