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
        <Box key={list.title} sx={{ display: 'flex', alignItems: 'center' }}>
          <NavList data={list} />
        </Box>
      ))}
     
     
    </Stack>
  );
}

NavDesktop.propTypes = {
  data: PropTypes.array,
  sx: PropTypes.object,
};
