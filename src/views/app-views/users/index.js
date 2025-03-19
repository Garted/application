import React, { useEffect } from 'react';
import UsersList from '../components/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData } from 'redux/sagas/UsersData';
import { Link } from 'react-router-dom';

const Users = () => {
  const users = useSelector((state) => state.usersData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsersData());
    }
  }, [users.length, dispatch]);

  return (
    <div>
      <div>
        <span
          style={{
            fontWeight: 700,
            fontSize: '18px',
            color: 'black',
          }}
        >
          Clients
        </span>
        <span>
          <Link
            style={{
              margin: '0 5px',
              color: 'grey',
            }}
            to={'home'}
          >
            Home
          </Link>
        </span>
        /
        <span>
          <Link
            style={{
              margin: '0 5px',
              color: 'grey',
            }}
            to={'users'}
          >
            Users list
          </Link>
        </span>
      </div>
      <UsersList />
    </div>
  );
};

export default Users;
