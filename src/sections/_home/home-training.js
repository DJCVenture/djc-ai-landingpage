import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/training.png';
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
          STAY AHEAD WITH OUR WEEKLY WEBINARS AND TRAINING: UNLOCK THE POWER OF INNOVATION
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          Elevate your expertise and gain a competitive edge with our comprehensive suite of learning opportunities.
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          At the core of our commitment to your growth, we offer weekly webinars every Wednesday and product training sessions every Friday. But our offerings extend beyond routine training; we immerse you in the latest updates, detailed function walkthroughs, and insights into our newest features, ensuring you're always in the loop. Dive into the forefront of technological evolution with our exclusive insights on the latest AI trends and news. Our goal is to empower you to outpace your competitors and achieve superior business outcomes. Join our community of forward-thinkers, and transform your aspirations into reality, week by week. Embrace the future, today. 
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
          textAlign: 'center',
        }}
      >
        <Image src={sample3} alt="" width={800}  layout="intrinsic" style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }} />
      </Box>
    
    </Container>
  );
}

HomeLead.propTypes = {
  plans: PropTypes.array,
};
