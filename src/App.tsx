import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import pageCounter from "./components/pages/pageCounter";
import PageNotFound from "./components/pages/pageNotFound";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={pageCounter} exact />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
