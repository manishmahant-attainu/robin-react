import React from 'react';
import { Switch, Route } from 'react-router-dom';
import _ from 'lodash';

import routes from './routes';
import Layout from './containers/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        {
          _.map(routes,(route,idx) => {
            return (
              <Route key={idx} {...route} />
            );
          })
        }
      </Switch>
    </Layout>
  );
}

export default App;
