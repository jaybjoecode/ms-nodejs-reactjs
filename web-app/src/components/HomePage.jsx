import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Box, Container, Paper } from '@mui/material';
import StickyFooter from './StickyFooter';

export default function HomePage() {

  return (
    <>
      {/* <NavBar /> */}
      <ResponsiveAppBar />
      <Container fixed>
        <Paper elevation={3} sx={{ height: '90vh', margin: '8px' }} >
          <Outlet />
          </Paper>
          
      </Container>
    </>
  );
};
