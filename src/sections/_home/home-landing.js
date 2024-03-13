import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/funnel3.png';
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
          BUILD & LAUNCH WITH EASE: DRAG-AND-DROP YOUR WAY TO SUCCESS
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          Empower your online presence with our intuitive Form Creation and Landing Page Builder, <br/>designed for seamless, no-code development. 
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          Tailored for those who value efficiency and simplicity, our web app revolutionizes the creation process. Forget about the technical learning curve – with our drag-and-drop interface, your projects come to life in minutes, fully optimized for both mobile and desktop views. Dive straight into building and launching your vision, saving invaluable time. Whether you're crafting engaging forms or compelling landing pages, our tool ensures a hassle-free journey from concept to completion, enabling you to focus on what truly matters: your message and your audience. Start creating, start succeeding – immediately.
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
