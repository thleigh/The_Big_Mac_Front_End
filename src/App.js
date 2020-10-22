import React from 'react';
import Welcome from './components/Welcome'
import About from './components/About'
import Contact from './components/Contact'
import Data from './components/Data'
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
        <Switch>
          <Route path="/" componenet={Welcome} />
          <Route path="/about" componenet={About} />
          <Route path="/contact" componenet={Contact} />
          <Route path="/data" componenet={Data} />
          
        </Switch>
    </div>
  );
}

export default App;
