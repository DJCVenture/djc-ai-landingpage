'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CountUp from 'src/components/count-up';

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

export default function TermsAndServices() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Typography variant="h4" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      TERMS & CONDITIONS
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Terms & Conditions
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Welcome to DJC System. These terms and conditions apply to all subscribers and users of DJC System. By subscribing to and using DJC System, you are bound by these terms and conditions.
      </Typography>

      
      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      General
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      The content of these terms and conditions may be changed, moved, or deleted at any time. DJC System reserves the right to modify the contents of the terms and conditions without prior notice. Any violation of the rules and regulations of these terms and conditions will result in immediate action against the offender(s).
      </Typography>


      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Site Contents & Copyrights
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Unless otherwise noted, all materials, including images, illustrations, designs, icons, photographs, video clips, and written and other materials that appear as part of DJC System, are the intellectual properties owned, controlled, or licensed by DJC System.
      </Typography>


      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Comments and Feedback
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      All comments and feedback regarding DJC System will be addressed to admin@djc.ai. Users must not submit any comments that violate the rights of any third party, including copyrights, trademarks, privacy, or other personal or proprietary rights. Users agree not to submit unlawful, abusive, or obscene content. Users are solely responsible for the content of their comments.
      </Typography>


      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Product Information
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Actual products may differ from those depicted on the website due to differences in user monitors.
      </Typography>


      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Newsletter
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Subscribers agree that DJC System may send newsletters about the latest news, products, promotions, etc., through email.
      </Typography>

      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Indemnification
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Subscribers agree to defend, indemnify, and hold DJC System harmless from any claims, damages, costs, and expenses, including attorney's fees, arising from or related to their use of DJC System.
      </Typography>

      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Links to Other Sites
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Links to third-party sites are at the user's own risk. DJC System is not responsible for any damages or losses incurred from the use of third-party sites.
      </Typography>


      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Inaccurate Information
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      DJC System reserves the right to correct any errors, inaccuracies, or change information without prior notice. Dissatisfied customers may return products in accordance with the return policy.
      </Typography>


      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Termination
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      This agreement is effective until terminated by either the customer or DJC System. Customers may terminate this agreement at any time. DJC System may also terminate the agreement without notice to customers who do not comply with these terms and conditions.
      </Typography>

      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Shipping and Delivery Policy
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Delivery times vary based on stock availability. For items out of stock, customers are advised to contact DJC System for assistance.
      </Typography>


      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Payments
      </Typography>
      <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
      Subscriptions to DJC System are subject to a recurring monthly or yearly payment. Payment can be made through various methods, such as Visa, MasterCard, or online payment methods. Payment cards are subject to validation checks by the card issuer. DJC System is not liable for any delay or non-delivery due to lack of authorization.
      </Typography>


     
    </Container>
  );
}
