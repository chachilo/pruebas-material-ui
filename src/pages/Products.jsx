import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Chip,
  Button
} from '@mui/material';

const Products = () => {
  // Datos de productos de ejemplo
  const products = [
    {
      id: 1,
      name: 'Laptop Elite',
      description: 'Ultrabook de alto rendimiento con pantalla 4K',
      price: 1299.99,
      image: 'https://via.placeholder.com/300',
      category: 'Tecnología',
      stock: 15
    },
    {
      id: 2,
      name: 'Smartphone X',
      description: 'Último modelo con cámara de 108MP',
      price: 899.99,
      image: 'https://via.placeholder.com/300',
      category: 'Tecnología',
      stock: 32
    },
    {
      id: 3,
      name: 'Auriculares Pro',
      description: 'Cancelación de ruido y sonido envolvente',
      price: 249.99,
      image: 'https://via.placeholder.com/300',
      category: 'Audio',
      stock: 8
    },
    {
      id: 4,
      name: 'Smartwatch Fitness',
      description: 'Monitorización avanzada de actividad',
      price: 199.99,
      image: 'https://via.placeholder.com/300',
      category: 'Wearables',
      stock: 21
    },
    {
      id: 5,
      name: 'Teclado Mecánico',
      description: 'Switches Cherry MX, retroiluminación RGB',
      price: 129.99,
      image: 'https://via.placeholder.com/300',
      category: 'Periféricos',
      stock: 14
    },
    {
      id: 6,
      name: 'Monitor 27" 4K',
      description: 'Pantalla IPS, HDR, 144Hz',
      price: 599.99,
      image: 'https://via.placeholder.com/300',
      category: 'Monitores',
      stock: 7
    },
    {
      id: 7,
      name: 'Impresora 3D',
      description: 'Área de impresión 200x200x200mm',
      price: 349.99,
      image: 'https://via.placeholder.com/300',
      category: 'Impresión',
      stock: 4
    },
    {
      id: 8,
      name: 'Disco SSD 1TB',
      description: 'Velocidad lectura 3500MB/s',
      price: 109.99,
      image: 'https://via.placeholder.com/300',
      category: 'Almacenamiento',
      stock: 25
    }
  ];

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Nuestros Productos
      </Typography>
      
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 6
              }
            }}>
              <CardMedia
                component="img"
                height="160"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>
                <Chip 
                  label={product.category} 
                  size="small" 
                  color="primary"
                  sx={{ mb: 1 }}
                />
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  ${product.price.toFixed(2)}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Stock: {product.stock} unidades
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  size="small"
                >
                  Añadir al carrito
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;