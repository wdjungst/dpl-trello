import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Boards from './components/Boards';
import Board from './components/Board';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Boards} />
      <Route exact path="/boards/:id" component={Board} />
    </Switch>
  </div>
)

export default App;
