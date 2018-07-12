import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home/';
import Registration from './containers/Registration';

import Center from './components/Center';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Center>
            <Route exact path="/" component={Home} />
            <Route path="/registration" component={Registration} />
          </Center>
        </div>
      </Router>
    );
  }
}

export default App;
