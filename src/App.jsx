import {
  AppBar,
  Box,
  CssBaseline,
  GlobalStyles,
  Toolbar,
  Typography,
  Stack,
  Card,
  Link,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import UserInfoManagement from './components/UserInfoManagement';

export default function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: {
            height: '100%',
          },
          '#root': {
            height: 'inherit',
          },
          body: { height: 'inherit', backgroundColor: '#f8f9fa' },
        }}
      />
      <Stack sx={{ height: 'inherit' }}>
        <Header />
        <Body />
        <Footer />
      </Stack>
    </>
  );
}

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">user info mangement</Typography>
      </Toolbar>
    </AppBar>
  );
}

function Body() {
  return (
    <Stack pt={2} sx={{ flex: '1' }} alignItems="center">
      <UserInfoManagement />
    </Stack>
  );
}

function Footer() {
  return (
    <Stack
      component={Card}
      variant="outlined"
      sx={{ flex: '0 0 70px' }}
      justifyContent="center"
    >
      <Typography textAlign="center" variant="body2">
        powered by{' '}
        <Link href="https://vitejs-kr.github.io/" target="_blank">
          vite
          <LaunchIcon fontSize="12px" />
        </Link>
      </Typography>
      <Typography textAlign="center" variant="body2">
        mobile page is not supported.
      </Typography>
    </Stack>
  );
}
