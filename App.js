import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';

process.setMaxListeners(0);

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));