import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';

const Body = () => ( 

  // The Main component renders routes provided
  <main style={{ flex: '1 0 auto', paddingTop: 100, paddingBottom: 60}}>
    <Switch>
      {/* Transactions route to JSON form Gen */}
      <Route path='/home/' component={Home} />
      {/* Home */}
      <Route path='*' component={Home}/>
    </Switch>
  </main>
);

export default Body;
