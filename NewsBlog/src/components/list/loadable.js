import React from 'react';
import Loadable from 'react-loadable';
 
const LoadableComponent = Loadable({
  loader: () => import('./List'),
  loading: () => {
      return <h1>Loading...</h1>
  }
});
 
export default () => <LoadableComponent />