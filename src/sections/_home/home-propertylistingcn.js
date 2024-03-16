import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/listing.png';
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
          使用我们灵活的列表平台个性化展示您的房产
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          通过我们尖端的房产列表功能，提升您的房地产展示<br/>这是一个多功能的网络应用程序，为您的房产介绍带来了个性化网站的精髓 
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          适应各种类型的房产——从转售和新推出到拍卖和出租——我们的平台确保您的列表不仅展示出色，还能在搜索结果中排名更高。通过我们的专用页面，管理您的房产列表，让这个空间真正感觉像是您自己的。选择我们用户友好的默认域名，或者对于那些旨在进一步区分其品牌的人，整合您的自定义域名来创建一个独特的数字展示。我们的页面不仅设计简约，视觉冲击力强，而且还准备好了SEO，这得益于服务器端渲染技术。这项技术提高了您在搜索引擎上的可见度，使客户更容易找到您的列表。享受自由地按照您的设想展示您的房产，打造一个无与伦比的展示，吸引您的观众。
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
          textAlign: 'center',
        }}
      >
        <Image src={sample3} alt="" width={800}  layout="intrinsic" style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }} />
      </Box>
    
    </Container>
  );
}

HomeLead.propTypes = {
  plans: PropTypes.array,
};
