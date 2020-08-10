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
          _.map(
            routes,(route,idx) => {
              const { component: Component, ...rest } = route;
              return (
                <Route
                  key={idx}
                  {...rest}
                  render={(props)=> {
                    return(
                      <Component {...rest}  {...props} />
                    );
                  }}
                />
              );
            }
          )
        }
      </Switch>
    </Layout>
  );
}

export default App;
