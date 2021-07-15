import React, { useEffect, useState } from 'react';
import styles from './styles.module.sass';
import PageWrapper from '../../containers/PageWrapper';
import { fetchPosts } from '../../services/posts';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  console.log('Posts component render');

  const onfetchPosts = async () => {
    const { error, data } = await fetchPosts();
    console.log(error, data);
    setPosts(data);
  };

  useEffect(() => {
    onfetchPosts();
  }, []);

  return (
    <PageWrapper>
      <div className={styles.posts}>
        Posts component
        <ul>
          {posts.slice(0, 10).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
};
