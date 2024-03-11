import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

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
            left: 85,
            '@media (max-width:600px)': {
              // This corresponds to the 'xs' breakpoint
              left: 120, // Adjust this value as needed
            },
          }}
        >
         MOST POPULAR
        </Label>
      )}

{plan.price === '239.20' && (
        <Label
          color="error"
          sx={{
            position: 'absolute',
            top: 20,
            left: 100,
            '@media (max-width:600px)': {
              // This corresponds to the 'xs' breakpoint
              left: 130, // Adjust this value as needed
            },
          }}
        >
          BEST VALUE !
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
                per month
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

        {/* {personalPlan ? (
          <Box
            component="img"
            alt={plan.icons[0]}
            src={plan.icons[0]}
            sx={{ width: 20, height: 20 }}
          />
        ) : (
          <Stack direction="row" spacing={1.5}>
            {plan.icons.map((icon) => (
              <Box
                key={icon}
                component="img"
                alt={icon}
                src={icon}
                sx={{ width: 20, height: 20 }}
              />
            ))}
          </Stack>
        )} */}

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
            target="_blank"
            rel="noopener"
            href="https://djcsystem.com/sign-up-trial"
            sx={{color:'#c3015a'}}
          >
            Choose Package
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
