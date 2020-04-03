import React from 'react';
import { Nav } from './components';
import { routes } from './components/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
