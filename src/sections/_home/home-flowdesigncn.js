import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import sample1 from '../../../public/assets/sample1.png';
import sample2 from '../../../public/assets/sample2.png';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AiChatBot({ plans }) {
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
            Effortless Flow Design with Our No-Code Solutions
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          无需编码的轻松流程设计
            <br /> 通过我们的无代码流程设计平台，转变您的数字战略 <br />
            专为各种规模的企业量身定制
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          无论您是数字转型的新手，还是希望增强您现有的流程，我们的多功能方案确保您拥有成功所需的工具。我们的解决方案旨在促进增长和易用性，赋予您无限制地构建、创新和扩展的能力。
          </Typography>
        </m.div>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Image
          src={sample1}
          alt=""
          layout="responsive"
          width={900}
          height={600}
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf', marginBottom: '100px' }}
        />
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Image
          src={sample2}
          layout="responsive"
          alt=""
          width={900}
          height={600}
          style={{ boxShadow: '8px 8px 18px 0 #e56aaf' }}
        />
      </Box>
    </Container>
  );
}

AiChatBot.propTypes = {
  plans: PropTypes.array,
};
