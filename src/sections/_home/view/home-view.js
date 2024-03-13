'use client';

import { useScroll } from 'framer-motion';

import { _pricingHome } from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';
import { m } from 'framer-motion';
import HomeHero from '../home-hero';
import HomeFAQs from '../home-faqs';
import HomeAdvertisement from '../home-advertisement';
import PricingHome from '../../pricing/home/pricing-home';
import HomeFeatureHighlights from '../home-feature-highlights';
import HomeAiSupport from '../home-aisupport';
import HomeComparison from '../home-comparison';
import { Box, Fab, Tooltip } from '@mui/material';
import Iconify from 'src/components/iconify';
import HomeAiChatBot from '../home-aichatbot';
import HomeFlowDesign from '../home-flowdesign';
import HomeCountUp from '../home-count-up';
import HomeFreeTrial from '../home-freetrial';
// import HomeKeyPoint from '../home-keypoint';
// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  const openWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE;
    const defaultMessage = 'Hi, i would like to know more about DJC system.';
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
          <Fab variant="extended" sx={{backgroundColor:"#c3015a"}}>
            Try our AI Assistant!
          </Fab>
        </Tooltip>
      </Box> */}

      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />
      {/* <HomeKeyPoint /> */}
      <HomeFreeTrial/>
      <HomeAiChatBot />
      <HomeFreeTrial/>
      <HomeAiSupport />
      <HomeFreeTrial/>
      <HomeFlowDesign />
      <HomeFreeTrial/>
      <HomeFeatureHighlights />
      <HomeFreeTrial/>
      <HomeComparison />
      <HomeFreeTrial/>
      {/* <PricingHome plans={_pricingHome} /> */}
      <HomeFreeTrial/>
      <HomeCountUp/>
      <HomeFreeTrial/>
      <HomeFAQs />
      <HomeAdvertisement />
    </>
  );
}
