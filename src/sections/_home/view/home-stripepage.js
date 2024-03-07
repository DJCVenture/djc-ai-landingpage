'use client';
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore';
import { _pricingHome } from 'src/_mock';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../../../public/assets/logo/DJCLogo.png';
import { Grid, Paper } from '@mui/material';
import { Backdrop, CircularProgress } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { db } from 'src/utils/firebase-utils';
// ----------------------------------------------------------------------

export default function HomeStripePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validateName = (name) => name.trim().length > 0;
  const [docId, setDocId] = useState('');
  const [userUid, setUserUid] = useState('');
  const [url, setUrl] = useState('');
  const router = useRouter();
  const [backdropOpen, setBackdropOpen] = useState(false);
  const searchParams = useSearchParams();
  const uid = searchParams.get('uid');
  const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

  // Combine both animations in the styled component
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 900],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
      animation: `${pulseAnimation} 2s ease-in-out infinite`, // Apply the breathing animation here
    },
  }));

  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const handleSelectPlan = (price) => {
    console.log(price);
    setSelectedPlanId(price);
    // Call additional actions here if needed, e.g. update a form state
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const arrPlan = [
    { name: `PROFESSIONAL PLAN- PERSONAL (MONTHLY)`, price: '199.00' },
    { name: `PROFESSIONAL PLAN- COMPANY (MONTHLY)`, price: '299.00' },
    { name: `PROFESSIONAL PLAN- PERSONAL (YEARLY)`, price: '159.20' },
    { name: `PROFESSIONAL PLAN- COMPANY (YEARLY)`, price: '239.20' },
  ];

  useEffect(() => {
    console.log('UID:', uid);
    if (uid) {
      setUserUid(uid);
    } else {
      router.push(`/freetrial`);
    }
  }, []);

  useEffect(() => {
    console.log(docId);
    if (docId) {
      console.log('docId: ', docId);
      const docRef = doc(db, 'customers', userUid, 'checkout_sessions', docId);
      return onSnapshot(docRef, (snap) => {
        const { error, url } = snap.data();
        if (error) {
          // Show an error to your customer and
          // inspect your Cloud Function logs in the Firebase console.
          alert(`An error occured: ${error.message}`);
        }
        if (url) {
          // We have a Stripe Checkout URL, let's redirect.
          console.log('url: ', url);
          setUrl(url); // Assuming this is a React state setter

          window.location.href = url; // Redirect to the URL
        }
      });
    }
  }, [docId]);

  const loadStripe = async (priceId) => {
    try {
      setBackdropOpen(true);
      const collectionRef = collection(db, 'customers', userUid, 'checkout_sessions');

      const docRef = await addDoc(collectionRef, {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

      console.log(userUid);

      if (docRef.id) {
        console.log(docRef.id);
        setDocId(docRef.id);
      } else {
        setLoading(false);
        toast.error('Error creating checkout session');
      }
    } catch (err) {
      console.log(err);
    } 
    // finally {
    //   setBackdropOpen(false);
    // }
  };

  const handleSubmit = async () => {
    setBackdropOpen(true);
    if (selectedPlanId === null) {
      setDialogContent('Please select a package plan.');
      setOpenDialog(true);
    }

    if (selectedPlanId === '199.00') {
      console.log(selectedPlanId);
      loadStripe('price_1NQRFWLWoLTwDp2IVS8m1438');
      console.log('price_1NQRFWLWoLTwDp2IVS8m1438');
    }
    if (selectedPlanId === '299.00') {
      console.log(selectedPlanId);
      loadStripe('price_1NgJ7QLWoLTwDp2I3731eiBo');
      console.log('price_1NgJ7QLWoLTwDp2I3731eiBo');
    }
    if (selectedPlanId === '159.20') {
      console.log(selectedPlanId);
      loadStripe('price_1NgjsGLWoLTwDp2IQxv8ckPq');
      console.log('price_1NgjsGLWoLTwDp2IQxv8ckPq');
    }
    if (selectedPlanId === '239.20') {
      console.log(selectedPlanId);
      loadStripe('price_1NgjtGLWoLTwDp2IR0yVTxa2');
      console.log('price_1NgjtGLWoLTwDp2IR0yVTxa2');
    }
  };

  return (
    <>
      <Container sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 10 } }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box textAlign="center" mb={2}>
              <Image src={Logo} alt="" width={150} height={150} />
            </Box>
            <Card
              sx={{
                maxWidth: { xs: 300, sm: 350, md: 600 },
                m: 'auto',
                boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    typography: {
                      xs: 'h4', // on extra-small and smaller screens
                      md: 'h2', // on medium and larger screens
                    },
                  }}
                  gutterBottom
                >
                  Select your package
                </Typography>
                <BorderLinearProgress variant="determinate" value={95} />
                <Typography variant="caption" display="block" gutterBottom>
                  Create account : Step 2 of 2
                </Typography>
                <Box>
                  {arrPlan.map((plan) => (
                    <SelectablePlan
                      key={plan.name}
                      name={plan.name}
                      selected={selectedPlanId === plan.price}
                      price={plan.price}
                      onSelect={handleSelectPlan}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}
              >
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ height: '50px', width: '280px', mb: 2 }}
                >
                  START YOUR FREE TRIAL NOW !!
                </Button>
                <Box sx={{ textAlign: 'center', padding: '15px' }}>
                  <Typography variant="caption">
                    7 days free from today. Cancel by e-mail to admin@djc.ai. I also agree to the{' '}
                    <a
                      href="/termsandservices"
                      target="_blank"
                      style={{ textDecoration: 'underline', color: 'inherit' }}
                    >
                      Terms of Service
                    </a>{' '}
                    ,{' '}
                    <a
                      href="/privacypolicy"
                      target="_blank"
                      style={{ textDecoration: 'underline', color: 'inherit' }}
                    >
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a
                      href="/refundpolicy"
                      target="_blank"
                      style={{ textDecoration: 'underline', color: 'inherit' }}
                    >
                      Refund Policy
                    </a>
                    .
                  </Typography>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Placeholder for the right block */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stacks children vertically
                justifyContent: 'center', // Centers children vertically in the container
                alignItems: 'center', // Centers children horizontally in the container
                height: '100%', // Ensures the Box takes up full height of its container
                textAlign: 'center',
              }}
            >
              {/* Add your right block content here */}
              <Typography variant="h3">
                Transform Your Digital Outreach with DJC System: The Ultimate Toolset for
                Progressive Entrepreneurs! Join the Growing Community of Innovators Elevating Their
                Digital Game with DJC System!
              </Typography>
              <Typography variant="h4" sx={{ marginTop: '30px', marginBottom: '30px' }}>
                Start Your No-Risk Free Trial Today
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start', // Align items to the start of the container
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                  <Iconify icon="emojione:white-heavy-check-mark" /> Get access to all features
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                  <Iconify icon="emojione:white-heavy-check-mark" /> Pay NOTHING for the first
                  7-days
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                  <Iconify icon="emojione:white-heavy-check-mark" /> Cancel anytime, hassle-free
                </Typography>
                <Typography variant="h6">
                  <Iconify icon="emojione:white-heavy-check-mark" /> 7-days money back GUARANTEE
                  after your trial ends
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

function SelectablePlan({ name, selected, price, onSelect }) {
  return (
    <Paper
      elevation={selected ? 12 : 3} // Higher elevation when selected, default shadow when not
      sx={{
        border: 2,
        borderColor: selected ? '#87afff' : 'divider',
        bgcolor: selected ? '#c2d6ff' : '#fff',
        p: 1,
        m: 2, // Spacing between papers
        cursor: 'pointer',
        '&:hover': {
          borderColor: '#87afff',
        },
      }}
      onClick={() => onSelect(price)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="caption"
            gutterBottom
            color="text.secondary"
            sx={{
              fontWeight: selected ? 'bold' : 'normal', // Make text bold if selected
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginTop: '10px',
              fontWeight: selected ? 'bold' : 'normal', // Make text bold if selected
            }}
          >
            RM{price}/month after your trial
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontWeight: selected ? 'bold' : 'normal', // Make text bold if selected
            }}
          >
            RM0 due today
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
