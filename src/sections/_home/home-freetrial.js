import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

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
          variant="contained"
          target="_blank"
          rel="noopener"
          sx={{ 
            backgroundColor: '#c3015a', 
            width: '500px', 
            height: '60px', 
            fontSize: '20px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#bf1650', // Slightly darker shade for hover state
              transform: 'scale(1.05)', // Grow effect
            }
          }}
          href="/freetrial"
        >
          START YOUR FREE TRIAL TODAY!!
        </Button>
        <Typography variant="button" display="block" gutterBottom sx={{marginTop:'10px'}}>
        Get Started In Less Than 60 Seconds • Cancel Anytime</Typography>
      </Stack>
    </Box>
  );
}
