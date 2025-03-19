import React from 'react';
import UserListItem from '../UserListItem/UserListItem';
import { useSelector } from 'react-redux';

const UsersList = () => {
  const { data } = useSelector((state) => state.usersData);

  const pad = {
    padding: '16px',
    color: 'black',
  };

  return (
    <ul
      style={{
        marginTop: '15px',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        borderRadius: '10px',
        border: '1px solid #edf2f9',
      }}
    >
      <li
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 0.5fr',
          gridTemplateRows: '50px',
          alignItems: 'center',
          fontWeight: '700',
        }}
      >
        <div style={pad}>User info</div>
        <div style={pad}>user Email</div>
        <div style={pad}>user Phone</div>
        <div style={pad}>user Website</div>
      </li>
      {data.length > 0
        ? data.map((user) => {
            return <UserListItem key={user.id} user={user} pad={pad} />;
          })
        : null}
    </ul>
  );
};

export default UsersList;
