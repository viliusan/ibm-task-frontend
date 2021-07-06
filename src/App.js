import React from "react";
import { sendUserAction } from "./requests/userActions";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>
      <h1>Press button to send a request to back-end</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => sendUserAction("hello")}
      >
        Send
      </button>
    </div>
  );
}

export default App;
