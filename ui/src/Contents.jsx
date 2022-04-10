import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import productList from './productList.jsx';
import productEdit from './productEdit.jsx';
import productImg from './productImg.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

const Contents = () => (
  <Switch>
    <Redirect exact from="/" to="/products" />
    <Route path="/products" component={productList} />
    <Route path="/edit/:id" component={productEdit} />
    <Route path="/img/:id" component={productImg} />
    <Route component={NotFound} />
  </Switch>
);

export default Contents;