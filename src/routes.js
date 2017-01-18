import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './containers/App'
import LoginPage from './containers/LoginPage'
import BooksPage from './containers/BooksPage'
import CategoriesPage from './containers/CategoriesPage'
import NotFoundPage from './containers/NotFoundPage'
import Authenticate from './api/requireAuth'
import ChartsPage from './containers/ChartsPage'

export const routes = (
  <Route path='/' component={App}>
    <IndexRedirect to="charts" />
    <Route path='login' component={LoginPage} />
    <Route component={Authenticate}>
      <Route path='charts' component={ChartsPage} />
      <Route path='categories' component={CategoriesPage} />
      <Route path='books' component={BooksPage} >
        <Route path='/categories/:category_id/books' component={BooksPage} />
      </Route>
    </Route>
    <Route path='*' component={NotFoundPage} />
  </Route>
)