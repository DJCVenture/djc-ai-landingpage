import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const INTEGRATION_ITEMS = [
  {
    icon: 'logos:google-icon',
    title: 'Google Sign-In & Secure Authentication',
    description:
      'Log in seamlessly and securely using your verified Google Account. We only request basic profile information (name, email address, profile picture) to identify your account and protect your workspace.',
    badge: 'Authentication',
    badgeColor: 'primary',
  },
  {
    icon: 'logos:google-calendar',
    title: 'Google Calendar Sync & Smart Scheduling',
    description:
      'Empower the DJC AI assistant to check your real-time availability and automatically book client consultations directly onto your Google Calendar, preventing double bookings and missed sales meetings.',
    badge: 'Calendar Integration',
    badgeColor: 'info',
  },
  {
    icon: 'solar:shield-check-bold-duotone',
    title: 'Strict Data Privacy & Security',
    description:
      'We treat your data with utmost confidentiality. Google user data is used solely to provide your requested scheduling and login features. We never sell your personal data or share it with third parties or ad networks.',
    badge: 'Data Protection',
    badgeColor: 'success',
  },
  {
    icon: 'solar:user-id-bold-duotone',
    title: 'User Control & Immediate Revocation',
    description:
      'You maintain full ownership of your data at all times. You can disconnect your Google integration or request complete data deletion directly from your account settings at any moment.',
    badge: 'User Control',
    badgeColor: 'warning',
  },
];

// ----------------------------------------------------------------------

export default function HomeGoogleIntegration() {
  const theme = useTheme();

  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          mb: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: '#c3015a', fontWeight: 700, letterSpacing: 1.2 }}>
            GOOGLE INTEGRATION & TRANSPARENCY
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 2.5 }}>
            How DJC AI Uses Google Services & Protects Your Data
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary', maxWidth: 760, mx: 'auto' }}>
            DJC AI integrates seamlessly with Google to deliver automated scheduling and seamless account access.
            We are fully committed to data transparency, user privacy, and strict compliance with Google's API policies.
          </Typography>
        </m.div>
      </Box>

      <Grid container spacing={3}>
        {INTEGRATION_ITEMS.map((item) => (
          <Grid key={item.title} xs={12} sm={6} md={6}>
            <m.div variants={varFade().inUp}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2.5,
                  border: (th) => `1px solid ${alpha(th.palette.grey[500], 0.16)}`,
                  boxShadow: (th) => `0 8px 24px 0 ${alpha(th.palette.common.black, 0.04)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (th) => `0 16px 32px 0 ${alpha(th.palette.common.black, 0.08)}`,
                    borderColor: '#c3015a',
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 1.5,
                      bgcolor: alpha(theme.palette.grey[500], 0.08),
                    }}
                  >
                    <Iconify icon={item.icon} width={32} />
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 1,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                        color: '#c3015a',
                        display: 'inline-block',
                        mb: 0.5,
                      }}
                    >
                      {item.badge}
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: '1.05rem' }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flexGrow: 1 }}>
                  {item.description}
                </Typography>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>

      <m.div variants={varFade().inUp}>
        <Box
          sx={{
            mt: 5,
            p: 3.5,
            borderRadius: 2.5,
            bgcolor: alpha(theme.palette.primary.main, 0.04),
            border: `1px dashed ${alpha(theme.palette.primary.main, 0.3)}`,
            textAlign: 'center',
          }}
        >
          <Typography variant="subtitle1" sx={{ color: 'text.primary', mb: 1, fontWeight: 700 }}>
            Google API Services User Data Policy Compliance
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 840, mx: 'auto', mb: 2 }}>
            DJC AI&apos;s use and transfer to any other app of information received from Google APIs will adhere to the{' '}
            <Link
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#c3015a', fontWeight: 600, textDecoration: 'underline' }}
            >
              Google API Services User Data Policy
            </Link>
            , including the Limited Use requirements.
          </Typography>
          <Button
            variant="outlined"
            href="/privacypolicy"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#c3015a',
              borderColor: '#c3015a',
              borderRadius: 1.5,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                borderColor: '#c3015a',
                bgcolor: alpha('#c3015a', 0.08),
              },
            }}
          >
            Read Our Complete Privacy Policy
          </Button>
        </Box>
      </m.div>
    </Container>
  );
}
