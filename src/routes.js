import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './containers/App'
import BooksPage from './containers/BooksPage'
import CategoriesPage from './containers/CategoriesPage'
import NotFoundPage from './containers/NotFoundPage'

export const routes = (
  <Route path='/' component={App}>
    <IndexRedirect to="categories" />
    <Route path='categories' component={CategoriesPage} />
    <Route path='books' component={BooksPage} >
      <Route path='/categories/:category_id/books' component={BooksPage} />
    </Route>
    <Route path='*' component={NotFoundPage} />
  </Route>
)