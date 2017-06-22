import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Boards from './components/Boards';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Boards} />
    </Switch>
  </div>
)

export default App;
