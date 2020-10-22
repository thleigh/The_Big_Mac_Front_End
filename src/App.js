import React from 'react';
import Welcome from './components/Welcome'
import About from './components/About'
import Contact from './components/Contact'
import Data from './components/Data'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/Welcome" component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/data" component={Data} />
          <Route path="*" component={Welcome} />

        </Switch>
      </div>
    </div>
  );
}

export default App;
