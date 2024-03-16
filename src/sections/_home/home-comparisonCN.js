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
   <Box
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          通过我们的集成网页应用解决方案优化您的销售策略
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          使用我们成本效益高,
            <br /> 统一的系统平台简化您的运营 <br />     
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          无论您是初步进入数字销售领域，还是希望整合您的销售流程，我们的集成网页应用解决方案将多个销售功能汇集到一个统一的平台中。这种全面的方法不仅简化了管理，而且与采用多个不同系统的累计费用相比，还能显著降低成本。
          </Typography>
        </m.div>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Image src={pink} alt="" width={800} height={480} />


      </Box>
    
    
    </Container>
  );
}
