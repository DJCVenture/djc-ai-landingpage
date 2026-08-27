import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const INTEGRATION_ITEMS_CN = [
  {
    icon: 'logos:google-icon',
    title: 'Google 快捷登录与安全身份认证',
    description:
      '使用已验证的 Google 账号一键安全登录系统。我们仅请求必要的基础资料（姓名、电子邮箱、头像）用于识别用户账号及保障工作空间安全，无需繁琐设置独立密码。',
    badge: '身份认证',
    badgeColor: 'primary',
  },
  {
    icon: 'logos:google-calendar',
    title: 'Google 日历实时同步与智能预约',
    description:
      '授权 DJC AI 智能助手实时查看您的空闲时间，并在客户咨询时自动将预约会议写入您的 Google 日历，避免时间冲突与遗漏商机。',
    badge: '日历集成',
    badgeColor: 'info',
  },
  {
    icon: 'solar:shield-check-bold-duotone',
    title: '严格的数据隐私与安全防护',
    description:
      '我们高度重视您的个人隐私。Google 用户数据仅用于实现上述预约与登录功能，绝不向任何第三方转让、出售或用于广告营销投放。',
    badge: '数据保护',
    badgeColor: 'success',
  },
  {
    icon: 'solar:user-id-bold-duotone',
    title: '用户数据完全掌控与一键注销',
    description:
      '您始终拥有自己数据的全部所有权。您可以随时在账号设置中解除 Google 绑定，或发起彻底删除数据的请求。',
    badge: '自主可控',
    badgeColor: 'warning',
  },
];

// ----------------------------------------------------------------------

export default function HomeGoogleIntegrationCN() {
  const theme = useTheme();

  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          mb: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: '#c3015a', fontWeight: 700, letterSpacing: 1.2 }}>
            GOOGLE 集成与数据透明度
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 2.5 }}>
            DJC AI 如何使用 Google 服务并保护您的隐私数据
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary', maxWidth: 760, mx: 'auto' }}>
            DJC AI 与 Google 服务无缝对接，实现智能预约日程自动化和便捷安全的账号登录。
            我们秉持数据透明原则，严格遵守 Google API 用户数据政策与限制使用要求。
          </Typography>
        </m.div>
      </Box>

      <Grid container spacing={3}>
        {INTEGRATION_ITEMS_CN.map((item) => (
          <Grid key={item.title} xs={12} sm={6} md={6}>
            <m.div variants={varFade().inUp}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2.5,
                  border: (th) => `1px solid ${alpha(th.palette.grey[500], 0.16)}`,
                  boxShadow: (th) => `0 8px 24px 0 ${alpha(th.palette.common.black, 0.04)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (th) => `0 16px 32px 0 ${alpha(th.palette.common.black, 0.08)}`,
                    borderColor: '#c3015a',
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 1.5,
                      bgcolor: alpha(theme.palette.grey[500], 0.08),
                    }}
                  >
                    <Iconify icon={item.icon} width={32} />
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 1,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                        color: '#c3015a',
                        display: 'inline-block',
                        mb: 0.5,
                      }}
                    >
                      {item.badge}
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: '1.05rem' }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flexGrow: 1 }}>
                  {item.description}
                </Typography>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>

      <m.div variants={varFade().inUp}>
        <Box
          sx={{
            mt: 5,
            p: 3.5,
            borderRadius: 2.5,
            bgcolor: alpha(theme.palette.primary.main, 0.04),
            border: `1px dashed ${alpha(theme.palette.primary.main, 0.3)}`,
            textAlign: 'center',
          }}
        >
          <Typography variant="subtitle1" sx={{ color: 'text.primary', mb: 1, fontWeight: 700 }}>
            遵守 Google API 服务用户数据政策
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 840, mx: 'auto', mb: 2 }}>
            DJC AI 对从 Google API 接收到的任何信息的使用和向其他应用程序的转移，均遵循{' '}
            <Link
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#c3015a', fontWeight: 600, textDecoration: 'underline' }}
            >
              Google API 服务用户数据政策
            </Link>
            ，包括限制使用要求。
          </Typography>
          <Button
            variant="outlined"
            href="/privacypolicy"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#c3015a',
              borderColor: '#c3015a',
              borderRadius: 1.5,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                borderColor: '#c3015a',
                bgcolor: alpha('#c3015a', 0.08),
              },
            }}
          >
            查看完整隐私权政策
          </Button>
        </Box>
      </m.div>
    </Container>
  );
}
