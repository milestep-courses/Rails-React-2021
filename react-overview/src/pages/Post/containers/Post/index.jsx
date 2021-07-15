import React, { useEffect, useState } from 'react';
import styles from './styles.module.sass';
import { fetchPost } from '../../../../services/posts';
import { useParams } from 'react-router-dom';

export const Post = () => {
  const [post, setPost] = useState([]);
  const search = useParams();

  console.log('Post component render');

  const onfetchPost = async () => {
    const { error, data } = await fetchPost(search.id);
    if (!error) setPost(data);
    console.log(post);
  };

  useEffect(() => {
    onfetchPost();
  }, []);

  return <div className={styles.posts}>Post component</div>;
};
