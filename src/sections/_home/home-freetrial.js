import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const theme = useTheme();

  return (
    <Box
     
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          p: 2.5,
          zIndex: 9,
          textAlign: 'center',
          position: 'relative',
          color: 'common.white',
        }}
      >
       
        <Button
          size="large"
          variant="contained"
          target="_blank"
          rel="noopener"
          sx={{backgroundColor:'#c3015a'}}
          href="https://djcsystem.com/sign-up"
        >
          START YOUR FREE TRIAL TODAY!!
        </Button>
      </Stack>
    </Box>
  );
}
