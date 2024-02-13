import React from 'react';
import { Container, Grid, Box, Typography, Card, CardMedia, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom";
const helperData = [
  {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cleaning',
    description: 'Book a professional housekeeper for your daily chores',
    heading: 'Online Maid Service',
  },
  {
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Cooking',
    description: 'Book a professional  chef to prepare meals for you and your family.',
    heading: 'Online Cook Service',
  },
  // Add more objects as needed
];

function ServicesDescription() {
  const navigate = useNavigate();
  const { title } = useParams();

  // Find the object in helperData that matches the provided title
  const selectedService = helperData.find(service => service.title === title);

  if (!selectedService) {
    // Handle case where title doesn't match any service
    return <div>Service not found</div>;
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '1%', marginBottom: '1%' }}>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ width: '100%', height: '100%', borderRadius: '8px' }}>
            <CardMedia
              component="img"
              alt="Service Image"
              height="100%"
              image={selectedService.image}
            />
          </Card>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%" textAlign="center">
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>{selectedService.heading}</Typography>
            <Typography variant="h6">{selectedService.description}</Typography>
            <Button
              variant="contained"
              sx={{ color: 'white', backgroundColor: 'black', width: '10rem', mt: '1rem' }}
              onClick={() => navigate('/CitySelection')}
            >
              Book Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServicesDescription;
