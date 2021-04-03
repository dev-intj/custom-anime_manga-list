import { useState, useEffect } from 'react';
import './assets/scss/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AnimeList from './pages/AnimeList';
import MangaList from './pages/MangaList';
import Home from './pages/Home';

//https://api.jikan.moe/v3/user/SnakeInMyBoots/mangalist
//https://api.jikan.moe/v3/user/SnakeInMyBoots/animelists

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/Home">
          <Home />
        </Route>
        <Route path="/:id/manga/">
          <MangaList/>
        </Route>
        <Route path="/:id/anime/">
        <AnimeList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
