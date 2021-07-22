import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Highlights, Schedule, Search, Statistics} from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/highlights" exact component={() => <Highlights />} />
          <Route path="/schedule" exact component={() => <Schedule />} />
          <Route path="/search" exact component={() => <Search />} />
          <Route path="/statistics" exact component={() => <Statistics />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;