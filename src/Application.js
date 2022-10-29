import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { About } from './pages/About';
import { Home } from './pages/Home';

// eslint-disable-next-line import/prefer-default-export
export function Application() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <nav>
        <Link data-testid="link-home" to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
