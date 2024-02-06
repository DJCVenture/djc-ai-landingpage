import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import PricingHomeCard from './pricing-home-cardCN';

// ----------------------------------------------------------------------

export default function PricingHome({ plans }) {

  const allPlans = [
    {
      license: '专业计划-个人版（每月）',
      price: '199.00',
      icons: [],
      commons: ['DJC 客户线索管理', 'DJC WhatsApp广播', 'DJC WhatsApp流程','DJC Whatsapp 营销漏斗'],
      options: [
        { title: '* 可添加多达5名成员', disabled: true },
        { title: '* 附文件上传功能', disabled: true },       
      ],
    },
    {
      license: '专业计划-企业版（每月）',
      price: '299.00',
      icons: [],
      commons: ['DJC 客户线索管理', 'DJC WhatsApp广播', 'DJC WhatsApp流程','DJC Whatsapp 营销漏斗'],
      options: [
        { title: '* 可添加多达5名成员', disabled: false },
        { title: '* 附文件上传功能', disabled: false },       
      ],
    },  
    {
      license: '专业计划-个人版（年度订阅每月）',
      price: '159.20',
      icons: [],
      commons: ['DJC 客户线索管理', 'DJC WhatsApp广播', 'DJC WhatsApp流程','DJC Whatsapp 营销漏斗'],
      options: [
        { title: '* 可添加多达5名成员', disabled: true },
        { title: '* 附文件上传功能', disabled: true },       
      ],
    },   
    {
      license: '专业计划-企业版（年度订阅每月）',
      price: '239.20',
      icons: [],
      commons: ['DJC 客户线索管理', 'DJC WhatsApp广播', 'DJC WhatsApp流程','DJC Whatsapp 营销漏斗'],
      options: [
        { title: '* 可添加多达5名成员', disabled: false },
        { title: '* 附文件上传功能', disabled: false },       
      ],
    },    
  ];

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
            价格配套
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
          为您的企业量身定制的<br/>最佳方案
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
          选择最适合您需求的理想方案
          </Typography>
        </m.div>
      </Box>

      <Box
        sx={{
          gap: 3,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {allPlans.map((plan,index) => (
          <m.div 
          key={plan.license + index} 
          variants={varFade().inUp}
          whileHover={{ scale: 1.05 }} // Scale up the card on hover
          style={{ display: 'flex' }} // Ensure the card scales within its container
        >
            <PricingHomeCard plan={plan}  />
          </m.div>
        ))}
      </Box>
    </Container>
  );
}

PricingHome.propTypes = {
  plans: PropTypes.array,
};
