import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

const Dashboard = () => {
  // Array de imágenes (puedes reemplazar con tus propias URLs)
  const images = [
    { id: 1, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSvjONjwf6Y9p-ULcT1fbHX4YgLJORNUMhA&s', title: 'Equipo 1' },
    { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1q920Ocm1D_4kT4eDT_jCKc_rbYjlw2m5A&s', title: 'Equipo 2' },
    { id: 3, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CSgBQuqL95z7Rz9LWyoEhAeaaIBPrS6r-A&s', title: 'Equipo 3' },
  ];

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Typography paragraph sx={{ mb: 4 }}>
        Bienvenido al panel de control
      </Typography>

      {/* Contenedor de imágenes en fila */}
      <Grid container spacing={3}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={image.url}
                alt={image.title}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6">{image.title}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;