import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import DelhiIcon from './Images/Delhi.png';
import GurgaonIcon from './Images/Gurgaon.jpg';
import NoidaIcon from './Images/Noida.png';
import PuneIcon from './Images/Pune.jpg';

const CitySelection = () => {
  const cities = [
    { label: 'Delhi', icon: DelhiIcon },
    { label: 'Gurgaon', icon: GurgaonIcon },
    { label: 'Noida', icon: NoidaIcon },
    { label: 'Pune', icon: PuneIcon },
  ];
  const storedTitle = sessionStorage.getItem('selectedServiceTitle');
  return (
    <Box margin={2}>
      <Typography variant="h4" align="center" fontWeight="bold" margin={2}>
        Select Your City
      </Typography>
      <Typography variant="h5" align="center" margin={2}>
        I’m looking for a Helper in your city.
      </Typography>
      <Grid container spacing={2}>
        {cities.map((city, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Link to={`/ServiceSelection`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={city.icon}
                  alt={`${city.label} Icon`}
                  style={{ width: '100%', maxWidth: '20rem', height: 'auto', marginBottom: '10px', borderRadius: '2rem' }}
                />
                <Typography variant="h6">{city.label}</Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" align="center" margin={2}>
        Select the location where you’d like to book a Helper
      </Typography>
    </Box>
  );
};

export default CitySelection;
