import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books" component={Books} />


    </Switch>
  )
}