import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import pageCounter from "./components/pages/PageCounter/pageCounter";
import PageNotFound from "./components/pages/PageNotFound/pageNotFound";

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
