import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';
import CreatePage from './CreatePage.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="resources-list">
          <header>
            <h1>safeSRC</h1>
            <h3 className="nav">
              <Link to="/">Home</Link>
            </h3>
            <h3 className="nav">
              <Link to="/create">Add a resource</Link>
            </h3>
          </header>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <ListPage {...routerProps} />}
            />
            <Route
              path="/resources/:id"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
            <Route
              path="/create"
              exact
              render={(routerProps) => <CreatePage {...routerProps} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
