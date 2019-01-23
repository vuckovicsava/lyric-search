import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
