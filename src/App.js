import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Sample from "./containers/sample/sample";
import Spinner from "./containers/spinner/spinner";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Spinner />
          <Switch>
            <Route path='/home' component={Sample} />
            <Route path="/">
              <Redirect to='/home' />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
