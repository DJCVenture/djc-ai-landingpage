import { useRef } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';

import { bgGradient } from 'src/theme/css';
import { HEADER } from 'src/layouts/config-layout';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();

  const containerRef = useRef(null);

  const mdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
        position: 'relative',
        height: { md: `calc(100vh - ${HEADER.H_DESKTOP}px)` },
      }}
    >
      <Container sx={{ height: 1 }}>
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid xs={12} md={5}>
            <Stack
              spacing={5}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h1">
                Empower Your <br /> Business Today with
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {` DJC`}
                </Box>
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                With powerful AI capabilities, DJC System empowers your businesses to harness the
                full potential of automation and data analytics, transforming the way you connect
                with customers and accelerate your success.
              </Typography>
              <Grid xs={12} md={7}>
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/home_hero.png"
              sx={{
                width: 'auto', // Adjusts width automatically based on the height or specific value
                height: 'auto', // Adjusts height automatically based on the width or specific value
                maxWidth: '120%', // Increase size by setting maxWidth greater than 100%
                maxHeight: '120%', // Increase size by setting maxHeight greater than 100%
                transform: 'scale(1.2)', // Alternatively, use scale to enlarge the image by 20%
                display: { xs: 'block', sm: 'none' }, // Display nothing on xs screens, and block on sm and above
              }}
            />
          </Grid>
              <Button
                color="inherit"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="carbon:launch" />}
                target="_blank"
                rel="noopener"
                href={paths.figmaPreview}
              >
                See Demo
              </Button>

              {/* <Stack spacing={3}>
                <Typography variant="overline" sx={{ opacity: 0.48 }}>
                  AVAILABLE FOR
                </Typography>
                <Stack direction="row" spacing={2.5}>
                  {['js', 'ts', 'figma', 'nextjs', 'vite'].map((icon) => (
                    <Box
                      key={icon}
                      component="img"
                      alt={icon}
                      src={`/assets/icons/platforms/ic_${icon}.svg`}
                      sx={{ width: 24, height: 24 }}
                    />
                  ))}
                </Stack>
              </Stack> */}
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/home_hero.png"
              sx={{
                width: 'auto', // Adjusts width automatically based on the height or specific value
                height: 'auto', // Adjusts height automatically based on the width or specific value
                maxWidth: '120%', // Increase size by setting maxWidth greater than 100%
                maxHeight: '120%', // Increase size by setting maxHeight greater than 100%
                transform: 'scale(1.2)', // Alternatively, use scale to enlarge the image by 20%
                display: { xs: 'none', sm: 'block' }, // Display nothing on xs screens, and block on sm and above
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* {mdUp && (
        <Box
          sx={{
            maxWidth: 1280,
            position: 'absolute',
            bottom: { md: '20%', lg: 40 },
            right: { md: -110, xl: 0 },
            width: { md: `calc(100% - ${offsetLeft}px)` },
          }}
        >
          <Image
            visibleByDefault
            disabledEffect
            alt="home hero"
            src="/assets/images/home/home_hero.png"
          />
        </Box>
      )} */}
    </Box>
  );
}
