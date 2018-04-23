/* Npm import */
import React from 'react';

/* Local import */
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Error404 from 'src/components/Error404';
import Game from 'src/containers/Game';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Code */
const App = () => (
  <Router>
    <div id="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/cgu" component={cgu} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

/* Export default */
export default App;
