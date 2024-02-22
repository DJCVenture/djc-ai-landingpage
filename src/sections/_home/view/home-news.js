'use client';

import { _pricingHome } from 'src/_mock';

import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// ----------------------------------------------------------------------

export default function HomeNews() {
  const handleClick = () => {
    window.open('https://hello.djc.ai/', '_blank');
  }
   
  const news = [
    {
      title: 'Dive Into AI Strategies',
      desc: 'Webinar on 28 FEB 2024 8-10PM',
         image:
        'https://firebasestorage.googleapis.com/v0/b/facebook-api-59e5c.appspot.com/o/files%2Fdjcventure6%40gmail.com%2Fphoto_2024-02-22_11-08-32.jpg?alt=media&token=aa711e38-0bad-4b63-92c9-0735dd9b296f',
    },
    {
      title: '人工智能 - 营销策略',
      desc: 'Webinar on 5 Sep 2023 8-10PM',
         image:
        'https://firebasestorage.googleapis.com/v0/b/facebook-api-59e5c.appspot.com/o/files%2Fdjcventure6%40gmail.com%2F372837293_10101802910486955_373867870370727689_n.jpg?alt=media&token=32cd5172-a442-4c72-a4ba-4bdb45bef8a3',
    },
    {
      title: '营销网络研讨会',
      desc: 'Webinar on 29 Aug 2023 8-9PM',
         image:
        'https://firebasestorage.googleapis.com/v0/b/facebook-api-59e5c.appspot.com/o/files%2Fdjcventure6%40gmail.com%2F369967621_10101800214220295_4564387497702791132_n.jpg?alt=media&token=060f7734-2e66-47e7-b502-e2479467365e',
    },
  
  ];

  return (
    <>
      <Container
        sx={{
          pt: { xs: 10, md: 15 },
          pb: { xs: 5, md: 10 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            gap: { xs: 4, md: 4 },
            mb: { xs: 8, md: 10 },
            textAlign: 'center',
          }}
        >
          {news.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: '100%', // Allows the card to grow
                maxWidth: { xs: 300, sm: 350, md: 400 }, // Reduces card size on desktop view
                m: 'auto', // Centers the card on all screen sizes
                boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
              }}
            >
              <CardMedia
                component="img"
                height="auto" // Adjusts height automatically
                image={item.image || '/static/images/cards/contemplative-reptile.jpg'}
                alt={item.title || 'Default Title'}
                sx={{
                  width: '100%', // Ensures image width is responsive
                  objectFit: 'cover', // Adjusts how the image fits within its box
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title || 'Default Title'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc || 'No description available.'}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                {index===0?
                <Button size="small" onClick={handleClick}>REGISTER NOW</Button>:<Typography variant="body2" color="text.secondary">
                Event Concluded
              </Typography>}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
}
