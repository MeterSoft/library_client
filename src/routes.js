import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App';
import Home from './components/Home';
import Video from './components/Video';
import Category from './components/categories/index';
import Audio from './components/Audio';
import NotFound from './components/NotFound';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/videos' component={Video} />
      <Route path='/categories' component={Category} />
      <Route path='/audio' component={Audio} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)