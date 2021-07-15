import { Component } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CounterTemplate from "./components/pages/counterTemplate";
import PageNotFound from "./components/pages/pageNotFound";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={CounterTemplate} exact />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
