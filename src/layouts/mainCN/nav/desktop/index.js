import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import NavList from './nav-list';
import Iconify from 'src/components/iconify';
import Link from 'next/link';
import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx, ...other }) {
  const settings = useSettingsContext();
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={5}
      sx={{
        height: 1,
        ...sx,
        display: 'flex', // Ensure the stack itself is a flex container
        alignItems: 'center', // Vertically center everything within the stack
        justifyContent: 'center', // Center items horizontally if needed
      }}
      {...other}
    >
      {data.map((list) => (
        <NavList key={list.title} data={list} />
      ))}
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link
          href="https://www.facebook.com/djc.flow"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Iconify width={28} icon="ic:baseline-facebook" 
          style={{
              color: settings.themeMode === 'dark' ? 'yellow' : 'red', // Make asleep-filled icon yellow
              }} />
        </Link>
      </Box>
    </Stack>
  );
}

NavDesktop.propTypes = {
  data: PropTypes.array,
  sx: PropTypes.object,
};
