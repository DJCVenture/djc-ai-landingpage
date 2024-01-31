'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SUMMARY = [
  { title: 'Years of experience', total: 12, icon: 'carbon:increase-level' },
  { title: 'Awards', total: 20, icon: 'carbon:trophy' },
  { title: 'Projects', total: 150, icon: 'carbon:data-vis-4' },
  { title: 'Happy clients', total: 32000, icon: 'carbon:user-certification' },
];

// ----------------------------------------------------------------------

const StyledIcon = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  '& svg': {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function RefundPolicy() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
<Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  SHIPPING, CANCELLATION, AND REFUND POLICY
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Cancellation Prior to Product Activation
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  For DJC System, an online app using web application, the following cancellation policy applies: Once payment is made, you have 24 hours to cancel your subscription after product activation. To cancel, please send your request to admin@djc.ai. This policy ensures that you have a brief period to reconsider your subscription decision after experiencing the product.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Return Policy
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Given that DJC System is an online service without physical shipping, the return policy is adjusted as follows: All subscriptions to DJC System are non-refundable except in cases of <br/><br/> (i) Failure to Activate Subscription, <br/><br/>(ii) Wrong Subscription Activated, or <br/><br/>(iii) Damaged or Faulty Service. <br/><br/>Only subscriptions activated directly through the DJC System Online Service are eligible for consideration under this policy. Returns or refunds for DJC System subscriptions purchased through other retailers must adhere to the respective retailer's return and refund policy.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Refund Policy
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Refunds for valid return requests will be processed based on the original payment method: <br/><br/>Online Bank Transfer: Refunds will be credited to your bank account within 3-5 working days. <br/><br/>Credit Card: Refunds will be processed through the card-issuing bank. <br/><br/>Contact your bank for the duration of the credit refund.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Shipping Policy
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Since DJC System is an online application, there is no physical product shipping. All services and products are delivered electronically via the web application. Ensure that your email and contact details are correct during subscription to receive all necessary information and updates. Change in Service Details: For changes in subscription details, please contact us at admin@djc.ai within 24 hours of your order. Changes requested after this period may not be possible or could incur additional charges. This policy is subject to change as necessary, without prior notice or approval from the customer.
</Typography>

    </Container>
  );
}
