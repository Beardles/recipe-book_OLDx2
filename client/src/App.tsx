import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo-hooks';
import { CssBaseline, Grid, Hidden, MuiThemeProvider } from '@material-ui/core';
import { Sidebar } from './Components/Sidebar';
import { routes, IRouteConfig } from './routes';
import { theme } from './themes';
import { MainContentWrapper } from './app.styles';
import { client } from './apollo';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <Hidden xsDown>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Sidebar />
              </Grid>
              <Grid item xs={10}>
                <MainContentWrapper>
                  {routes.map((routeConfig: IRouteConfig, i: number) => (
                    <Route
                      key={i}
                      path={routeConfig.path}
                      exact={routeConfig.exact}
                      component={routeConfig.component}
                    />
                  ))}
                </MainContentWrapper>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smUp>Mobile Placeholder</Hidden>
        </MuiThemeProvider>
      </CssBaseline>
    </Router>
  </ApolloProvider>
);

export default App;
