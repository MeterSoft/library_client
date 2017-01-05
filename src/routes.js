import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App';
import Home from './components/Home';
import Category from './components/categories/index';
import Book from './components/books/index';
import NotFound from './components/NotFound';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='home' component={Home} />
      <Route path='categories' component={Category} />
      <Route path='books' component={Book}>
        <Route path='/categories/:category_id/books' component={Book} />
      </Route>
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)