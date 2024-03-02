'use client';
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { varFade, MotionViewport } from 'src/components/animate';


// ----------------------------------------------------------------------

const SUMMARY = [
  { name: '订阅者', number: 1031 },
  { name: '涉及行业', number: 30 },
  { name: '每日处理信息量', number: 20000 },
  { name: '每月读写操作次数', number: 8000000 },
];

// ----------------------------------------------------------------------

export default function CountUpPageView() {
  return (
    <>
      <Box
        sx={{
          py: 5,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <Box
            sx={{
              mb: { xs: 8, md: 10 },
              textAlign: 'center',
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ my: 3 }}>
                加入我们的无代码解决方案，助力企业转型浪潮
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography sx={{ color: 'text.secondary' }}>
                我们的平台已在各个行业领域中得到广泛应用，包括旅游和房产代理、市场营销机构、自由职业者、电子商务等，用户数量已超过1,000人，并且仍在持续增长中，充分证明了我们的平台能够适应并在各种环境中蓬勃发展。
              </Typography>
            </m.div>
          </Box>
          <Stack spacing={5} direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="center">
  {SUMMARY.map((value) => (
    <Box key={value.name} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          component="span"
          sx={{ fontSize: 'h2.fontSize' }}
        >
          {value.number}
        </Box>
        <Box
          component="span"
          sx={{ fontSize: 'h3.fontSize', ml: 0.5 }}
        >
          +
        </Box>
      </Box>
      <Box
        sx={{ fontSize: 'subtitle2.fontSize', color: 'text.secondary', mt: 1 }}
      >
        {value.name}
      </Box>
    </Box>
  ))}
</Stack>


        </Container>
      </Box>

      {/* <Container sx={{ my: 10 }}>
        <Stack spacing={5} direction="row" alignItems="center">
          {SUMMARY.map((value) => (
            <div key={value.name}>
              <Typography variant="h2" gutterBottom>
                <CountUp
                  start={value.number / 5}
                  end={value.number}
                  formattingFn={(newValue) => fShortenNumber(newValue)}
                />

                <Typography variant="h3" component="span" sx={{ verticalAlign: 'top', ml: 0.5 }}>
                  +
                </Typography>
              </Typography>

              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {value.name}
              </Typography>
            </div>
          ))}
        </Stack>
      </Container> */}
    </>
  );
}
