import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import Image from 'next/image';
import pink from '../../../public/assets/chinese pink.png';
// import bnw from '../../../public/assets/black and white.png';

// ----------------------------------------------------------------------

const FEATURE_HIGHLIGHTS = [
  { title: 'AI chatbot/assistant', icon: 'eos-icons:ai' },
  { title: 'Lead Management', icon: 'material-symbols:leaderboard' },
  { title: 'Message Management', icon: 'ic:baseline-whatsapp' },
  { title: 'Funnel System', icon: 'fluent:data-funnel-20-filled' },
  { title: 'Landing Page Builder', icon: 'foundation:page-multiple' },
  { title: 'Social Media Management', icon: 'foundation:social-facebook' },
  { title: 'Affilate System', icon: 'mdi:human-capacity-increase' },
  { title: 'Easy to Customize', icon: 'carbon:settings-adjust' },
  { title: 'Dark Mode', icon: 'carbon:asleep' },
  // { title: 'Google Fonts', icon: 'carbon:text-font' },
  // { title: 'Figma Design', icon: 'ph:figma-logo' },
  { title: 'Fully Responsive', icon: 'carbon:devices' },
  { title: 'Cross Platform', icon: 'fluent:phone-laptop-16-regular' },
  { title: 'Ever-Evolving', icon: 'fluent:text-change-previous-20-regular' },
  { title: 'Free Updates', icon: 'carbon:update-now' },
  { title: 'Fast Support', icon: 'carbon:headset' },
  // { title: 'Well Documented', icon: 'carbon:notebook' },
];

// ----------------------------------------------------------------------

export default function HomeComparison() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      {/* <Grid container spacing={{ xs: 8, md: 3 }} justifyContent={{ md: 'space-between' }}>
        <Grid
          xs={12}
          md={4}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Feature Highlights
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ my: 3 }}>
              Have Everything You Need
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              {`Let's see what makes our DJC system super powerful and user-friendly!`}
            </Typography>
          </m.div>
        </Grid>

        <Grid xs={12} md={7}>
          <Box
            sx={{
              rowGap: 6,
              columnGap: 3,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              },
            }}
          >
            {FEATURE_HIGHLIGHTS.map((feature) => (
              <m.div key={feature.title} variants={varFade({ distance: 40 }).in}>
                <Box sx={{ textAlign: 'center' }}>
                  <Iconify icon={feature.icon} width={32} />

                  <Typography variant="subtitle2" component="div" sx={{ mt: 2 }}>
                    {feature.title}
                  </Typography>
                </Box>
              </m.div>
            ))}
          </Box>
        </Grid>
      </Grid> */}
      <Image 
      src={pink} 
      alt="" 
      layout="responsive" 
      width={175} 
      height={100} 
    />
    
    {/* <Image 
      src={bnw} 
      alt="" 
      layout="responsive" 
      width={175} 
      height={100} 
    /> */}
      {/* <Image src={comparisonImg} alt="" layout="fill" objectFit="cover" /> */}
      {/* <Image src={bnw} alt="" layout="fill" objectFit="cover" /> */}
      {/* <Image src={bnw} alt='' width={100%} height={} /> */}
    </Container>
  );
}