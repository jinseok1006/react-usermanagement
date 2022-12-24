import { Stack, Card } from '@mui/material';

import useInputs from '../hooks/useInputs';
import { useReducer, useRef } from 'react';

import UserInfoTemplate from './UserInfoTemplate';
import CreateUser from './CreateUser';
import UserList from './UserList';

function reducer(users, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return [...users, action.newUser];
    case 'DELETE_USER':
      return users.filter((user) => user.id !== action.id);
    case 'TOGGLE_ACTIVE':
      return users.map((user) =>
        user.id === action.id ? { ...user, active: !user.active } : user
      );
    default:
      return users;
  }
}

export default function UserInfoManagement() {
  const [inputs, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const [users, dispatch] = useReducer(reducer, [
    {
      id: 0,
      username: 'jinseok',
      email: 'jinseok@example.com',
      active: true,
    },
  ]);
  const nextId = useRef(1);

  const onCreate = () => {
    const { username, email } = inputs;
    if (username === '' || email === '') {
      return;
    }
    const newUser = {
      id: nextId.current,
      username,
      email,
      active: false,
    };
    dispatch({ type: 'CREATE_USER', newUser });
    nextId.current += 1;
    reset();
  };
  const onDelete = (id) => {
    dispatch({ type: 'DELETE_USER', id });
  };

  const onToggleActive = (id) => {
    dispatch({ type: 'TOGGLE_ACTIVE', id });
  };

  return (
    <UserInfoTemplate>
      <CreateUser inputs={inputs} onChange={onChange} onCreate={onCreate} />
      <UserList
        users={users}
        onDelete={onDelete}
        onToggleActive={onToggleActive}
      />
    </UserInfoTemplate>
  );
}
