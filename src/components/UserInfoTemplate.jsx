import { Stack, Card, Container } from '@mui/material';

export default function UserInfoTemplate({ children }) {
  return (
    <Stack
      component={Card}
      variant="outlined"
      p={2}
      sx={{ display: 'inline-block' }}
    >
      {children}
    </Stack>
  );
}
