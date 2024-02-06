import PropTypes from 'prop-types';
import { m, useSpring } from 'framer-motion';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export default function ScrollProgress({
  color = '#c3015a',
  size = 3,
  scrollYProgress,
  sx,
  ...other
}) {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Box
      component={m.div}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        height: size,
        zIndex: 1999,
        position: 'fixed',
        transformOrigin: '0%',
        bgcolor: 'text.primary',
        backgroundColor:'#c3015a',
        ...sx,
      }}
      style={{ scaleX }}
      {...other}
    />
  );
}

ScrollProgress.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
  ]),
  scrollYProgress: PropTypes.object,
  size: PropTypes.number,
  sx: PropTypes.object,
};
