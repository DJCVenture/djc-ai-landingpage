import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/training.png';
import sample4 from '../../../public/assets/funnel2.png';
import { varFade, MotionViewport } from 'src/components/animate';
import { useEffect } from 'react';

// ----------------------------------------------------------------------
export default async function HomeLead({ plans }) {
  
  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
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
          通过我们的每周网络研讨会和培训保持领先，解锁创新的力量
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          通过我们全面的学习机会，提升您的专业知识并获得竞争优势。
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          作为我们对您成长承诺的核心，我们每周三提供网络研讨会，每周五进行产品培训会议。我们让您深入了解最新更新、详细的功能演练以及我们最新特性的洞察，确保您始终处于信息最前沿。通过我们对最新AI趋势和新闻的独家洞察，深入技术演化的前沿。我们的目标是赋予您超越竞争对手、实现卓越商业成果的能力。加入我们这个前瞻性思维者的社区，逐周将您的抱负转化为现实。拥抱未来，从今天开始。
          </Typography>
        </m.div>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography sx={{ color: 'text.secondary' }} variant="caption">
          *系统界面截图
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'], // Stack vertically on small screens, side by side on larger screens
          justifyContent: 'center',
          alignItems: 'center', // Center items on the cross-axis on large screens
          gap: '80px', // Adds a little space between images
          mt: '20px',
          '@media (max-width: 768px)': {
            // Adjusts for screens smaller than 768px
            flexDirection: 'column',
            gap: '40px', // Less gap when stacked vertically
            alignItems: 'flex-start', // Align items at the start of the container (top) on small screens
          },
        }}
      >
        <Image
          src={sample3}
          alt=""
          layout='responsive'
          width={900} // Adjusted width for side-by-side layout
          height={600} // Adjusted height for consistency
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }}
        />

      
      </Box>
    
    </Container>
  );
}

HomeLead.propTypes = {
  plans: PropTypes.array,
};
