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

export default function PrivaryPolicy() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Typography variant="h5" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  PRIVACY POLICY
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Your Privacy
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  At DJC System, we respect the privacy of your personal information and are committed to maintaining its confidentiality. The primary purpose of collecting your personal data is to provide our services, enhance your user experience, and for future marketing initiatives. Only authorized DJC System employees have access to your personal information. We will not disclose information about our customers to third parties except as part of providing a service to you or where we have your express permission. This may include arrangements for providing services, conducting credit and security checks, and for customer research and profiling. Disclosure may also occur to regulators, lawyers, auditors, other companies in the same group, third-party service providers, and appointed marketing agencies.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Your Consent
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  We will not sell your name, address, email address, credit card information, or personal information to any third party without your permission, except for partners linked to our site.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Communication & Marketing
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  If you have subscribed to DJC System, we may occasionally update you on our latest services, news, and special offers via email, post, & telephone. Upon becoming a member, you will have the option to receive such communications from us and selected third parties. All DJC System members can opt out of receiving marketing communications from us and/or selected third parties. To opt-out, visit 'Your Details' in 'Your Account' on the DJC System website, register, and login. Alternatively, click on the 'unsubscribe' link in any email communications we send you.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Cookies
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  A cookie is a small file stored on your computer to enhance your experience. If you are registered with us, your computer will store an identifying cookie, saving you time each visit. You can modify your browser settings to prevent automatic cookie storage.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Site Statistics
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  We may disclose aggregated, anonymized statistics about visitors and usage as required by our investors. We gather data using independent measurement and research companies, employing cookies and embedded code. This information helps us improve our services. For more details, contact us.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Disclosures of Your Information
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Your personal information may be disclosed to our group companies. We may also disclose your information to third parties in the following scenarios: if DJC System sells or buys any business or assets; if DJC System or substantially all of its assets are acquired by a third party, in which case customer data may be transferred; to comply with legal obligations, enforce our terms, or protect the rights, property, or safety of DJC System, our customers, or others. This includes exchanging information for fraud protection and credit risk reduction.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Third-Party Sites
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Our site may contain links to other websites. We are not responsible for their privacy policies. Please review these policies before submitting personal data to these sites.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Checking Your Details
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  To verify details submitted to DJC System, contact us via the provided email address. For security, we may request proof of identity. We recommend not using your browser's password memory function to protect your personal information.
</Typography>

<Typography variant="h6" sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  Contacting Us
</Typography>

<Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
  We value feedback from our customers. If you have questions or feedback about this statement, or if you wish us to stop processing your information, please contact a member of the DJC System team, who will be happy to assist you.
</Typography>

    </Container>
  );
}
