import React from "react";
//import { sendUserAction } from "./requests/userActions";
import Header from "./components/Header";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Search from "./pages/Search";
import Topic from "./pages/Topic";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/topic/:id">
          <Topic />
        </Route>
        <Route path="/article/:id">
          <Article />
        </Route>
        <Route path="/search/:query">
          <Search />
        </Route>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
