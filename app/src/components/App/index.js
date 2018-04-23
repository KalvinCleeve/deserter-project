/* Npm import */
import React from 'react';

/* Local import */
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Game from 'src/containers/Game';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Code */
const App = () => (
  <Router>
    <div id="app">
      <Header />
      <Route path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Footer />
    </div>
  </Router>
);

/* Export default */
export default App;
