import React from 'react';
import { Switch } from 'react-router-dom';
import _ from 'lodash';

import routes from './routes';
import Layout from './containers/Layout';
import PublicRoute from './components/RouteManagement/PublicRoute';
import PrivateRoute from './components/RouteManagement/PrivateRoute';

function App() {
  return (
    <Layout>
      <Switch>
        {
          _.map(
            routes,(route,idx) => {
              return (
                route.isProtected ?
                  <PrivateRoute key={idx} {...route} /> :
                  <PublicRoute key={idx} {...route} />
              );
            }
          )
        }
      </Switch>
    </Layout>
  );
}

export default App;
