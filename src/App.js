import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/Home/Home';
import OtherPage from './pages/OtherPage/OtherPage';





class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/friends" exact component={OtherPage} />
          <Route path="/messages" exact component={OtherPage} />
          <Route path="/bells" exact component={OtherPage} />
          <Route path="/search" exact component={OtherPage} />
          <Route path="/menu" exact component={OtherPage} />
          <Route path="/" exact component={HomePage} />
          <Route render={() => <h1>Nothing found</h1>} />
        </Switch>
      </Layout>

    );
  }
}


// <Redirect from to/> || this.state.Auth ? <Route></Route>: null || history.push(newRoute)

export default App;