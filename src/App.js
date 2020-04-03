import React from 'react';
import { Nav } from './components';
import { routes } from './components/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

import './sass/app.scss';

function App() {
  return (
    <div className="App">
      <div className="learnly-header">
        <div className="logo">
          <Image
            src='./static/images/learnly-logo.png'
            alt='learnly logo'
            tab-index="-1"
          />
        </div>
        <Router>
          <Nav routes={routes} />
          <Switch>
            {
              routes.map(route => {
                return route.name === 'Home' ?
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact
                  /> :
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                  />
              })
            }
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
