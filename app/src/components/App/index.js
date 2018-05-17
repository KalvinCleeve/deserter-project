/* Npm import */
import React from 'react';

/* Local import */
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Error404 from 'src/components/Error404';
import Connect from 'src/containers/Connect';
import Contact from 'src/components/Contact';
import GTU from 'src/components/GTU';
import Profile from 'src/containers/Profile';
import Interface from 'src/components/Interface';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Code */
const App = () => (
  <Router>
    <div id="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Interface} />
        <Route path="/connect" component={Connect} />
        <Route path="/profile" component={Profile} />
        <Route path="/gtu" component={GTU} />
        <Route path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  </Router>
);


/* Export default */
export default App;
