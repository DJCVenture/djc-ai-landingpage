import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample3 from '../../../public/assets/malay.png';
import sample4 from '../../../public/assets/eng.png';
import sample5 from '../../../public/assets/cn.png';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AiSupport({ plans }) {
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
          您的 24/7 企业动力中心
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          通过我们的 AI 助手/聊天机器人功能， <br />
           让您的企业昼夜升级。
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          我们的 AI 助手解决方案全天候不知疲倦地工作，不分节假日，以保持您的业务领先。专为马来西亚多元市场设计，我们的 AI 助手无缝适应各种语言和文化差异，确保您的企业能有效地与每一位客户建立联系。体验不间断的效率，利用为您的成功量身定制的技术释放您的全部潜力。
          </Typography>
        </m.div>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography sx={{ color: 'text.secondary' }} variant="caption">
        *AI 助手与客户之间的示例对话
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
          layout="responsive"
          width={400} // Adjusted width for side-by-side layout
          height={800} // Adjusted height for consistency
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }}
        />

        <Image
          src={sample4}
          alt=""
          layout="responsive"
          width={400} // Adjusted width for side-by-side layout
          height={800} // Adjusted height for consistency
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }}
        />

        <Image
          src={sample5}
          alt=""
          layout="responsive"
          width={400} // Adjusted width for side-by-side layout
          height={800} // Adjusted height for consistency
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }}
        />
      </Box>
    </Container>
  );
}

AiSupport.propTypes = {
  plans: PropTypes.array,
};
