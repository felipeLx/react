import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Profile from './containers/Profile/Profile';
import Layout from './hoc/Layout/Layout';

// const Experience = React.lazy(() => {
//   return import('./containers/Experience/Experience');
// });

const Project = React.lazy(() => {
  return import('./containers/Project/Project');
});

const app = React.memo(props => {
  
  let routes = (
    <Switch>
      {/* <Route path="/experience" render={props => <Experience {...props} />} /> */}
      <Route path="/project" render={props => <Project {...props} />} />
      <Route path="/" exact component={Profile} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
});

export default withRouter(app);
