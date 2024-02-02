'use client';

import { useScroll } from 'framer-motion';

import { _pricingHome } from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';
import { m } from 'framer-motion';
import HomeHero from '../home-hero';
import HomeFAQs from '../home-faqs';
import HomeNewStart from '../home-new-start';
import HomeCombination from '../home-combination';
import HomeForDesigner from '../home-for-designer';
import HomeAdvertisement from '../home-advertisement';
import PricingHome from '../../pricing/home/pricing-home';
import HomeFeatureHighlights from '../home-feature-highlights';
import HomeFlexibleComponents from '../home-flexible-components';
import { Box, Fab, Tooltip } from '@mui/material';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  const openWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE
    const defaultMessage = 'Hi, i would like to know more.';
    const encodedMessage = encodeURIComponent(defaultMessage);

    // Append the message to the URL
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
  };
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 550,
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
          <Fab color="primary" variant="extended">
            Try our AI Assistant here!
          </Fab>
        </Tooltip>
      </Box>

      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      {/* <HomeNewStart />

      <HomeFlexibleComponents /> */}

      <HomeFeatureHighlights />

      {/* <HomeForDesigner /> */}

      <PricingHome plans={_pricingHome} />

      <HomeFAQs />

      {/* <HomeCombination /> */}

      <HomeAdvertisement />
    </>
  );
}
