import React from "react";
//import { sendUserAction } from "./requests/userActions";
import Header from "./components/Header";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/article/:id">
          <Article />
        </Route>
        <Route>
          <Route path="/search/:query">
            <Search />
          </Route>
        </Route>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
