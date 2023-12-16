import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import Image from 'next/image';
import LogoGrey from 'src/assets/DJC-Logo-Grey.png';
import LogoWhite from 'src/assets/DJC-Logo-White.png';

// ----------------------------------------------------------------------

function Logo({ single = false, sx }) {
  const theme = useTheme();
  const themeMode = theme.palette.mode; // 'light' or 'dark'

  const MenuLogo = themeMode === "light" ? LogoGrey : LogoWhite

  const singleLogo = <Image src={MenuLogo} alt="Logo" layout="responsive" />;

  const fullLogo = <Image src={MenuLogo} alt="Logo" layout="responsive" />;

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 110 : 110,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  single: PropTypes.bool,
  sx: PropTypes.object,
};

export default memo(Logo);
