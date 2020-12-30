import React, { Component, useEffect } from 'react';
import './App.css';
import {Button} from '@chakra-ui/react'
import { Route, Switch } from 'react-router-dom';
import PostEdit from './pages/PostEdit';
import PostList from './pages/PostList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div className="App" data-test="component-app">
        <Switch>
          <Route exact path="/">Posts</Route>
          <Route exact path="/posts"><PostList/></Route>
          <Route path="/posts/new"><PostEdit/></Route>
          <Route path="/posts/:postId">Posts Detail</Route>
        </Switch>
      </div>
    );
  }
}

export default App;
