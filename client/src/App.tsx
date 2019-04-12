import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Hidden } from '@material-ui/core';
import { Sidebar } from './Components/Sidebar';
import { routes, IRouteConfig } from './routes';

const App: React.FC = () => (
  <Router>
    <Hidden xsDown>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          {routes.map((routeConfig: IRouteConfig, i: number) => (
            <Route
              key={i}
              path={routeConfig.path}
              exact={routeConfig.exact}
              component={routeConfig.component}
            />
          ))}
        </Grid>
      </Grid>
    </Hidden>
    <Hidden smUp>Mobile Placeholder</Hidden>
  </Router>
);

export default App;
