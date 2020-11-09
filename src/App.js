import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Resume from "./components/ResumePage";

import About from "./components/About";
import Footer from "./components/Footer";

import AllResumes from "./components/AllResumes";

class App extends Component {

  render() {

      // const HomeContainer = () => (
      //   <div classname="container">
      //     <Route exact path="/" component={Landing} />
      //     <Footer/>
      //   </div>
      // )

      const PageContainer = () => (
        <div className="container">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/all" component={AllResumes} />
          <Route exact path="/resume/:class/:resumeId" component={Resume} />
          <Footer />
        </div>
      )

      return (
        <Router>
          <Switch>
            <div className="App">
              {/* <Route exact path="/" component={HomeContainer} /> */}
              <Route component={PageContainer} />
            </div>
          </Switch>
        </Router>
      )




  }
}

export default App;
