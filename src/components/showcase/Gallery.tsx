import React, { useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import image1 from '../../assets/pictures/g_image1.jpg';
import image2 from '../../assets/pictures/g_image2.jpg';
import image3 from '../../assets/pictures/g_image3.jpg';
import image4 from '../../assets/pictures/g_image4.jpg';
import image5 from '../../assets/pictures/g_image5.jpg';
import image6 from '../../assets/pictures/g_image6.jpg';
import image7 from '../../assets/pictures/g_image7.jpg';
import image8 from '../../assets/pictures/g_image8.jpg';
import image9 from '../../assets/pictures/g_image9.jpg';
import image10 from '../../assets/pictures/g_image10.jpg';
import image11 from '../../assets/pictures/g_image11.jpg';
import image12 from '../../assets/pictures/g_image12.jpg';
import image13 from '../../assets/pictures/g_image13.jpg';
import image14 from '../../assets/pictures/g_image14.jpg';
import image15 from '../../assets/pictures/g_image15.jpg';
import image16 from '../../assets/pictures/g_image16.jpg';

interface GridItem {
  id: number;
  image: string;
}

interface GridSectionProps {
  items: GridItem[];
}

const GridSection: React.FC<GridSectionProps> = ({ items }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    const modal = document.getElementById("modal01") as HTMLDivElement;
    modal.style.display = "block";
  };

  const closeModal = () => {
    setCurrentImageIndex(-1);
    const modal = document.getElementById("modal01") as HTMLDivElement;
    modal.style.display = "none";
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid 
            item 
            xs={12} 
            sm={index === items.length - 1 ? 12 : 6} 
            md={index === items.length - 1 ? 12 : 4} 
            key={item.id}
          >
            <Paper elevation={3} sx={{ padding: 2 }} className='image-zoom'>
              <img
                src={item.image}
                onClick={() => openModal(index)}
                alt={`Gallery item ${item.id}`}
                style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      {/* Modal Section */}
      <div id="modal01">
        <span className="close" onClick={closeModal}>&times;</span>
        {currentImageIndex !== -1 && (
          <>
            <div className="modal-content1 hoverimg animate__animated animate__zoomIn">
              <img
                src={items[currentImageIndex].image}
                className='modal-image'
                id="img01"
                alt={`Gallery item ${items[currentImageIndex].id}`}
                style={{ transition: 'all 0.4s' }}
              />
            </div>
            <button className="prev" onClick={prevImage}>&#10094;</button>
            <button className="next" onClick={nextImage}>&#10095;</button>
          </>
        )}
      </div>
    </Box>
  );
};

const Gallery: React.FC = () => {
  const items: GridItem[] = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
    { id: 10, image: image10 },
    { id: 11, image: image11 },
    { id: 12, image: image12 },
    { id: 13, image: image13 },
    { id: 14, image: image14 },
    { id: 15, image: image15 },
    { id: 16, image: image16 }
  ];

  return (
    <div className="site-page-content">
      <h1 style={{ marginLeft: -16 }}>Welcome</h1>
      <h3>to Quillix Solutions...</h3>
      <br />
      <GridSection items={items} />
    </div>
  );
};

export default Gallery;
