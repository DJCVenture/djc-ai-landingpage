'use client';

import { _pricingHome } from 'src/_mock';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Iconify from 'src/components/iconify';
import { styled } from '@mui/material/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { keyframes } from '@mui/system';
import { createUserRecord } from 'src/utils/firebaseCall';
// ----------------------------------------------------------------------

export default function HomeNews() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validateName = (name) => name.trim().length > 0;
  const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

  // Define the breathing animation keyframes
  const breathingAnimation = keyframes`
  0%, 100% {
    transform: scaleX(0.55);
  }
  50% {
    transform: scaleX(0.5);
  }
`;

  // Combine both animations in the styled component
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    overflow: 'hidden', // Ensure the scaling does not exceed the component bounds
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 900],
      animation: `${pulseAnimation} 2s infinite ease-in-out`, // Apply pulse animation to the entire component
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
      animation: `${breathingAnimation} 2s infinite ease-in-out, ${pulseAnimation} 2s infinite ease-in-out`, // Apply both animations to the bar
      transformOrigin: 'left', // Anchor transformation to the left
    },
  }));

  const handleSubmit =async () => {
    if (!validateName(name)) {
      setDialogContent('Please enter a valid name.');
      setOpenDialog(true);
      return;
    }
    if (!validateEmail(email)) {
      setDialogContent('Please enter a valid email address.');
      setOpenDialog(true);
      return;
    }
    // Add your submit logic here
    const result = await createUserRecord(name,email);
    console.log(result);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Container sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 10 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            gap: { xs: 4, md: 4 },
            mb: { xs: 8, md: 10 },
            textAlign: 'center',
          }}
        >
          <Card
            sx={{
              width: '100%',
              maxWidth: { xs: 300, sm: 350, md: 600 },
              m: 'auto',
              boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
            }}
          >
            <CardContent>
              <Box>
                <Typography variant="h2" gutterBottom>
                  Start Your 7-Day Free Trial Now!
                </Typography>
                <BorderLinearProgress variant="determinate" value={50} />
                <Box sx={{ mb: '20px' }}>
                  <Typography variant="caption">Create account : Step 1 of 2</Typography>
                </Box>
                <TextField
                  fullWidth
                  id="name"
                  label="Full Name"
                  variant="outlined"
                  sx={{ mb: 3 }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
            </CardContent>
            <CardActions
              sx={{
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <Button size="large" variant="contained" sx={{ mb: 2 }} onClick={handleSubmit}>
                CONTINUE
                <Iconify icon={'maki:arrow'} width={15} sx={{ ml: 1 }} />
              </Button>
              <Box
                sx={{ display: 'flex', alignItems: 'start', textAlign: 'center', padding: '15px' }}
              >
                <Iconify icon={'material-symbols:lock'} width={35} sx={{ mt: '5px' }} />
                <Typography variant="caption" sx={{ ml: 1 }}>
                  By providing us with your information you are consenting to the collection and use
                  of your information in accordance with our{' '}
                  <a
                    href="/termsandservices"
                    target="_blank"
                    style={{ textDecoration: 'underline', color: 'inherit' }}
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    href="/privacypolicy"
                    target="_blank"
                    style={{ textDecoration: 'underline', color: 'inherit' }}
                  >
                    Privacy Policy
                  </a>
                  .
                </Typography>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Container>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Input Validation Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
