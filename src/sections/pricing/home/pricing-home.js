import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import PricingHomeCard from './pricing-home-card';

// ----------------------------------------------------------------------

export default function PricingHome({ plans }) {

  const arrFunctionList = ['DJC AI Assistant','DJC Leads Management', 'DJC Whatsapp Broadcast', 'DJC Whatsapp Flows','DJC Whatsapp Funnels','DJC Email Marketing', 'Landing Page Builder','Periodic Training Courses','Telegram Community','Continuous Enhancements','Continuous Expansion','Rapid System Support', ]

  const allPlans = [
    {
      license: 'Professional Plan- Personal (Monthly)',
      price: '199.00',
      icons: [],
      commons: arrFunctionList,
      options: [
        { title: '* Add up to 5 team members', disabled: true },
        { title: '* Upload files', disabled: true },       
      ],
    },
    {
      license: 'Professional Plan- Company (Monthly)',
      price: '299.00',
      icons: [],
      commons: arrFunctionList,
      options: [
        { title: '* Add up to 5 team members', disabled: false },
        { title: '* Upload files', disabled: false },       
      ],
    },  
    {
      license: 'Professional Plan- Personal (Yearly)',
      price: '159.20',
      icons: [],
      commons: arrFunctionList,
      options: [
        { title: '* Add up to 5 team members', disabled: true },
        { title: '* Upload files', disabled: true },       
      ],
    },   
    {
      license: 'Professional Plan- Company (Yearly)',
      price: '239.20',
      icons: [],
      commons: arrFunctionList,
      options: [
        { title: '* Add up to 5 team members', disabled: false },
        { title: '* Upload files', disabled: false },       
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
            pricing plans
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
            The Right Plan <br />
            For Your Business
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
            Choose the perfect plan for your needs. Always flexible to grow
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
