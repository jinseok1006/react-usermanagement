import { Stack, Typography } from '@mui/material';

import UserItem from './UserItem';

export default function UserList({ users, onDelete, onToggleActive }) {
  return (
    <Stack spacing={1}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          onDelete={onDelete}
          onToggleActive={onToggleActive}
        />
      ))}
    </Stack>
  );
}
