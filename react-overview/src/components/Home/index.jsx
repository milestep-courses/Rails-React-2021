import React, { useEffect, useState } from 'react';
import styles from './styles.module.sass';

export const Home = () => {
  const [posts, setPosts] = useState([]);

  console.log('Home component render');

  const onFetchPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  };

  console.log(posts);
  useEffect(() => {
    onFetchPosts();
  }, []);
  return (
    <div className={styles.home}>
      Home component
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
