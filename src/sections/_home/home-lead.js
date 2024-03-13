import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/lead.png';
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
          STREAMLINE YOUR LEAD ENGAGEMENT WITH OUR AUTOMATED MANAGEMENT TOOLS
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
Transform your approach to customer acquisition with our Automated Lead Management System, <br/>perfectly suited for enterprises of any scale. 
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          Whether you're embarking on a journey of digital transformation or aiming to refine your current strategies, our system provides a direct pipeline from your Facebook page to your dashboard, ensuring every potential lead is captured without manual effort. Enable your team to elevate engagement through direct calls, scheduled meetings, precise task assignments, and real-time progress tracking, all designed to nurture and advance every lead with maximum efficiency. Our platform is the key to unlocking seamless growth and innovation, making the path from lead to loyal customer smoother and more intuitive than ever.
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
