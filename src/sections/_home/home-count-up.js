'use client';
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { varFade, MotionViewport } from 'src/components/animate';
import { paths } from 'src/routes/paths';

import { fShortenNumber } from 'src/utils/format-number';

import CountUp from 'src/components/count-up';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Subscribers', number: 1031 },
  { name: 'Industries and Sectors Involved', number: 30 },
  { name: 'Daily Active Users', number: 150 },
  { name: 'Monthly Read and Write Operations', number: 8000000 },
];

// ----------------------------------------------------------------------

export default function CountUpPageView() {
  return (
    <>
      <Box
        sx={{
          py: 5,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <Box
            sx={{
              mb: { xs: 8, md: 10 },
              textAlign: 'center',
            }}
          >
         
            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ my: 3 }}>
              Join the wave of businesses transforming their operations with our No-Code solutions.              
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography sx={{ color: 'text.secondary' }}>
              With over 1,000 users and counting across various sectors—travel and property agents, marketing agencies, freelancers, and e-commerce, to name a few—our platform is proven to adapt and thrive.
              </Typography>
            </m.div>
          </Box>
          <Stack spacing={5} direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="center">
  {SUMMARY.map((value) => (
    <Box key={value.name} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          component="span"
          sx={{ fontSize: 'h2.fontSize' }}
        >
          {value.number}
        </Box>
        <Box
          component="span"
          sx={{ fontSize: 'h3.fontSize', ml: 0.5 }}
        >
          +
        </Box>
      </Box>
      <Box
        sx={{ fontSize: 'subtitle2.fontSize', color: 'text.secondary', mt: 1 }}
      >
        {value.name}
      </Box>
    </Box>
  ))}
</Stack>
        </Container>
      </Box>

      {/* <Container sx={{ my: 10 }}>
        <Stack spacing={5} direction="row" alignItems="center">
          {SUMMARY.map((value) => (
            <div key={value.name}>
              <Typography variant="h2" gutterBottom>
                <CountUp
                  start={value.number / 5}
                  end={value.number}
                  formattingFn={(newValue) => fShortenNumber(newValue)}
                />

                <Typography variant="h3" component="span" sx={{ verticalAlign: 'top', ml: 0.5 }}>
                  +
                </Typography>
              </Typography>

              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {value.name}
              </Typography>
            </div>
          ))}
        </Stack>
      </Container> */}
    </>
  );
}
