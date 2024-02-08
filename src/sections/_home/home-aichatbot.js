import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/sample3.png';
import { varFade, MotionViewport } from 'src/components/animate';

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
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            AI Automation Solutions Tailored to Your Needs
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
            Unlock the full potential of your business <br />
            with our AI Automation offerings.
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
            Whether you're just starting on your automation journey or looking to scale existing
            capabilities, we have the right solution for you.
          </Typography>
        </m.div>
      </Box>

      <Image
        src={sample3}
        alt=""
        layout="responsive"
        width={175}
        height={100}
        style={{ borderRadius: '3%', boxShadow: '8px 8px 18px 0 #e56aaf', marginBottom: '100px' }}
      />
    </Container>
  );
}

AiChatBot.propTypes = {
  plans: PropTypes.array,
};
