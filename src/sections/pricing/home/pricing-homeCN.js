import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import PricingHomeCard from './pricing-home-cardCN';

// ----------------------------------------------------------------------

export default function PricingHome({ plans }) {

  const arrFunctionList = ['DJC AI 助手', 'DJC 客户管理', 'DJC Whatsapp 广播', 'DJC Whatsapp 流程', 'DJC Whatsapp 营销漏斗', 'DJC 电子邮件营销', '着陆页生成器', '定期培训课程', 'Telegram 社区', '持续性功能优化', '持续性功能扩展', '高效系统支援', ]

  const allPlans = [
    {
      license: '专业计划-个人版（每月）',
      price: '199.00',
      icons: [],
      commons: arrFunctionList,
      options: [
        { title: '* 可添加多达5名成员', disabled: true },
        { title: '* 物业网站访问权限', disabled: true },
      ],
    },
    {
      license: '专业计划-企业版（每月）',
      price: '299.00',
      icons: [],
      commons: arrFunctionList,
      options: [
        { title: '* 可添加多达5名成员', disabled: false },
        { title: '* 物业网站访问权限', disabled: false },
      ],
    },
    {
      license: '专业计划-个人版（年度订阅每月）',
      price: '159.20',
      icons: [],
      commons: arrFunctionList,
      options: [
        { title: '* 可添加多达5名成员', disabled: true },
        { title: '* 物业网站访问权限', disabled: true },
      ],
    },
    {
      license: '专业计划-企业版（年度订阅每月）',
      price: '239.20',
      icons: [],
      commons:arrFunctionList,
      options: [
        { title: '* 可添加多达5名成员', disabled: false },
        { title: '* 物业网站访问权限', disabled: false },
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
            为您的企业量身定制的
            <br />
            最佳方案
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>选择最适合您需求的理想方案</Typography>
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
        {allPlans.map((plan, index) => (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {' '}
            
            <m.div
              key={plan.license + index}
              variants={varFade().inUp}
              whileHover={{ scale: 1.05 }}
              style={{ display: 'flex', margin: 'auto' }} // Ensure card is centered
            >
              <PricingHomeCard plan={plan} />
            </m.div>
          </div>
        ))}
      </Box>
    </Container>
  );
}

PricingHome.propTypes = {
  plans: PropTypes.array,
};
