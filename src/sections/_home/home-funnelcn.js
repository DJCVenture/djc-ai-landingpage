import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/funnel1.png';
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
          通过我们的综合漏斗系统加速您的销售旅程
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          使用我们的全面销售漏斗系统，为旨在达到最高效率和效果的企业注入新活力，<br/>重新激发您的销售策略。
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          无论您是在为潜在客户生成奠定基础还是在精炼销售策略，我们的网络应用程序提供了一个全面的解决方案。从直观的工作流程设计和轻松的表单创建到动态的着陆页面构建，我们为您配备了打造高转化漏斗的工具，以吸引和转换潜在客户。简化潜在客户获取和管理的过程，确保您以最小的努力和最大的影响捕获并培养潜在客户。我们的系统是您将潜在客户转化为忠诚客户的途径，比以往任何时候都要快，为您的销售努力设定了新的成功标准。
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
          mb: { xs: 8, md: 8 },
        }}
      >
        <Image src={sample3} alt="" width={800}  layout="intrinsic" style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }} />
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Image src={sample4} alt="" width={800}  layout="intrinsic" style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }} />
      </Box>
    </Container>
  );
}

HomeLead.propTypes = {
  plans: PropTypes.array,
};
