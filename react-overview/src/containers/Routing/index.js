import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { HomePage } from '../../pages/Home';
import { PostsPage } from '../../pages/Posts';
import { UsersPage } from '../../pages/Users';
import { NotFoundPage } from '../../pages/NotFound';

export const Routing = () => {
  return (
    <Switch>
      <Route path={Routes.Posts} component={PostsPage} />
      <Route path={Routes.Users} component={UsersPage} />
      <Route exact path={Routes.BaseUrl} component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
