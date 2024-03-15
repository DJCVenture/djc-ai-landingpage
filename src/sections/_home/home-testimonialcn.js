import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { varFade, MotionViewport } from 'src/components/animate';
import { useEffect } from 'react';

// ----------------------------------------------------------------------
export default function AiChatBot({ plans }) {
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
          <Typography variant="h5">
          让我们回顾一下我们的订阅者对我们DJC系统的反馈
          </Typography>
        </m.div>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centers the video horizontally
          mt: '20px',
        }}
      >
        <Box
          sx={{
            width: '80%', // By default, the video container takes 80% of the parent width
            maxWidth: '1000px', // Ensures the video does not exceed 1000px in width
            '@media (max-width: 768px)': {
              width: '100%', // On smaller screens, the video container takes 100% of the parent width
            },
          }}
        >
          <video controls preload="auto" style={{ width: '100%' }}>
            <source
              src="https://storage.googleapis.com/msgsndr/WlnVf84uM6BISixkkCXW/media/65f3b997161ce52d91df3acd.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <Typography variant="subtitle1" sx={{ mt: 2, textAlign: 'center' }}>
          Michael Jau • 保险行业
          </Typography>
        </Box>
        
      </Box>
    </Container>
  );
}

AiChatBot.propTypes = {
  plans: PropTypes.array,
};
