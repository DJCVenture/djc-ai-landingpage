import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PricingHomeCard({ plan }) {
  const personalPlan = plan.license === 'Professional Plan - Personal';

  const companyPlan = plan.license === 'Professional Plan - Company';

  const extendedLicense = plan.license === 'Extended';

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: (theme) => theme.customShadows.z20,
        // ...(plan.price === '299.00' && {
        //   py: 10,
        //   boxShadow: (theme) => theme.customShadows.z24,
        // }),
      }}
    >
      {plan.price === '299.00' && (
        <Label
          color="info"
          sx={{
            position: 'absolute',
            top: 20,
            left: 105,
            '@media (max-width:600px)': {
              // This corresponds to the 'xs' breakpoint
              left: 120, // Adjust this value as needed
            },
          }}
        >
         热销配套
        </Label>
      )}

{plan.price === '239.20' && (
        <Label
          color="error"
          sx={{
            position: 'absolute',
            top: 20,
            left: 110,
            '@media (max-width:600px)': {
              // This corresponds to the 'xs' breakpoint
              left: 130, // Adjust this value as needed
            },
          }}
        >
          超值配套
        </Label>
      )}

      <Stack spacing={5}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="column" justifyContent="center" alignItems="center">
            {' '}
            {/* Add alignItems="center" */}
            <Stack direction="row" spacing={0.5}>
              <Typography variant="h3" component="span">
                RM
              </Typography>
              <Typography variant="h2" component="span">
                {plan.price}
              </Typography>
            </Stack>
            <Typography variant="caption" component="span">
                每月
              </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{
                textTransform: 'uppercase',
                pt:3,
                display: 'flex', // Add display flex
                justifyContent: 'center', // Horizontally center the content
                alignItems: 'center', // Vertically center the content
                textAlign: 'center', // Ensure text is centered
                mb: 1,
              }}
            >
              {plan.license}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2.5}>
          {plan.commons.map((option) => (
            <Stack key={option} spacing={1.5} direction="row" alignItems="center">
              <Iconify
                icon="carbon:checkmark-outline"
                sx={{ color: '#c3015a', width: 20, height: 20 }}
              />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />

          {plan.options.map((option) => (
            <Stack
              key={option.title}
              direction="row"
              alignItems="center"
              sx={{
                typography: 'body2',
                ...(option.disabled && { color: 'text.disabled' }),
              }}
            >
              <Iconify
                icon={option.disabled ? 'carbon:close-outline' : 'carbon:checkmark-outline'}
                sx={{
                  mr: 2,
                  color: '#c3015a',
                  ...(option.disabled && { color: 'currentColor' }),
                }}
              />
              {option.title}
            </Stack>
          ))}
        </Stack>

        <Stack alignItems="flex-end" spacing={3}>

          <Button
            size="large"
            fullWidth
            variant='outlined'
            sx={{color:'#c3015a'}}
            target="_blank"
            rel="noopener"
            href="https://djcsystem.com/sign-up-trial"
          >
            选择配套
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}

PricingHomeCard.propTypes = {
  plan: PropTypes.shape({
    commons: PropTypes.array,
    icons: PropTypes.array,
    license: PropTypes.string,
    options: PropTypes.array,
    price: PropTypes.string,
  }),
};
