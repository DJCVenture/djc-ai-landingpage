'use client';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import BaseOptions from 'src/components/settings/drawer/base-options';
import { paths } from 'src/routes/paths';
import Typography from '@mui/material/Typography';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';

import HeaderShadow from '../common/header-shadow';
import Searchbar from '../common/searchbar';
import SettingsButton from '../common/settings-button';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import NavDesktop from './nav/desktop';
import NavMobile from './nav/mobile';
import { useSettingsContext } from 'src/components/settings';
import Iconify from 'src/components/iconify';
import Link from 'next/link';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');
  const settings = useSettingsContext();
  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: 'relative' }}>
        <Logo />
      </Box>

      <>
        <Stack
          flexGrow={1}
          alignItems="center"
          sx={{
            height: 1,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {/* <NavDesktop data={navConfig} /> */}
        </Stack>

        <Box sx={{ flexGrow: { xs: 1, md: 'unset' } }} />
      </>

      <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
        <Stack spacing={1} direction="row" alignItems="center">
          {/* <Searchbar /> */}
          <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box component={Link} href="/" sx={{ textDecoration: 'none' }}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: 'none',
                  color: 'text.primary', // Use your theme's primary text color or any specific color
                  '&:hover, &:visited, &:link, &:active': {
                    textDecoration: 'none',
                  },
                }}
              >
                ENG
              </Typography>
            </Box>
            <Typography variant="button" sx={{ mx: 1 }}>
               
            </Typography>
            <Box component={Link} href="/cn" sx={{ textDecoration: 'none' }}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: 'none',
                  color: 'text.primary', // Consistently use the primary text color
                  '&:hover, &:visited, &:link, &:active': {
                    textDecoration: 'none',
                  },
                }}
              >
                华语
              </Typography>
            </Box>
            <Typography variant="button" sx={{ mx: 1 }}>
               
            </Typography>
          </Box>
          <Box
            component={m.div}
            animate={{
              rotate: [0, settings.open ? 0 : 360],
            }}
            transition={{
              duration: 12,
              ease: 'linear',
              repeat: Infinity,
            }}
            sx={{
              '&:hover': {
                cursor: 'pointer', // Change cursor to indicate clickable area
              },
            }}
          >
            <Iconify
              width={28}
              icon={settings.themeMode === 'dark' ? 'carbon:asleep-filled' : 'ph:sun-bold'}
              onClick={() =>
                settings.onUpdate('themeMode', settings.themeMode === 'dark' ? 'light' : 'dark')
              }
              style={{
                color: settings.themeMode === 'dark' ? 'yellow' : 'red', // Make asleep-filled icon yellow
              }}
            />
          </Box>
          {/* <SettingsButton /> */}
        </Stack>

        <Button
          variant="contained"
          color="inherit"
          href="https://djcsystem.com/sign-up"
          target="_blank"
          rel="noopener"
          sx={{
            display: { xs: 'none', md: 'inline-flex' },
          }}
        >
          Sign Up
        </Button>
      </Stack>

      {!mdUp && <NavMobile data={navConfig} />}
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
