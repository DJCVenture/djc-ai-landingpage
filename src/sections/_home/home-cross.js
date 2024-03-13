import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/cross.png';
import sample4 from '../../../public/assets/funnel2.png';
import { varFade, MotionViewport } from 'src/components/animate';
import { useEffect } from 'react';

// ----------------------------------------------------------------------
export default async function HomeLead({ plans }) {
  
  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Box
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          EMBRACE FLEXIBILITY: YOUR BUSINESS, ACCESSIBLE ANYWHERE, ANYTIME
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          Discover unparalleled convenience with our cross-platform web app, designed for seamless use on both Apple and Android devices. <br/>No installations, no hassle—just pure efficiency at your fingertips. 
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          Our web app adapts to your lifestyle, whether you prefer managing tasks from the comfort of your desktop or need the flexibility to handle your business mobile on the move. Experience the freedom to monitor and manage your operations anytime, anywhere, ensuring your business thrives without bounds. With automatic updates and new features that seamlessly integrate into the web app, you're always ahead of the curve, free from the worry of manual updates. Step into a world where your business moves with you, constantly connected and perpetually progressive. Our solution is not just a tool; it's your business companion, empowering you to achieve more with less, wherever you are.
          </Typography>
        </m.div>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography sx={{ color: 'text.secondary' }} variant="caption">
          *Sample system UI screen shot
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'], // Stack vertically on small screens, side by side on larger screens
          justifyContent: 'center',
          alignItems: 'center', // Center items on the cross-axis on large screens
          gap: '80px', // Adds a little space between images
          mt: '20px',
          '@media (max-width: 768px)': {
            // Adjusts for screens smaller than 768px
            flexDirection: 'column',
            gap: '40px', // Less gap when stacked vertically
            alignItems: 'flex-start', // Align items at the start of the container (top) on small screens
          },
        }}
      >
        <Image
          src={sample3}
          alt=""
          
          width={900} // Adjusted width for side-by-side layout
          height={600} // Adjusted height for consistency
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }}
        />

      
      </Box>
    
    </Container>
  );
}

HomeLead.propTypes = {
  plans: PropTypes.array,
};
