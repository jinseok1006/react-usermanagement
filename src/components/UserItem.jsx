import { Typography, Stack, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function UserItem({ user, onDelete, onToggleActive }) {
  const { id, username, email, active } = user;

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography
        component={Button}
        variant=""
        sx={{
          color: active ? 'green' : 'black',
          flex: '0 100px',
        }}
        onClick={() => onToggleActive(id)}
      >
        {username}
      </Typography>
      <Typography sx={{ flex: '1' }}>({email})</Typography>
      <Button
        size="small"
        variant="outlined"
        startIcon={<DeleteIcon />}
        color="error"
        onClick={() => onDelete(id)}
      >
        DELETE
      </Button>
    </Stack>
  );
}
