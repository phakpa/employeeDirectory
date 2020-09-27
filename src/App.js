import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/employeedirectory" component={Home} />
      </div>
    </Router>
  );
}

export default App;
