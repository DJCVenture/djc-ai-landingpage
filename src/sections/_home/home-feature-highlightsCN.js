import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FEATURE_HIGHLIGHTS = [
  { title: '人工智能聊天机器人/助手', icon: 'eos-icons:ai' },
  { title: '客户线索管理', icon: 'material-symbols:leaderboard' },
  { title: 'WhatsApp群发系统', icon: 'ic:baseline-whatsapp' },
  { title: '销售漏斗系统', icon: 'fluent:data-funnel-20-filled' },
  { title: '电子邮件营销', icon: 'material-symbols:stacked-email-outline-sharp' },
  { title: '销售列表', icon: 'clarity:list-line' },
  { title: '培训课程', icon: 'tdesign:course' },
  { title: '登陆页面构建器', icon: 'foundation:page-multiple' },
  { title: '社交媒体管理', icon: 'foundation:social-facebook' },
  { title: '联盟系统', icon: 'mdi:human-capacity-increase' },
  { title: '易于定制', icon: 'carbon:settings-adjust' },
  { title: '暗黑模式', icon: 'carbon:asleep' },
  // { title: 'Google Fonts', icon: 'carbon:text-font' },
  // { title: 'Figma Design', icon: 'ph:figma-logo' },
  { title: '适配各种屏幕尺寸', icon: 'carbon:devices' },
  { title: '跨平台', icon: 'fluent:phone-laptop-16-regular' },
  { title: '持续发展', icon: 'fluent:text-change-previous-20-regular' },
  { title: '免费更新', icon: 'carbon:update-now' },
  { title: '快速支持', icon: 'carbon:headset' },
  // { title: 'Well Documented', icon: 'carbon:notebook' },
];

// ----------------------------------------------------------------------

export default function HomeFeatureHighlightsCN() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={{ xs: 8, md: 3 }} justifyContent={{ md: 'space-between' }}>
        <Grid
          xs={12}
          md={4}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            功能亮点
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ my: 3 }}>
            一应俱全，满足您的需求
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              {`让我们来看看是什么让我们的DJC系统如此强大且用户友好！`}
            </Typography>
          </m.div>
        </Grid>

        <Grid xs={12} md={7}>
          <Box
            sx={{
              rowGap: 6,
              columnGap: 3,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              },
            }}
          >
            {FEATURE_HIGHLIGHTS.map((feature) => (
              <m.div key={feature.title} variants={varFade({ distance: 40 }).in}>
                <Box sx={{ textAlign: 'center' }}>
                  <Iconify icon={feature.icon} width={32} />

                  <Typography variant="subtitle2" component="div" sx={{ mt: 2 }}>
                    {feature.title}
                  </Typography>
                </Box>
              </m.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
