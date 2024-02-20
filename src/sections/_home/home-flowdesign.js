import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample1 from '../../../public/assets/sample1.png';
import sample2 from '../../../public/assets/sample2.png';
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
            Effortless Flow Design with Our No-Code Solutions
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
            Transform your digital strategy
            <br /> with our No-Code Flow Design platforms <br />
            tailored for businesses of every size
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
            No matter you're a newcomer to digital transformation or seeking to enhance your
            existing processes, our versatile plans ensure you have the tools to succeed. Designed
            for growth and ease-of-use, our solutions empower you to build, innovate, and scale
            without limits.
          </Typography>
        </m.div>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Image
          src={sample1}
          alt=""
          width={900}
          height={600}
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf', marginBottom: '100px' }}
        />
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Image
          src={sample2}
          alt=""
          width={900}
          height={600}
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }}
        />
      </Box>
    </Container>
  );
}

AiChatBot.propTypes = {
  plans: PropTypes.array,
};
