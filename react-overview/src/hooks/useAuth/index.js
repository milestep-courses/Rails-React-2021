import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../services/auth';
import { getUser, getUserSuccess, getUserFail } from '../../store/actionCreators/user';

export const useAuth = () => {
  const dispatch = useDispatch();

  const onGetCurrentUser = async () => {
    dispatch(getUser());

    const { error, data } = await getCurrentUser();
    console.log(data);

    if (!error) dispatch(getUserSuccess(data));
    if (error) dispatch(getUserFail());
  };

  useEffect(() => {
    console.log('UseAuth');
    onGetCurrentUser();
  }, []);
};
