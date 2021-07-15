import React from 'react';
import PageWrapper from '../../containers/PageWrapper';
import { Posts } from './containers/Posts';

export const PostsPage = () => {
  console.log('Posts PAGE component render');

  return (
    <PageWrapper>
      <Posts />
    </PageWrapper>
  );
};
