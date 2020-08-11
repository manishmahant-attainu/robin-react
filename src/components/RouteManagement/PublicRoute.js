import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { WEB_URL } from '../../config';

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuth = !!localStorage.getItem('access_token');
  return (
    <Route
      {...rest}
      render={(routeProps)=> {
        return(
          isAuth ?
            <Redirect to={WEB_URL.DASHBOARD} /> :
            <Component {...rest}  {...routeProps} />
        );
      }}
    />
  );
};

export default PublicRoute;
