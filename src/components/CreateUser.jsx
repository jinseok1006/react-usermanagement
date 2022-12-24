import { Stack, TextField, Button, Card } from '@mui/material';
export default function CreateUser({ inputs, onChange, onCreate }) {
  const { username, email } = inputs;

  return (
    <Stack direction="row" spacing={2} mb={2}>
      <TextField
        size="small"
        label="username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <TextField
        size="small"
        label="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <Button variant="contained" onClick={onCreate}>
        CREATE
      </Button>
    </Stack>
  );
}
