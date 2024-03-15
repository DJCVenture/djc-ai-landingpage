import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------
export default function AiChatBot({ plans }) {
  // Assuming you have an array of video sources. Replace these with your actual video sources.
  const videoSources = [
    {
      link: 'https://storage.googleapis.com/msgsndr/WlnVf84uM6BISixkkCXW/media/65f3e3a55ad57b32bb5c942a.mp4',
      text: 'TC Leow • Property Agent and Skincare Product Proxy', // Replace with your actual video text
    },
    {
      link: 'https://storage.googleapis.com/msgsndr/WlnVf84uM6BISixkkCXW/media/65f3e3a55ad57b018e5c942b.mp4',
      text: 'Cool • AI Educator', // Replace with your actual video text
    },
    // Add your other video sources here...
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
          <Typography variant="h5">
            Keen to learn what fellow entrepreneurs think about DJC system?
          </Typography>
        </m.div>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {videoSources.map((source, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                width: '100%',
                height: 0,
                paddingBottom: '56.25%',
                position: 'relative',
                marginBottom: 2,
              }}
            >
              <video
                controls
                preload="auto"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              >
                <source src={source.link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
              {source.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

AiChatBot.propTypes = {
  plans: PropTypes.array,
};
