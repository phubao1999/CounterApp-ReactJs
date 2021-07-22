import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import pageCounter from "./components/pages/PageCounter/pageCounter";
import PageNotFound from "./components/pages/PageNotFound/pageNotFound";
import PageQuiz from "./components/pages/PageQuiz/pageQuiz";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={pageCounter} exact />
            <Route path="/quiz" component={PageQuiz} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
