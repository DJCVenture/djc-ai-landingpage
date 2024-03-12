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
            width: '300px', 
            height: '60px', 
            fontSize: '16px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#bf1650', // Slightly darker shade for hover state
              transform: 'scale(1.05)', // Grow effect
            }
          }}
          href="https://djcsystem.com/sign-up-trial"
        >
          立即开始您的免费试用!!
        </Button>
        <Typography variant="button" display="block" gutterBottom sx={{marginTop:'10px', color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
        在60秒内迅速启动 • 随时可取消订阅</Typography>
      </Stack>
    </Box>
  );
}
