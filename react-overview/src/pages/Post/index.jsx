import React from 'react';
import PageWrapper from '../../containers/PageWrapper';
import { Post } from './containers/Post';

export const PostPage = () => {
  console.log('Post PAGE component render');

  return (
    <PageWrapper>
      <Post />
    </PageWrapper>
  );
};
