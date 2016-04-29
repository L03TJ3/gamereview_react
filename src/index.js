import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import Categories from './Categories';
import Category from './Category';
import Games from './Games';
import Game from './Game';
import PageNotFound from './PageNotFound';
import Reviews from './Reviews';
import Review from './Review';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Categories} />
        <Route path="/categories/:categoryId" component={Category}>
          <IndexRoute component={Games} />
          <Route path="games/:gameId" component={Game} >
            <IndexRoute component={Reviews} />
            <Route path="reviews/:reviewId" component={Review} />
          </Route>
          </Route>
        <Route path="*" component={PageNotFound} />
      </Route>
  </Router>
), document.getElementById('root'));
