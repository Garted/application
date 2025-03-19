import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/UserProfile/UserProfile';
const User = () => {
  const { id } = useParams();

  //инпуты для изменения данных, кнопку для сохранения и отправки на сервер

  return (
    <div>
      <h3>Edit User</h3>
      <UserProfile id={id} />
    </div>
  );
};

export default User;
