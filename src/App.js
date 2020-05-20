import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Resume from "./components/ResumePage";

import About from "./components/About";
import Footer from "./components/Footer";

import AllResumes from "./components/AllResumes";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/all" component={AllResumes} />
          <Route exact path="/resume/:class/:resumeId" component={Resume} />
          <Footer/>
        </div>
     </Router>
    );
  }
}

export default App;
