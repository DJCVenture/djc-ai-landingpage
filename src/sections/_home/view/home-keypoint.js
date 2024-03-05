
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeKeyPoint() {

  return (
    <>
      <Container sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 10 } }}>
        <Box sx={{ flexGrow: 1, padding: 2, marginTop: 5 }}>
          {' '}
          {/* Adjust marginTop as needed */}
          <Grid container spacing={2} justifyContent="center">
            {[
              {
                icon: 'mdi:checkbox-marked-outline',
                text: 'No Technical Expertise Required',
              },
              {
                icon: 'mdi:checkbox-marked-outline',
                text: 'Perfect for Any Business Model',
              },
              {
                icon: 'mdi:checkbox-marked-outline',
                text: 'Expertly Market, Sell, and Fulfill Like a Pro',
              },
            ].map((item, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Iconify icon={item.icon} width={32} style={{ color: '#c3015a' }} />
                <Typography variant="body1" textAlign="center">
                  {item.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
