import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/actors" component={Actors} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;