import React from 'react';
import './App.scss';
import {Switch, Route, NavLink} from 'react-router-dom';
import Home from './components/pages/home';
import Episode from './components/pages/episode';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
        <NavLink className="link" to=''>The Powerpuff Girls</NavLink>
        </div>
      </header>

      <Switch>
        <Route path="/episode/:showId/:episodeId" component={Episode} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
