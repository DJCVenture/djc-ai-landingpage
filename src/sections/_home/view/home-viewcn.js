'use client';

import { useScroll } from 'framer-motion';

import { _pricingHome } from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';
import { m } from 'framer-motion';
import HomeHero from '../home-heroCN';
import HomeFAQs from '../home-faqsCN';
import HomeAiChatBot from '../home-aichatbotcn';
import HomeAdvertisement from '../home-advertisementCN';
import PricingHome from '../../pricing/home/pricing-homeCN';
import HomeFeatureHighlights from '../home-feature-highlightsCN';
import HomeComparison from '../home-comparisonCN';
import HomeAiSupport from '../home-aisupportcn';
import { Box, Fab, Tooltip } from '@mui/material';
import Iconify from 'src/components/iconify';
import HomeFlowDesign from '../home-flowdesigncn';
import HomeCountUp from '../home-count-upcn';
import HomeFreeTrialCN from '../home-freetrialcn'

import HomeLeadCN from '../home-leadcn'
import HomeWhatsappCN from '../home-whatsappcn'
import HomeFunnelCN from '../home-funnelcn'
import HomeLandingCN from '../home-landingcn';
import HomeListingCN from '../home-propertylistingcn';
import HomeTrainingCN from '../home-trainingcn';
import HomeCrossCN from '../home-crosscn';

import HomeTestimonialCN from '../home-testimonialcn';
import HomeOtherTestimonialCN from '../home-othertestimonialcn';
// ----------------------------------------------------------------------

export default function HomeViewCN() {
  const { scrollYProgress } = useScroll();
  const openWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE;
    const defaultMessage = '嗨，我想了解更多关于DJC系统的信息';
    const encodedMessage = encodeURIComponent(defaultMessage);

    // Append the message to the URL
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
  };
  return (
    <>
      {/* <Box
        sx={{
          position: 'fixed',
          top: 550,
          right: 20,
          zIndex: 9999,
          '& > :not(style)': { m: 1 },
          display: { xs: 'block', sm: 'none' }, // Hide on xs screens, show on sm and above
        }}
        component={m.div}
        animate={{
          y: ['0%', '-10%', '0%'], // Bouncing effect
        }}
        transition={{
          duration: 1, // Adjusted for a quicker bounce effect
          ease: 'easeInOut', // Changed to easeInOut for a smoother bounce
          repeat: Infinity,
          repeatType: 'loop', // Ensure the animation loops
        }}
        onClick={openWhatsApp}
      >
        <Tooltip title="Click here to try!" placement="top">
          <Fab color="primary" size="medium">
            <Iconify icon={'eos-icons:ai-operator'} sx={{ width: 25, height: 25 }} />
          </Fab>
        </Tooltip>
      </Box>
      <Box
        sx={{
          position: 'fixed',
          top: 450,
          right: 20,
          zIndex: 9999,
          '& > :not(style)': { m: 1 },
          display: { xs: 'none', sm: 'block' }, // Hide on xs screens, show on sm and above
        }}
        component={m.div}
        animate={{
          y: ['0%', '-10%', '0%'], // Bouncing effect
        }}
        transition={{
          duration: 1, // Adjusted for a quicker bounce effect
          ease: 'easeInOut', // Changed to easeInOut for a smoother bounce
          repeat: Infinity,
          repeatType: 'loop', // Ensure the animation loops
        }}
        onClick={openWhatsApp}
      >
        <Tooltip title="Click here to try!" placement="top">
          <Fab variant="extended" sx={{ backgroundColor: '#c3015a' }}>
            试试我们的人工智能客服！
          </Fab>
        </Tooltip>
      </Box> */}

      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />
      <HomeFreeTrialCN/>

      <HomeTestimonialCN/>    

      <HomeFreeTrialCN/>
      <HomeAiChatBot />
      <HomeFreeTrialCN/>
      <HomeAiSupport />
      <HomeFreeTrialCN/>
      <HomeFlowDesign />
      <HomeFreeTrialCN/>

      <HomeLeadCN/>
      <HomeFreeTrialCN/>
      <HomeWhatsappCN/>
      <HomeFreeTrialCN/>

      <HomeFunnelCN/>
      <HomeFreeTrialCN/>

      <HomeLandingCN/>
      <HomeFreeTrialCN/>

      <HomeListingCN/>
      <HomeFreeTrialCN/>

      <HomeTrainingCN/>
      <HomeFreeTrialCN/>

      <HomeCrossCN/>
      <HomeFreeTrialCN/>


      <HomeFeatureHighlights />
      <HomeFreeTrialCN/>
      <HomeComparison />
      <HomeFreeTrialCN/>
      {/* <PricingHome plans={_pricingHome} /> */}
      {/* <HomeFreeTrialCN/> */}
      <HomeCountUp/>
      <HomeFreeTrialCN/>

      <HomeOtherTestimonialCN/>
      <HomeFreeTrialCN/>

      <HomeFAQs />
      <HomeFreeTrialCN/>
      <HomeAdvertisement />
    </>
  );
}
