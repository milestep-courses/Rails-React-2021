import { api } from './api';

export const fetchPosts = async () => {
  try {
    const response = await api.get('posts');
    return { error: false, data: response.data };
    // error boundary
    // return { error: false, data: response };
  } catch (error) {
    console.error('Ошибка:', error);
    return { error: false, data: null };
  }
};

export const fetchPost = async (id) => {
  try {
    // const response = await api.get('ada').then((res) => res.json());
    const response = await api.get(`posts/${id}`);
    return { error: false, data: response.data };
    // error boundary
    // return { error: false, data: response };
  } catch (error) {
    console.error('"эТО НАША Ошибка:', error);
    return { error: false, data: null };
  }
};
