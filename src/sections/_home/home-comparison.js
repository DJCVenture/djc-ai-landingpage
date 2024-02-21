import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import Image from 'next/image';
import pink from '../../../public/assets/pink.png';
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
      <Box
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          OPTIMIZE YOUR SALES STRATEGY WITH OUR INTEGRATED WEB APP SOLUTION
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
            Streamline Your Operations 
            <br /> with Our Cost-Effective, Unified System Platform <br />     
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          Whether you're stepping into the world of digital sales or aiming to consolidate your sales processes, our integrated web app solution brings together multiple sales functions into a single, unified platform. This comprehensive approach not only simplifies management but also significantly reduces costs compared to the cumulative expense of adopting multiple disparate systems. 
          </Typography>
        </m.div>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Image src={pink} alt="" layout="responsive" width={175} height={100} />
      </Box>
    </Container>
  );
}
