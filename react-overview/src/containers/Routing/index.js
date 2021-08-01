import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { HomePage } from '../../pages/Home';
import { PostsPage } from '../../pages/Posts';
import { PostPage } from '../../pages/Post';
import { UsersPage } from '../../pages/Users';
import { NotFoundPage } from '../../pages/NotFound';
import PropTypes from 'prop-types';

export const Routing = ({ user }) => {
  console.log('Routing component render');
  return (
    <Switch>
      <Route exact path={Routes.Posts} component={PostsPage} />
      <Route path={Routes.Post} component={PostPage} />
      <Route exact path={Routes.Users} component={UsersPage} />
      <Route exact path={Routes.BaseUrl} component={() => <HomePage user={user} />} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

Routing.propTypes = {
  user: PropTypes.string,
};
