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
  };

  const news = [
    {
      title: 'AI MASTERY 2024 Setup Training',
      desc: 'Webinar on 16 MARCH 2024 8-10PM',
      image:
        'https://firebasestorage.googleapis.com/v0/b/facebook-api-59e5c.appspot.com/o/files%2Fdjcventure6%40gmail.com%2Fphoto_2024-03-10_10-38-36.jpg?alt=media&token=e0ecdd11-9868-4c65-a902-d6e24f7c01d6',
    },
    {
      title: '2024 SET-UP AI CHATBOT FOR YOUR BUSINESS',
      desc: 'Webinar on 13 MARCH 2024 8-10PM',
      image:
        'https://firebasestorage.googleapis.com/v0/b/facebook-api-59e5c.appspot.com/o/files%2Fdjcventure6%40gmail.com%2Fphoto_2024-03-11_17-41-22.jpg?alt=media&token=57523487-f2d0-4714-91f6-ba428f7faadf',
    },
    {
      title: 'AI Setup Training',
      desc: 'Webinar on 8 MARCH 2024 8-10PM',
      image:
        'https://firebasestorage.googleapis.com/v0/b/facebook-api-59e5c.appspot.com/o/files%2Fdjcventure6%40gmail.com%2Fphoto_2024-03-07_10-52-26.jpg?alt=media&token=9ba86af0-0e4c-4ba5-8597-0b69f2177dc9',
    },
    {
      title: 'AI Strategy for Propery Agents',
      desc: 'Webinar on 6 MARCH 2024 8-10PM',
      image:
        'https://firebasestorage.googleapis.com/v0/b/facebook-api-59e5c.appspot.com/o/files%2Fdjcventure6%40gmail.com%2F430051981_120207257044520588_6955960700238061655_n.jpg?alt=media&token=3d526b6f-59ff-404f-ab75-6c80eec279ec',
    },
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
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Adjust minmax for your card's minimum width
            gap: '16px',
            justifyContent: 'flex-start',
            marginTop: '100px',
          }}
        >
          {news.map((item, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%', // Ensures cards in the same row align vertically
                cursor: index === 0 || index === 1 ? 'pointer' : 'default', // Change cursor on hover for specific cards
                '&:hover': {
                  backgroundColor: index === 0 || index === 1 ? 'rgba(0, 0, 0, 0.04)' : '', // Show hover effect only for clickable cards
                },
              }}
              onClick={index === 0 || index === 1 ? handleClick : undefined}
            >
              <CardMedia
                component="img"
                image={item.image || '/static/images/cards/contemplative-reptile.jpg'}
                alt={item.title || 'Default Title'}
                sx={{
                  height: 350,
                  objectFit: 'cover',
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
              <CardActions>
                {index === 0 || index === 1 ? (
                  <Button size="small">COMING SOON</Button>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    Event Concluded
                  </Typography>
                )}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
}
