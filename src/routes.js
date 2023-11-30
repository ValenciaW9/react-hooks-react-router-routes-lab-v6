import React from 'react';
import { Route } from 'found';

import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';

const routes = (
  <Route>
    <Route path="/" Component={Home} />
    <Route path="/directors" Component={Directors} />
    <Route path="/actors" Component={Actors} />
    <Route path="/movie/:id" Component={Movie} />
  </Route>
);

export default routes;