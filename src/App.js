import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

class App extends Component {
  render() {
    return (
      <Provider>
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
      </Provider>
    );
  }
}

export default App;
