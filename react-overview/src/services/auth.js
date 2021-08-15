import { api } from './api';

export const getCurrentUser = async () => {
  try {
    const response = await api.get('users/1');
    return { error: false, data: response.data };
  } catch (error) {
    return { error: false, data: null };
  }
};
