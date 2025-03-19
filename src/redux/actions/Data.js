import { UPDATE_USER, REMOVE_USER } from 'redux/constants/UsersData';

export const updateUser = (data) => {
  return {
    type: UPDATE_USER,
    payload: data,
  };
};

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id,
  };
};
