import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/whatsapp.png';
import sample4 from '../../../public/assets/chat2.png';
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
          AMPLIFY YOUR MESSAGES WITH OUR AUTOMATED MESSAGE BROADCAST SYSTEM
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          Designed for businesses aiming to transcend traditional boundaries, our platform enables you to reach multiple recipients in a single click—without the need for saving numbers or navigating through tedious processes. 
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          Set your messages on your terms with customizable delay options, ensuring your updates, promotions, or announcements land at the perfect moment. Gain insightful oversight with real-time tracking of message statuses, identifying successful deliveries and addressing any hitches promptly. Delegate management roles within your team for a streamlined workflow, liberating your operations from the constraints of manual messaging. Transform how you connect with customers and team members alike, saving time and enhancing engagement with every message sent. Our system is not just a tool; it's your partner in revolutionizing communication, making every word count.
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
