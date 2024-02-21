import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/malay.png';
import sample4 from '../../../public/assets/eng.png';
import sample5 from '../../../public/assets/cn.png';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AiSupport({ plans }) {
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
          YOUR 24/7 BUSINESS POWERHOUSE
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          Elevate Your Enterprise Day and Night <br />
            with our AI Assistant/Chat bot feature.
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          Our AI Assistants solutions work tirelessly, 24/7, ignoring holidays to keep your business ahead. Designed for Malaysia's diverse market, our AI assistants seamlessly cater to various languages and cultural nuances, ensuring your enterprise connects effectively with every customer. Experience uninterrupted efficiency and unlock your full potential with technology tailored for your success.
          </Typography>
        </m.div>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography sx={{ color: 'text.secondary' }} variant="caption">
          *Sample Conversation Between AI assistant and Customer
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
          layout="responsive"
          width={400} // Adjusted width for side-by-side layout
          height={800} // Adjusted height for consistency
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }}
        />

        <Image
          src={sample4}
          alt=""
          layout="responsive"
          width={400} // Adjusted width for side-by-side layout
          height={800} // Adjusted height for consistency
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }}
        />

        <Image
          src={sample5}
          alt=""
          layout="responsive"
          width={400} // Adjusted width for side-by-side layout
          height={800} // Adjusted height for consistency
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }}
        />
      </Box>
    </Container>
  );
}

AiSupport.propTypes = {
  plans: PropTypes.array,
};
