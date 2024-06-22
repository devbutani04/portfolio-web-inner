import React from 'react';
import { CSSProperties } from 'react'; // Import CSSProperties for style typing
import { Grid, Box, Paper, Typography } from '@mui/material';

// Importing images from assets
import image1 from '../../assets/pictures/logo.png';
import image2 from '../../assets/pictures/logo.png';
import image3 from '../../assets/pictures/logo.png';

// Importing components
import ResumeDownload from './ResumeDownload';

// TypeScript Props Definition (currently empty as no props are used)
export interface AboutProps {}

interface GridItem {
  id: number;
  image: string; // URL of the image
}

interface GridSectionProps {
  items: GridItem[];
}

const GridSection: React.FC<GridSectionProps> = ({ items }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <img src={item.image} alt={`Image ${item.id}`} style={{ width: '100%', height: 'auto' }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Gallery: React.FC<AboutProps> = () => {
  // Data for the grid items
  const items = [
    { id: 1, image: image1 },
    { id: 2, image: image1 },
    { id: 3, image: image1 },
    { id: 4, image: image1 },
    { id: 5, image: image2 },
    { id: 6, image: image3 }
  ];

  return (
    <div className="site-page-content">
      <h1 style={{ marginLeft: -16 }}>Welcome</h1>
      <h3>to Quillix Solutions...</h3>
      <br></br>
      <GridSection items={items} />
    </div>
  );
};

export default Gallery;
