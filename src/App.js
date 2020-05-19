import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";
import Resume from "./components/resume/ResumePage";
import About from "./components/About";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Footer />
        </div>
     </Router>
    );
  }
}

export default App;
