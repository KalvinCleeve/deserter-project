/* Npm import */
import React from 'react';

/* Local import */
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Error404 from 'src/components/Error404';
import Connect from 'src/containers/Connect';
import Sign from 'src/components/Sign';
import Profil from 'src/components/Profil';
import Quiz from 'src/components/Quiz';
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
        <Route path="/sign" component={Sign} />
        <Route path="/profil" component={Profil} />
        {/* <Route path="/cgu" component={cgu} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
        <Route component={Error404} />
      </Switch>
      <Quiz />
      <Footer />
    </div>
  </Router>
);

/* Export default */
export default App;
