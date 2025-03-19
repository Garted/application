import React from 'react';
import { Link } from 'react-router-dom';
import { removeUser } from 'redux/actions/Data';
import { useDispatch } from 'react-redux';
const UserListItem = ({ user, pad }) => {
  const dispatch = useDispatch();
  const { name, username, email, phone, website, id } = user;

  const btnStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    display: 'flex',
    border: 'none',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  return (
    <Link
      to={`user/${id}`}
      style={{
        color: 'black',
      }}
    >
      <li
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 0.5fr',
          alignItems: 'center',
          borderTop: '1px solid #edf2f9',
        }}
      >
        <div
          style={{
            ...pad,
            display: 'flex',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'red',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'yellow',
            }}
          >
            Avatar
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '4px',
            }}
          >
            <div>{name}</div>
            <div
              style={{
                color: 'grey',
              }}
            >
              {username}
            </div>
          </div>
        </div>

        <div style={pad}>{email}</div>
        <div style={pad}>{phone}</div>
        <div style={pad}>{website}</div>
        <div
          style={{
            display: 'flex',
            gap: 10,
          }}
        >
          <button style={{ ...btnStyle, backgroundColor: 'blue' }}>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              dataIcon="eye"
              width="1em"
              height="1em"
              fill="white"
              ariaHidden="true"
            >
              <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
            </svg>
          </button>

          <button
            style={{ ...btnStyle, border: '1px solid red' }}
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeUser(id));
            }}
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              dataIcon="delete"
              width="1em"
              height="1em"
              fill="red"
              ariaHidden="true"
            >
              <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
            </svg>
          </button>
        </div>
      </li>
    </Link>
  );
};

export default UserListItem;
