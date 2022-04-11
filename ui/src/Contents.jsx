import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import ProductList from './ProductList.jsx';
import ProductEdit from './ProductEdit.jsx';
import ProductImg from './ProductImg.jsx';

const NotFound = () => <h1>Page Not Found</h1>;
const NavBar = () => (
  <nav className="nav-bar">
    <NavLink exact to="/">Home</NavLink>
  </nav>
);
const Contents = () => (
  <div>
    <NavBar />
    <Switch>
      <Redirect exact from="/" to="/products" />
      <Route path="/products" component={ProductList} />
      <Route path="/edit/:product_id" component={ProductEdit} />
      <Route path="/img/:product_id" component={ProductImg} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Contents;