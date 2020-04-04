import React from 'react';
import { Nav } from './components';
import { routes } from './components/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { Container, Row } from 'react-bootstrap';

import './sass/app.scss';

function App() {
  return (
    <Router>
      <Container>
        <div className="App">
          <Row>
            <header>
              <div className="logo">
                <Image
                  src='./static/images/learnly-logo.png'
                  alt='learnly logo'
                  tab-index="-1"
                />
              </div>
              <Nav routes={routes} />
            </header>
          </Row>
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
        </div>
      </Container>
    </Router>
  );
}

export default App;
