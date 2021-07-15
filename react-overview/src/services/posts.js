import { api } from './api';

export const fetchPosts = async () => {
  try {
    // const response = await api.get('ada').then((res) => res.json());
    const response = await api.get('posts');
    return { error: false, data: response.data };
  } catch (error) {
    console.error('Ошибка:', error);
    return { error: false, data: null };
  }
};
