import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import Home from './Home';

import Todo from './Todo';
import Blog from './Blog';
import IntersectionObserver from './IntersectionObserver';

const CodeSplitting = lazy(() => import(/* webpackChunkName: 'code-splitting'*/ './CodeSplitting'));
// const CodeSplittingIO = lazy(() => import(/* webpackChunkName: 'code-splitting'*/ './CodeSplittingIO'));

const CodeSplittingIO = loadable(() => import(/* webpackChunkName: "code-splitting-io" */ './CodeSplittingIO'));

import './App.css';

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/code-splitting" component={CodeSplitting} />
      <Route exact path="/code-splitting-io" component={CodeSplittingIO} />
      <Route exact path="/io" component={IntersectionObserver} />
    </Switch>
  </Suspense>
);

export default App;
