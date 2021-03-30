import { useState, useEffect } from 'react';
import './assets/scss/main.scss';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainContent from './components/MainContent'

import TestUsername from './components/TestUsername'
//https://api.jikan.moe/v3/user/SnakeInMyBoots/mangalist
//https://api.jikan.moe/v3/user/SnakeInMyBoots/animelists

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/user/manga/:id">
          <TestUsername />
        </Route>
        <Route path="/user/anime/:id">
          <TestUsername />
        </Route>
      </Router>
    </div>
  );
}

export default App;
