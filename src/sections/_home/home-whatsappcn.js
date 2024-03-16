import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/whatsapp.png';
import sample4 from '../../../public/assets/chat2.png';
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
          通过我们的自动化消息广播系统,自动广播您的信息
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          旨在超越传统的企业设计，我们的平台使您能够一键达到多个接收者<br/>无需保存号码或经历繁琐的过程
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          以您的条件设置消息，通过可自定义的延迟选项，确保您的更新、促销或公告在完美时刻送达。通过实时跟踪消息状态获得深入的监督，识别成功的交付并迅速解决任何问题。在团队内部委派管理角色，以实现流畅的工作流程，使您的操作摆脱手动消息发送的限制。转变您与客户和团队成员的连接方式，节省时间并通过每条发送的消息增强互动。我们的系统不仅仅是一个工具；它是您革新沟通的伙伴，使每个词都更有价值。
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
