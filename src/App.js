import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Search from "./pages/Search";
import Topic from "./pages/Topic";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/article/:id">
        <Article />
      </Route>
      <Route path="/topic/:id">
        <Topic />
      </Route>
      <Route path="/search/:query">
        <Search />
      </Route>
      <Footer />
    </div>
  </Router>
);

export default App;
